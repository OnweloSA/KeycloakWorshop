import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Profile} from './models/profile';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  private static endpoint = environment.serverUrl + '/profiles/';

  constructor(private http: HttpClient) {
  }

  getProfile(name: String): Observable<Profile> {
    return this.http.get<Profile>(ProfilesService.endpoint + name);
  }

  removeProfile(name: String): Observable<any> {
    return this.http.delete(ProfilesService.endpoint + name);
  }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(ProfilesService.endpoint);
  }

  save(company: Profile): Observable<any> {
    return this.http.post(ProfilesService.endpoint, company);
  }

  update(company: Profile): Observable<any> {
    return this.http.put(ProfilesService.endpoint + company.name, company);
  }
}
