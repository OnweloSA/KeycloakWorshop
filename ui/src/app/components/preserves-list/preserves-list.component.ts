import { Component, OnInit } from '@angular/core';
import { BsModalService } from "ngx-bootstrap";
import { Preservative } from "../../models/preservative";
import { PreservesService } from "../../preserves.service";
import { PreserveDetailsComponent } from "../preserve-details/preserve-details.component";

@Component({
  selector: 'app-preserves-list',
  templateUrl: './preserves-list.component.html',
  styleUrls: ['./preserves-list.component.scss']
})
export class PreservesListComponent implements OnInit {

  preservatives: Preservative[];

  constructor(private preservesService: PreservesService,
              private bsModalService: BsModalService) {
  }

  ngOnInit() {
    this.preservesService.getPreserves()
      .subscribe((data: any) => {
        console.log(data);
        console.log(data._embedded);
        this.preservatives = data._embedded.preserves;
      });
  }

  openDetails(preserve: Preservative) {
    const modalRef = this.bsModalService.show(PreserveDetailsComponent, {
      backdrop: 'static',
      keyboard: false,
      initialState: {
        preserve: preserve
      }
    });
  }

  // createNewCompany() {
  //   this.modalService.open(CompanyDetailsComponent, {
  //     backdrop: 'static',
  //     keyboard: false
  //   });
  // }

}