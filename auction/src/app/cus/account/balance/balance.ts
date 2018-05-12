import {Component, OnInit} from '@angular/core';
import {AccountInfo} from "../../../entity/AccountInfo";
import {AccountInfoService} from "../../../services/account-info.service";
import {UserInfo} from "../../../entity/UserInfo";

@Component({
  selector: 'app-balance',
  templateUrl: './balance.html'
})
export class BalanceComponent implements OnInit{
  dataInfo:AccountInfo = new AccountInfo();

  constructor(private accountInfoService:AccountInfoService) {
  }

  ngOnInit() {
    var userInfo:UserInfo = JSON.parse(sessionStorage.getItem('userinfo'));
    const data = {
      'userid':userInfo.userid
    }
    this.accountInfoService.getAccountByUserid(data).subscribe(
      (val)=>{
        console.log(val);
        this.dataInfo = JSON.parse(val.accountinfo);
        console.log(this.dataInfo);
      }
    )
  }
}
