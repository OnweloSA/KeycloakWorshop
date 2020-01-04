import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProfilesService} from '../../profiles.service';
import {Profile} from '../../models/profile';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
  @Input() name: String;

  public profile: Profile;
  public profileForm: FormGroup = new FormGroup({});

  constructor(public activeModal: NgbActiveModal,
              private profilesService: ProfilesService,
              private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: [''],
      description: ['']
    });
  }

  ngOnInit() {
    if (this.name != null) {
      this.profilesService.getProfile(this.name)
        .subscribe(value => {
          this.profile = value;
          this.profileForm.patchValue(value);
        });
    }
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    // edycja profilu
    if (this.name == null) {
      this.profilesService.save(this.profileForm.getRawValue()).subscribe(() => {
        this.activeModal.close();
      }, error => {
        this.handleErrors(error);
      });
    } else {
      // nowy profile
      this.profilesService.update(this.profileForm.getRawValue()).subscribe(() => {
        this.activeModal.close();
      }, error => {
        this.handleErrors(error);
      });
    }
  }

  getError(controlName: string): string {
    if (this.profileForm.get(controlName).errors) {
      return this.profileForm.get(controlName).errors[0];
    } else {
      return null;
    }
  }

  private handleErrors(error) {
    error.error.errors.forEach(err => {
      const control = this.profileForm.get(err.field);
      control.setErrors([err.field + ' ' + err.defaultMessage]);
    });
  }
}
