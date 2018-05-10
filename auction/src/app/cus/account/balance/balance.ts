import {Component, OnInit} from '@angular/core';
import {AccountInfo} from "../../../entity/AccountInfo";
import {AccountInfoService} from "../../../services/account-info.service";

@Component({
  selector: 'app-balance',
  templateUrl: './balance.html'
})
export class BalanceComponent implements OnInit{
  dataInfo:AccountInfo = new AccountInfo();

  constructor(private accountInfoService:AccountInfoService) {
  }

  ngOnInit() {
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
