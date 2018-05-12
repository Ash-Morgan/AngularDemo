import {Component, OnInit} from '@angular/core';
import {AccountInfoService} from "../../../services/account-info.service";
import {AccountInfo} from "../../../entity/AccountInfo";
import {AccountChange} from "../../../entity/Accountchange";
import {MainService} from "../../../services/main.service";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.html'
})
export class BillComponent implements OnInit{
  displayTh: Array<any> = ['账单编号', '账户编号', '用户编号', '交易金额',
    '交易时间', '交易内容', '交易状态','操作'];
  data: any;
  isVisible:boolean = false;
  dataInfo:AccountInfo = new AccountInfo();
  amount:number = 1.0;
  URL:string ;
  accountchange:AccountChange = new AccountChange();
  reaccountchange:AccountChange = new AccountChange();

  deleteinfo(changeid:number){
    const data = {
      'changeid':changeid
    }
    this.accountInfoService.deleteAccountInfo(data).subscribe(
      (val)=>{
        console.log('Get',val)
        this.message.create('success',
          '记录删除成功！');
        this.initTable();
      }
    )
  }

  reCharge(changeid:number){
    this.isVisible = true;
    this.accountchange.changeid = changeid;
    var interval = setInterval(_ => {
      const info = {
        'changeid':changeid
      }
      this.accountInfoService.getAccountChangeById(info).subscribe(
        (val)=>{
          console.log('Get acconutchange',val)
          this.reaccountchange = JSON.parse(val.accountchange);
          console.log('Get acconutchange',this.accountchange)
          if(this.reaccountchange.cstate === 1){
            clearInterval(interval);
            this.close();
            window.open('/cus/account/bill','_self');
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

  initTable(){
    var userInfo = JSON.parse(sessionStorage.getItem('userinfo'));
    const data = {
      'userid':userInfo.userid
    }
    this.accountInfoService.getAllAccountChangeByUserid(data).subscribe(
      (val)=>{
        console.log('Get success!', val);
        this.data = val;
        console.log(this.data);
      }
    );
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
    );
    this.initTable();
  }
}
