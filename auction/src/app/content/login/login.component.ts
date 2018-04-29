import {Component, OnInit} from '@angular/core';
import {UserInfo} from "../../entity/UserInfo";
import {UserInfoService} from "../../services/user-info.service";
import {NzMessageService} from "ng-zorro-antd";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  private info: UserInfo = new UserInfo();
  username: string;
  pwd: string;
  userstate: string = sessionStorage.getItem('userinfo');
  isVisible = false;
  isVisible2 = false;
  isShowRegister = false;

  constructor(private userInfoService: UserInfoService,
              private _message: NzMessageService) {
  }

  ngOnInit() {
  }

  _submitForm(value) {
    this.info.username = this.username;
    this.info.userpwd = this.pwd;
    this.postLogin(this.info);
  }

  private postLogin(theinfo: UserInfo): void {
    this.userInfoService.postUserInfo(theinfo).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",
          val);
        if (val.result === "success") {
          this.isVisible = false;
          sessionStorage.setItem('userinfo', theinfo.username);
          this.userstate = this.username;
          this._message.create('success', `Welcome to login:` +  theinfo.username);
        }
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      }
    );
  }

  open = () => {
    this.isVisible = true;
  }

  openR = () => {
    this.isVisible = false;
    this.username = null;
    this.pwd = null;
    this.isShowRegister = true;
  }

  eventHandler(event:boolean) {
    this.isShowRegister = event;
  }

  close = () => {
    this.isVisible = false;
  }

  open2 = () => {
    this.isVisible2 = true;
  }

  close2 = () => {
    this.isVisible2 = false;
  }

  closeR = () => {
    this.isShowRegister = false;
  }

  exit = () => {
    this.isVisible2 = false;
    this.username = null;
    this.pwd = null;
    sessionStorage.removeItem('userinfo');
    this.userstate = sessionStorage.getItem('userinfo');
    this._message.success("您已成功退出登录！");

  }
}

