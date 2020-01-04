import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../models/user';
import {UsersService} from '../../users.service';
import {UserDetailsComponent} from '../user-details/user-details.component';

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe((data: User[]) => {
        this.users = data;
      });
  }

  openDetails(id: number) {
    const modalRef = this.modalService.open(UserDetailsComponent, {
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.id = id;
  }

  openNewUser() {
    this.modalService.open(UserDetailsComponent, {
      backdrop: 'static',
      keyboard: false
    });
  }
}
