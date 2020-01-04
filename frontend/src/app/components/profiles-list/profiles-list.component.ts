import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProfilesService} from '../../profiles.service';
import {Profile} from '../../models/profile';
import {ProfileDetailsComponent} from '../profile-details/profile-details.component';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {ApprovalComponent} from '../approval/approval.component';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit {

  trash = faTrashAlt;
  profiles: Profile[];

  constructor(private profilesService: ProfilesService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.profilesService.getProfiles()
      .subscribe((data: Profile[]) => {
        this.profiles = data;
      });
  }

  openDetails(name: String) {
    const modalRef = this.modalService.open(ProfileDetailsComponent, {
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.name = name;
  }

  openNewUser() {
    this.modalService.open(ProfileDetailsComponent, {
      backdrop: 'static',
      keyboard: false
    });
    // TODO: dodac nowy profil fo list
  }

  deleteProfile(e: Event, profile: Profile) {
    e.stopPropagation();
    const modalRef = this.modalService.open(ApprovalComponent, {
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.question = 'Czy na pewno chcesz usunąć profil ' + profile.name + '?';
    modalRef.result.then(value => {
      if (value) {
        console.log('Usuwam profil!');
        this.profilesService.removeProfile(profile.name).subscribe(() => {
          console.log('Profil usuniety!');
          const idx = this.profiles.indexOf(profile);
          this.profiles.splice(idx, 1);
        }, () => {
          console.log('Blad przy usuwaniu!');
          // TODO: jakos pokazac blad
        });
      }
    }, () => {
    });
  }
}
