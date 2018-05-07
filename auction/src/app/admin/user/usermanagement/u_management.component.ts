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
  u_validateForm: FormGroup;
  a_validateForm: FormGroup;

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

  inituserinfo():void{
    this.userinfo.userid = null;
    this.userinfo.username = null;
    this.userinfo.uname = null;
    this.userinfo.usex = null;
    this.userinfo.ucardid = null;
    this.userinfo.ubirthdate = null;
    this.userinfo.uphone = null;
    this.userinfo.ustate = null;
  }

  openUpdate(info:any):void{
    this.userUpdate=info;
    console.log('userUpdate=',this.userUpdate);
    this.updateShow = true;
  }

  closeUpdate():void{
    this.updateShow = false;
  }

  submitUpdate($event, value):void{
    this.userUpdate.userid = value.userid;
    this.userUpdate.username = value.username;
    this.userUpdate.uname = value.uname;
    this.userUpdate.usex = value.usex;
    this.userUpdate.ucardid = value.ucardid;
    this.userUpdate.ubirthdate = value.ubirthdate;
    this.userUpdate.uphone = value.uphone;
    this.userUpdate.ustate = value.ustate;
    this.userService.updateuserinfo(this.userUpdate).subscribe(
      () =>{
        this.message.create('success', `更新成功！`);
        this.initTable();
        this.closeUpdate();
      }
    );
  }

  openAdd():void{
    this.inituserinfo();
    this.addShow = true;
  }

  closeAdd():void{
    this.inituserinfo();
    this.a_validateForm.reset();
    this.addShow = false;
  }

  submitAdd($event, value):void{
    this.userinfo.userid = value.userid;
    this.userinfo.username = value.username;
    this.userinfo.uname = value.uname;
    this.userinfo.usex = value.usex;
    this.userinfo.ucardid = value.ucardid;
    this.userinfo.ubirthdate = value.ubirthdate;
    this.userinfo.uphone = value.uphone;
    this.userinfo.ustate = value.ustate;
    this.userService.registerUser(this.userinfo).subscribe(
      () =>{
        this.message.create('success', `添加成功！`);
        this.initTable();
        this.closeAdd();
      }
    );
  }

  deleteinfo(info:any):void{
    this.userService.deleteuserinfo(info).subscribe(
      () =>{
        this.message.create('success', `删除成功！`);
        this.initTable();
      }
    );
  }

  getU_FormControl(name) {
    return this.u_validateForm.controls[name];
  }

  getA_FormControl(name) {
    return this.a_validateForm.controls[name];
  }

  constructor(private fb: FormBuilder,
              private message: NzMessageService,
              private userService: UserInfoService) {
    this.u_validateForm = this.fb.group({
      u_gname: ['', [Validators.required]],
      u_guserid: ['', [Validators.required]],
      u_gstartaccount: ['', [Validators.required]],
      u_ghighaccount: ['', [Validators.required]],
      u_gstartdate: ['', [Validators.required]],
      u_genddate: ['', [Validators.required]],
      u_gtypeid: ['', [Validators.required]],
      u_goodstate: ['', [Validators.required]],
      u_gcontent: ['', [Validators.required]]
    });
    this.a_validateForm = this.fb.group({
      a_gname: ['', [Validators.required]],
      a_guserid: ['', [Validators.required]],
      a_gstartaccount: ['', [Validators.required]],
      a_ghighaccount: ['', [Validators.required]],
      a_gstartdate: ['', [Validators.required]],
      a_genddate: ['', [Validators.required]],
      a_gtypeid: ['', [Validators.required]],
      a_goodstate: ['', [Validators.required]],
      a_gcontent: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.initTable();
  }
}
