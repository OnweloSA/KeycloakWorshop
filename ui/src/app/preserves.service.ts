import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";
import { Preservative } from "./models/preservative";

@Injectable({
  providedIn: 'root'
})
export class PreservesService {

  private static endpoint = environment.serverUrl + '/preserves';

  constructor(private httpClient: HttpClient) { }

  getPreserves(): Observable<any> {
    return this.httpClient.get<any>(PreservesService.endpoint);
  }

  savePreserve(preserve: Preservative): Observable<any> {
    return this.httpClient.post(PreservesService.endpoint, preserve);
  }

  updatePreserve(updateUrl: string, preserve: Preservative): Observable<any> {
    return this.httpClient.put(updateUrl, preserve);
  }

}
