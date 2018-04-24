
import {Injectable} from '@angular/core';
import {WebApiService} from "./web-api.service";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {log} from "util";
import {UserInfo} from "../entity/UserInfo";

@Injectable()
export class UserInfoService extends WebApiService {

  constructor(private http:HttpClient) {
    super();
  }

  public postUserInfo(info:UserInfo):Observable<any>{
    let url=UserInfoService.getApiUrl()+"user/postuserinfo";
    log('Fetching...');
    log(url);
    log(info.toString());
    let ob:Observable<any> = this.http
      .post(url,info);
    log('Fetching End');
    return ob;
  }
}
