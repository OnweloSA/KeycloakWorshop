import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Preservative } from "../../models/preservative";
import { PreservesService } from "../../preserves.service";
import { BsModalRef } from "ngx-bootstrap";

@Component({
  selector: 'app-preserve-details',
  templateUrl: './preserve-details.component.html',
  styleUrls: ['./preserve-details.component.scss']
})
export class PreserveDetailsComponent implements OnInit {
  @Input() preserve: Preservative;
  public preserveForm: FormGroup = new FormGroup({});

  constructor(public bsModalRef: BsModalRef,
              private preservesService: PreservesService,
              private fb: FormBuilder) {
    this.preserveForm = this.fb.group({
      name: [''],
      description: [''],
      type: [''],
      expirationDate: ['']
    });
  }

  ngOnInit() {
    // wont populate in case of new item creation
    if (this.preserve != null) {
      this.preserveForm.patchValue(this.preserve);
    }
  }

  //
  // onSubmit() {
  //   console.warn(this.preserveForm.value);
  //     // nowa firma
  //   if (this.companyCode == null) {
  //     this.preservesService.savePreserve(this.preserveForm.getRawValue()).subscribe(() => {
  //       this.activeModal.close();
  //     }, error => {
  //       this.handleErrors(error);
  //     });
  //   } else {
  //   // edycja firmy
  //     this.preservesService.updatePreserve(this.preserveForm.getRawValue()).subscribe(() => {
  //       this.activeModal.close();
  //     }, error => {
  //       this.handleErrors(error);
  //     });
  //   }
  // }

  getError(controlName: string): string {
    if (this.preserveForm.get(controlName).errors) {
      return this.preserveForm.get(controlName).errors[0];
    } else {
      return null;
    }
  }

  private handleErrors(error) {
    error.error.errors.forEach(err => {
      const control = this.preserveForm.get(err.field);
      control.setErrors([err.field + ' ' + err.defaultMessage]);
    });
  }


}
