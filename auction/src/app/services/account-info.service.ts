import {Observable} from "rxjs/Observable";
import {WebApiService} from "./web-api.service";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AccountInfoService extends WebApiService {

  constructor(private http:HttpClient) {
    super();
  }

  public getAccountByUserid(data):Observable<any>{
    let url=AccountInfoService.getApiUrl()+"user/getaccountbyuserid";
    console.log('Fetching...');
    console.log(url);
    let ob:Observable<any> = this.http
      .get(url,{params:data});
    console.log('Fetching End');
    return ob;
  }

  public setAccountInfo(data):Observable<any>{
    let url=AccountInfoService.getApiUrl()+"user/setaccountinfo";
    console.log('Fetching...');
    console.log(url);
    let ob:Observable<any> = this.http
      .post(url,{params:data});
    console.log('Fetching End');
    return ob;
  }

  public deleteAccountInfo(data):Observable<any>{
    let url=AccountInfoService.getApiUrl()+"user/deleteaccountinfo";
    console.log('Fetching...');
    console.log(url);
    let ob:Observable<any> = this.http
      .get(url,{params:data});
    console.log('Fetching End');
    return ob;
  }

  public getAccountChangeById(data):Observable<any>{
    let url=AccountInfoService.getApiUrl()+"user/getaccountchangebyid";
    console.log('Fetching...');
    console.log(url);
    let ob:Observable<any> = this.http
      .get(url,{params:data});
    console.log('Fetching End');
    return ob;
  }

  public getAllAccountChangeByUserid(data):Observable<any>{
    let url=AccountInfoService.getApiUrl()+"user/getallaccountchangebyuserid";
    console.log('Fetching...');
    console.log(url);
    let ob:Observable<any> = this.http
      .get(url,{params:data});
    console.log('Fetching End');
    return ob;
  }
}
