import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http: HttpClient,) {

  }
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',

  });
  /*
   getRequest()
   // for get user kyc status list
   ---------------------------------
   postRequest()
   // for post request on the specific user email as per their status
   */
  public getRequest(data: any): Observable<any> {
    return this.http.get(data);
  }
  public postRequest(url: any, params: any): Observable<any> {
    return this.http.post(url, params, { headers: this.headers });
  }

}
