import {Observable} from "rxjs/Observable";
import {WebApiService} from "./web-api.service";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AddressInfoService extends WebApiService {

  constructor(private http: HttpClient) {
    super();
  }

  public getAllAddressInfo(data):Observable<any>{
    let url=AddressInfoService.getApiUrl()+"user/getaddressbyuserid";
    console.log('Fetching...');
    console.log(url);
    let ob:Observable<any> = this.http
      .get(url,{params:data});
    console.log('Fetching End');
    return ob;
  }
}
