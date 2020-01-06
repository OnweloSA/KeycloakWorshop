import { Component, EventEmitter, Input, OnInit } from '@angular/core';
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
  public event: EventEmitter<any> = new EventEmitter();

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

  onSubmit() {
    console.warn(this.preserve);
    console.warn(this.preserveForm.value);
    // nowa firma
    if (this.preserve == null) {
      this.preservesService.savePreserve(this.preserveForm.getRawValue()).subscribe(() => {
        this.bsModalRef.hide();
        this.triggerParentReload();
      }, error => {
        this.handleErrors(error);
      });
    } else {
      // edycja firmy
      let updateUrl = this.preserve._links.self.href;
      this.preservesService.updatePreserve(updateUrl, this.preserveForm.getRawValue()).subscribe(() => {
        this.bsModalRef.hide();
        this.triggerParentReload();
      }, error => {
        this.handleErrors(error);
      });
    }
  }

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

  triggerParentReload() {
    this.event.emit({});
  }

}
