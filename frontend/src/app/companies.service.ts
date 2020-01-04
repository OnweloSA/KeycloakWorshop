import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from './models/company';
import {CompanyDetails} from './models/company-details';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private static endpoint = environment.serverUrl + '/companies/';

  constructor(private http: HttpClient) {
  }

  getCompany(companyCode: String): Observable<CompanyDetails> {
    return this.http.get<CompanyDetails>(CompaniesService.endpoint + companyCode);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(CompaniesService.endpoint);
  }

  saveCompany(company: CompanyDetails): Observable<any> {
    return this.http.post(CompaniesService.endpoint, company);
  }

  updateCompany(company: CompanyDetails): Observable<any> {
    return this.http.put(CompaniesService.endpoint + company.companyCode, company);
  }
}
