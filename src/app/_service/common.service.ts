import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrls } from '../api-url';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private mainService: MainService) { }
  /*
   getKycdetail()
   // for get user kyc status list
   ---------------------------------
   postEmailtouser()
   // for post request on the specific user email as per their status
   */
  public getKycdetail(): Observable<any> {
    return this.mainService.getRequest(ApiUrls.getKycStatus);
  }
  public postEmailtouser(data: object): Observable<any> {
    return this.mainService.postRequest(ApiUrls.sendEmailToUsers, data);
  }
}
