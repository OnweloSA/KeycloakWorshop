import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './models/user';
import {UserDetails} from './models/user-details';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private static endpoint = environment.serverUrl + '/users/';

  constructor(private http: HttpClient) {
  }

  getUser(id: number): Observable<UserDetails> {
    return this.http.get<UserDetails>(UsersService.endpoint + id);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(UsersService.endpoint);
  }

  save(user: UserDetails): Observable<any> {
    return this.http.post(UsersService.endpoint, user);
  }

  update(user: UserDetails): Observable<any> {
    return this.http.put(UsersService.endpoint, user);
  }
}
