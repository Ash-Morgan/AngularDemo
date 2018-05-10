import {HttpClient} from "@angular/common/http";
import {WebApiService} from "./web-api.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MainService extends WebApiService {
  constructor(private http: HttpClient) {
    super();
  }

  public getServerIP():Observable<any>{
    let url=MainService.getApiUrl()+"main/getserverip";
    console.log('Fetching...');
    console.log(url);
    let ob:Observable<any> = this.http
      .get(url);
    console.log('Fetching End');
    return ob;
  }
}
