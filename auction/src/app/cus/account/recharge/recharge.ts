import {Component, OnInit} from '@angular/core';
import {AccountInfo} from "../../../entity/AccountInfo";
import {AccountInfoService} from "../../../services/account-info.service";
import {MainService} from "../../../services/main.service";
import {AccountChange} from "../../../entity/Accountchange";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.html'
})
export class RechargeComponent implements OnInit{
  isVisible:boolean = false;
  dataInfo:AccountInfo = new AccountInfo();
  amount:number = 1.0;
  URL:string ;
  accountchange:AccountChange = new AccountChange();
  reaccountchange:AccountChange = new AccountChange();

  reCharge(){
    this.isVisible = true;
    const data = {
      'accountid':this.dataInfo.accountid,
      'userid':this.dataInfo.userid,
      'amount':this.amount,
      'content':'充值'
    }
    this.accountInfoService.setAccountInfo(data).subscribe(
      (val) =>{
        console.log('Get acconutchange',val)
        this.accountchange = JSON.parse(val.reback);
        console.log('Get acconutchange',this.accountchange)
      }
    );
    var interval = setInterval(_ => {
      const info = {
        'changeid':this.accountchange.changeid
      }
      this.accountInfoService.getAccountChangeById(info).subscribe(
        (val)=>{
          console.log('Get acconutchange',val)
          this.reaccountchange = JSON.parse(val.accountchange);
          console.log('Get acconutchange',this.accountchange)
          if(this.reaccountchange.cstate === 1){
            clearInterval(interval);
            this.close();
            window.open('/cus/account/balance','_self');
            this.message.create('success',
              '恭喜你，充值成功！');
          }
        }
      )
    },500);
  }

  close(){
    this.isVisible = false;
  }

  constructor(private mainService:MainService,
              private message: NzMessageService,
    private accountInfoService:AccountInfoService) {
  }

  ngOnInit() {
    this.mainService.getServerIP().subscribe(
      (val)=>{
        this.URL = 'http://'+val.ipaddress+':8081/main/checkrecharge';
        console.log(this.URL);
      }
    );
    var userInfo = JSON.parse(sessionStorage.getItem('userinfo'));
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
