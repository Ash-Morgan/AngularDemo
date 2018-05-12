import {Injectable} from "@angular/core";
import {WebApiService} from "./web-api.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuctionInfoService extends WebApiService {

  constructor(private http: HttpClient) {
    super();
  }

  public getGoodsInfoByUserIdGstate0(data):Observable<any>{
    let url=AuctionInfoService.getApiUrl()+"auction/getgoodsinfobyuseridgstate0";
    console.log('Fetching...');
    console.log(url);
    let ob:Observable<any> = this.http
      .get(url,{params: data});
    console.log('Fetching End');
    return ob;
  }

  public getGoodsInfoByUserIdGstate1(data):Observable<any>{
    let url=AuctionInfoService.getApiUrl()+"auction/getgoodsinfobyuseridgstate1";
    console.log('Fetching...');
    console.log(url);
    let ob:Observable<any> = this.http
      .get(url,{params: data});
    console.log('Fetching End');
    return ob;
  }
}
