import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UsersService} from '../../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() id: number;
  public userForm: FormGroup = new FormGroup({});

  constructor(public activeModal: NgbActiveModal,
              private usersService: UsersService,
              private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [''],
      lastName: [''],
      mail: [''],
      alias: [''],
      pass: [''],
      extId: [''],
      admin: [false],
      active: [false]
    });
  }

  ngOnInit() {
    if (this.id != null) {
      this.usersService.getUser(this.id)
        .subscribe(value => {
          this.userForm.patchValue(value);
        });
    }
  }

  onSubmit() {
    console.warn(this.userForm.value);
    // edycja uzytkownika
    if (this.id == null) {
      this.usersService.save(this.userForm.getRawValue()).subscribe(() => {
        this.activeModal.close();
      }, error => {
        this.handleErrors(error);
      });
    } else {
      // nowy uzytkownik
      this.usersService.update(this.userForm.getRawValue()).subscribe(() => {
        this.activeModal.close();
      }, error => {
        this.handleErrors(error);
      });
    }
  }

  getError(controlName: string): string {
    if (this.userForm.get(controlName).errors) {
      return this.userForm.get(controlName).errors[0];
    } else {
      return null;
    }
  }

  private handleErrors(error) {
    error.error.errors.forEach(err => {
      const control = this.userForm.get(err.field);
      control.setErrors([err.field + ' ' + err.defaultMessage]);
    });
  }
}
