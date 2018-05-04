import {Component, OnInit} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";
import {UserInfoService} from "../../../services/user-info.service";

@Component({
  selector: 'app-a-u-check_failed',
  templateUrl: './u_failed.component.html'
})
export class U_check_FailedComponent implements OnInit{
  displayTh: Array<any> = ['用户编号', '用户名', '用户姓名',
    '用户性别', '身份证号', '出生日期', '联系方式', '用户状态'];
  data: any;

  initTable(){
    this.userService.getCheckFailedUserInfo().subscribe(
      (val) => {
        console.log('Get success!', val);
        this.data = val;
      }
    );
  }


  constructor(private message: NzMessageService,
              private userService:UserInfoService
  ){}

  ngOnInit(): void {
    this.initTable();
  }


}
