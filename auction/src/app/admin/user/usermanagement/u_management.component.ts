import {Component, OnInit} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserInfo} from "../../../entity/UserInfo";
import {UserInfoService} from "../../../services/user-info.service";

@Component({
  selector: 'app-u-management',
  templateUrl: './u_management.component.html'
})
export class U_managementComponent implements OnInit {

  displayTh: Array<any> = ['用户编号', '用户名', '用户姓名',
    '用户性别', '身份证号', '出生日期', '联系方式', '用户状态','操作'];
  data: any;
  userUpdate:UserInfo = new UserInfo();
  userinfo:UserInfo = new UserInfo();
  updateShow:boolean = false;
  addShow:boolean = false;

  initTable(){
    this.userService.getAllUsers().subscribe(
      (val) => {
        console.log('Get success!', val);
        this.data = val;
      }
    );
  }

  eventHandler_U(event:boolean) {
    this.updateShow = event;
  }

  eventHandler_A(event:boolean) {
    this.addShow = event;
  }

  openUpdate(info:any):void{
    this.userUpdate=info;
    console.log('userUpdate=',this.userUpdate);
    this.updateShow = true;
  }

  closeUpdate():void{
    this.updateShow = false;
  }

  openAdd():void{
    this.addShow = true;
  }

  closeAdd():void{
    this.addShow = false;
  }

  deleteinfo(info:any):void{
    this.userService.deleteuserinfo(info).subscribe(
      () =>{
        this.message.create('success', `删除成功！`);
        this.initTable();
      }
    );
  }

  constructor(private message: NzMessageService,
              private userService: UserInfoService) {
  }

  ngOnInit() {
    this.initTable();
  }
}
