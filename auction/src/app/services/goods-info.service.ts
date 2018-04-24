import {WebApiService} from "./web-api.service";
import {Injectable} from "@angular/core";
import {GoodsInfo} from "../entity/GoodsInfo";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {log} from "util";

@Injectable()
export class GoodsInfoService extends WebApiService {
  constructor(private http:HttpClient) {
    super();
  }

  public getAllGoodsInfo():Observable<any>{
    let url=GoodsInfoService.getApiUrl()+"goods/getallgoodsinfo";
    log('Fetching...');
    log(url);
    let ob:Observable<any> = this.http
      .get(url);
    log('Fetching End');
    return ob;
  }

  public getGoodsInfoById(data):Observable<any>{
    let url=GoodsInfoService.getApiUrl()+"goods/getbyid";
    log('Fetching...');
    log(url);
    let ob:Observable<any> = this.http
      .get(url,{params: data});
    log('Fetching End');
    return ob;
  }

  public postHighAccount(data):Observable<any>{
    let url=GoodsInfoService.getApiUrl()+"goods/posthighaccount";
    log('Fetching...');
    log(url);
    let ob:Observable<any> = this.http
      .post(url,{params: data});
    log('Fetching End');
    return ob;
  }
}
