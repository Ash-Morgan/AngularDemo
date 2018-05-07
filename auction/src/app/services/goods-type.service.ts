import {HttpClient} from "@angular/common/http";
import {WebApiService} from "./web-api.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class GoodsTypeService extends WebApiService {
  constructor(private http: HttpClient) {
    super();
  }

  public getAllType():Observable<any>{
    let url=GoodsTypeService.getApiUrl()+"goods/getallgoodstype";
    console.log('Fetching...');
    console.log(url);
    let ob:Observable<any> = this.http
      .get(url);
    console.log('Fetching End');
    return ob;
  }

  public getGoodsTypeByTypeId(data):Observable<any>{
    let url=GoodsTypeService.getApiUrl()+"goods/gettypebyid";
    console.log('Fetching...');
    console.log(url);
    let ob:Observable<any> = this.http
      .get(url,{params: data});
    console.log('Fetching End');
    return ob;
  }
}
