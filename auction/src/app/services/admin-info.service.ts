
import {Injectable} from '@angular/core';
import {WebApiService} from "./web-api.service";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {log} from "util";
import {AdminInfo} from "../entity/AdminInfo";

@Injectable()
export class AdminInfoService extends WebApiService {

  constructor(private http:HttpClient) {
    super();
  }

  //用户登录提交用户信息
  public postAdminLogin(info:AdminInfo):Observable<any>{
    let url=AdminInfoService.getApiUrl()+"admin/adminlogin";
    log('Fetching...');
    log(url);
    log(info.toString());
    let ob:Observable<any> = this.http
      .post(url,info);
    log('Fetching End');
    return ob;
  }

}
