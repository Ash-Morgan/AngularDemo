import {Component, OnInit} from '@angular/core';
import {UserInfo} from "../../entity/UserInfo";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";
import {UserInfoService} from "../../services/user-info.service";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls:['person.component.css']
})
export class PersonComponent implements OnInit{
  datainfo:UserInfo = new UserInfo();
  validateForm: FormGroup;
  [x: string]: any;


  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    console.log("value=",value);
    let user = new UserInfo();
    user.userid = value.userId
    user.username = value.userName;
    user.userpwd = value.password;
    user.uname = value.uName
    user.usex = value.sexRadioGroup
    user.ucardid = value.uCardId
    user.ubirthdate = value.birthDay
    user.uphone = value.uPhone
    console.log(user.toString());
    this.userservice.updateUser(user).subscribe(
      (val) => {
        console.log("Post return", val);
        this._message.create('success', `更新成功`);
        this.isShow.emit(false);
      }
    );
  };

  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
    }
  }

  getFormControl(name) {
    return this.validateForm.controls[name];
  }

  validateUsername() {
    setTimeout(_ => {
      this.validateForm.controls['userName'].updateValueAndValidity();
    })
  }

//密码更改后的确认验证
  validateConfirmPassword() {
    setTimeout(_ => {
      this.validateForm.controls['passwordConfirmation'].updateValueAndValidity();
    })
  }


//密码确认验证
  passwordConfirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return {confirm: true, error: true};
    }
  };

//身份证验证
  uCardIdValidator = (control: FormControl): { [s: string]: boolean } => {
    const CardId_REGEXP = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/;
    if (!control.value) {
      return {required: true}
    } else if (!CardId_REGEXP.test(control.value)) {
      return {error: true, ucardid: true};
    }
  };

// 出生日期验证
  birthDayValidator = (control: FormControl): any => {
    if (new Date(control.value) > new Date()) {
      return {expired: true, error: true}
    }
  };

//手机号验证
  uPhoneValidator = (control: FormControl): { [s: string]: boolean } => {
    const uPhone_REGEXP = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
    if (!control.value) {
      return {required: true}
    } else if (!uPhone_REGEXP.test(control.value)) {
      return {error: true, phonecheck: true};
    }
  };

  constructor(private fb: FormBuilder,
              private userservice: UserInfoService,
              private _message: NzMessageService) {
    this.validateForm = this.fb.group({
      userId:[''],
      userName: [''],
      password: ['', [Validators.required]],
      passwordConfirmation: ['', [this.passwordConfirmationValidator]],
      uName: ['', [Validators.required]],
      sexRadioGroup: ['男'],
      uCardId: ['', [this.uCardIdValidator]],
      birthDay: ['', [this.birthDayValidator]],
      uPhone: ['', [this.uPhoneValidator]]
    });
    const data = {
      "username":sessionStorage.getItem('userinfo')
    }
    userservice.getUserInfoByUsername(data).subscribe(
      (val)=>{
        console.log(val)
        this.datainfo = JSON.parse(val.userinfo);
      }
    );
  }

  ngOnInit() {
  }
}
