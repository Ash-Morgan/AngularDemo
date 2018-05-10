import {Observable} from "rxjs/Observable";
import {WebApiService} from "./web-api.service";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AccountInfoService extends WebApiService {

  constructor(private http:HttpClient) {
    super();
  }

  public getAccountByUsername(data):Observable<any>{
    let url=AccountInfoService.getApiUrl()+"user/getaccountbyusername";
    console.log('Fetching...');
    console.log(url);
    let ob:Observable<any> = this.http
      .get(url,{params:data});
    console.log('Fetching End');
    return ob;
  }

}
