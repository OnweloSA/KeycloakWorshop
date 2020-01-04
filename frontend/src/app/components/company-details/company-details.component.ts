import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CompaniesService} from '../../companies.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  @Input() companyCode: String;
  public companyForm: FormGroup = new FormGroup({});

  constructor(public activeModal: NgbActiveModal,
              private companiesService: CompaniesService,
              private fb: FormBuilder) {
    this.companyForm = this.fb.group({
      name: [''],
      usCode: [''],
      nip: [''],
      fullName: [''],
      regon: [''],
      countryCode: [''],
      province: [''],
      county: [''],
      community: [''],
      street: [''],
      homeNo: [''],
      flatNo: [''],
      town: [''],
      postalCode: [''],
      post: [''],
      companyCode: [''],
      systemName: [''],
      email: ['']
    });
  }

  ngOnInit() {
    if (this.companyCode != null) {
      this.companiesService.getCompany(this.companyCode)
        .subscribe(value => {
          this.companyForm.patchValue(value);
        });
    }
  }

  onSubmit() {
    console.warn(this.companyForm.value);
    // edycja firmy
    if (this.companyCode == null) {
      this.companiesService.saveCompany(this.companyForm.getRawValue()).subscribe(() => {
        this.activeModal.close();
      }, error => {
        this.handleErrors(error);
      });
    } else {
      // nowa firma
      this.companiesService.updateCompany(this.companyForm.getRawValue()).subscribe(() => {
        this.activeModal.close();
      }, error => {
        this.handleErrors(error);
      });
    }
  }

  getError(controlName: string): string {
    if (this.companyForm.get(controlName).errors) {
      return this.companyForm.get(controlName).errors[0];
    } else {
      return null;
    }
  }

  private handleErrors(error) {
    error.error.errors.forEach(err => {
      const control = this.companyForm.get(err.field);
      control.setErrors([err.field + ' ' + err.defaultMessage]);
    });
  }
}
