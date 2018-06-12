import {Component, OnInit} from '@angular/core';
import {AdminInfo} from '../../entity/AdminInfo';
import {NzMessageService} from "ng-zorro-antd";
import {AdminInfoService} from "../../services/admin-info.service";

@Component({
  selector: 'app-a-login',
  templateUrl: './a_login.component.html'
})
export class A_loginComponent implements OnInit{
  info: AdminInfo = new AdminInfo();
  username: string;
  pwd: string;

  constructor(private message: NzMessageService,
              private adminInfoService: AdminInfoService
  ){}

  ngOnInit(): void {
  }

  submitForm(value) {
    this.info.workid = this.username;
    this.info.adminpwd = this.pwd;
    this.postLogin(this.info);
  }

  private postLogin(theinfo: AdminInfo): void {
    this.adminInfoService.postAdminLogin(theinfo).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",
          val);
        if (val.result === "success") {
          sessionStorage.setItem('adminstate', theinfo.workid);
          this.message.create('success', `Welcome to login:` +  theinfo.workid);
          window.open('/admin/main/goods',"_self");
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
}
