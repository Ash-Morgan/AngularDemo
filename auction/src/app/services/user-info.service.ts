
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

  public getAllUsers():Observable<any>{
    let url=UserInfoService.getApiUrl()+"user/getallusers";
    log('Fetching...');
    log(url);
    let ob:Observable<any> = this.http
      .get(url);
    log('Fetching End');
    return ob;
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

  public getNotCheck():Observable<any>{
    let url=UserInfoService.getApiUrl()+"user/getnotcheck";
    log('Fetching...');
    log(url);
    let ob:Observable<any> = this.http
      .get(url);
    log('Fetching End');
    return ob;
  }

  public postCheckSign(data,sign):Observable<any>{
    let url=UserInfoService.getApiUrl()+"user/postchecksign";
    log('Fetching...');
    log(url);
    let ob:Observable<any> = this.http
      .post(url,{
        params: data,
        sign:sign
      });
    log('Fetching End');
    return ob;
  }

  public getCheckFailedUserInfo():Observable<any>{
    let url=UserInfoService.getApiUrl()+"user/getcheckfailed";
    log('Fetching...');
    log(url);
    let ob:Observable<any> = this.http
      .get(url);
    log('Fetching End');
    return ob;
  }

  //删除用户信息
  public deleteuserinfo(data):Observable<any>{
    let url=UserInfoService.getApiUrl()+"user/deleteuserinfo";
    log('Fetching...');
    log(url);
    let ob:Observable<any> = this.http
      .post(url,{params: data});
    log('Fetching End');
    return ob;
  }

  //更新用户信息
  public updateuserinfo(info:UserInfo):Observable<any>{
    let url=UserInfoService.getApiUrl()+"user/updateuserinfo";
    log('Fetching...');
    log(url);
    log(info.toString());
    let ob:Observable<any> = this.http
      .post(url,info);
    log('Fetching End');
    return ob;
  }

  //用户注册提交登录信息
  public updateUser(info:UserInfo):Observable<any>{
    let url=UserInfoService.getApiUrl()+"user/updateuser";
    log('Fetching...');
    log(url);
    log(info.toString());
    let ob:Observable<any> = this.http
      .post(url,info);
    log('Fetching End');
    return ob;
  }

  //获取指定用户信息
  public getUserInfoByUsername(data):Observable<any>{
    let url=UserInfoService.getApiUrl()+"user/getbyusername";
    log('Fetching...');
    log(url);
    let ob:Observable<any> = this.http
      .get(url,{params: data});
    log('Fetching End');
    return ob;
  }
}
