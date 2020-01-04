import {Component, OnInit} from '@angular/core';
import {CompaniesService} from '../../companies.service';
import {Company} from '../../models/company';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CompanyDetailsComponent} from '../company-details/company-details.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {

  companies: Company[];

  constructor(private companiesService: CompaniesService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.companiesService.getCompanies()
      .subscribe((data: Company[]) => {
        this.companies = data;
      });
  }

  openDetails(companyCode: string) {
    const modalRef = this.modalService.open(CompanyDetailsComponent, {
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.companyCode = companyCode;
  }

  openNewCompany() {
    this.modalService.open(CompanyDetailsComponent, {
      backdrop: 'static',
      keyboard: false
    });
  }
}
