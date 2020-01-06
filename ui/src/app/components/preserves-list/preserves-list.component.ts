import { Component, OnInit } from '@angular/core';
import { ModalModule } from "ngx-bootstrap";
import { Preservative } from "../../models/preservative";
import { PreservesService } from "../../preserves.service";

@Component({
  selector: 'app-preserves-list',
  templateUrl: './preserves-list.component.html',
  styleUrls: ['./preserves-list.component.scss']
})
export class PreservesListComponent implements OnInit {

  preservatives: Preservative[];

  constructor(private preservesService: PreservesService,
              private modalService: ModalModule) {
  }

  ngOnInit() {
    this.preservesService.getPreserves()
      .subscribe((data: any) => {
        console.log(data);
        console.log(data._embedded);
        this.preservatives = data._embedded.preserves;
      });
  }
  //
  // openDetails(companyCode: string) {
  //   const modalRef = this.modalService.open(CompanyDetailsComponent, {
  //     backdrop: 'static',
  //     keyboard: false
  //   });
  //   modalRef.componentInstance.companyCode = companyCode;
  // }
  //
  // openNewCompany() {
  //   this.modalService.open(CompanyDetailsComponent, {
  //     backdrop: 'static',
  //     keyboard: false
  //   });
  // }

}
