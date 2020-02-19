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
    this.fetchData();
  }

  private fetchData() {
    this.preservesService.getPreserves()
      .subscribe((data: any) => {
        console.log(`Received response ${data}`);
        this.preservatives = data._embedded.preserves;
      }, (error:any) => {
        console.log(error);
      });
  }

  openDetails(preserve: Preservative) {
    let bsModalRef = this.bsModalService.show(PreserveDetailsComponent, {
      backdrop: 'static',
      keyboard: false,
      initialState: {
        preserve: preserve
      }
    });
    bsModalRef.content.event.subscribe(_ => {
      this.fetchData();
    });
  }

  newPreserve() {
    let bsModalRef = this.bsModalService.show(PreserveDetailsComponent, {
      backdrop: 'static',
      keyboard: false
    });
    bsModalRef.content.event.subscribe(_ => {
      this.fetchData();
    });
  }

}
