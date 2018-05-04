import {Component, OnInit} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";
import {UserInfoService} from "../../../services/user-info.service";

@Component({
  selector: 'app-u-check',
  templateUrl: './u_check.component.html'
})
export class U_checkComponent implements OnInit{
  displayTh: Array<any> = ['用户编号', '用户名', '用户姓名',
    '用户性别', '身份证号', '出生日期', '联系方式', '用户状态','操作'];
  data: any;

  initTable(){
    this.userService.getNotCheck().subscribe(
      (val) => {
        console.log('Get success!', val);
        this.data = val;
      }
    );
  }

  success(info:any){
    this.userService.postCheckSign(info,1).subscribe(
      (val) => {
        console.log('Post success!', val);
        this.initTable();
      }
    );
  }

  failed(info:any){
    this.userService.postCheckSign(info,2).subscribe(
      (val) => {
        console.log('Post success!', val);
        this.initTable();
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
