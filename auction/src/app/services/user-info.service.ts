
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

  //用户登录提交用户信息
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

  //验证用户名是否存在
  public checkUsername(data):Observable<any>{
    let url=UserInfoService.getApiUrl()+"user/checkusername";
    log('Fetching...');
    log(url);
    let ob:Observable<any> = this.http
      .get(url,{params: data});
    log('Fetching End');
    return ob;
  }

  //用户注册提交登录信息
  public registerUser(info:UserInfo):Observable<any>{
    let url=UserInfoService.getApiUrl()+"user/registeruser";
    log('Fetching...');
    log(url);
    log(info.toString());
    let ob:Observable<any> = this.http
      .post(url,info);
    log('Fetching End');
    return ob;
  }
}
