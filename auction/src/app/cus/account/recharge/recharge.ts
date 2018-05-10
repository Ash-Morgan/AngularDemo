import {Component, OnInit} from '@angular/core';
import {AccountInfo} from "../../../entity/AccountInfo";
import {AccountInfoService} from "../../../services/account-info.service";
import {MainService} from "../../../services/main.service";

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.html'
})
export class RechargeComponent implements OnInit{
  dataInfo:AccountInfo = new AccountInfo();
  amount:number = 1;
  URL:string ;

  constructor(private mainService:MainService,
    private accountInfoService:AccountInfoService) {
  }

  ngOnInit() {
    this.mainService.getServerIP().subscribe(
      (val)=>{
        this.URL = 'http://'+val+':8081/main/hello';
        console.log(this.URL);
      }
    );
    const data = {
      'username':sessionStorage.getItem('userinfo')
    }
    this.accountInfoService.getAccountByUsername(data).subscribe(
      (val)=>{
        console.log(val);
        this.dataInfo = JSON.parse(val.accountinfo);
        console.log(this.dataInfo);
      }
    )
  }
}
