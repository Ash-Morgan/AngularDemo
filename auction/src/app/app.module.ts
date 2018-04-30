import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {MainComponent} from "./cus/main/main.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardComponent} from "./content/card/card.component";
import {AppRoutingModule} from './/app-routing.module';
import {HelloComponent} from "./content/hello/hello.component";
import {LoginComponent} from "./cus/login/login.component";
import {UserInfoService} from "./services/user-info.service";
import {GoodsComponent} from "./cus/goods/goods.component";
import {GoodsInfoService} from "./services/goods-info.service";
import {CountdownComponent} from "./cus/countdown/countdown.component";
import {RegisterComponent} from "./cus/register/register.component";
import {CusComponent} from "./cus/cus.component";
import {AdminComponent} from "./admin/admin.component";
import {A_loginComponent} from "./admin/login/a_login.component";
import {AdminInfoService} from "./services/admin-info.service";
import {A_mainComponent} from "./admin/main/a_main.component";


@NgModule({
  declarations: [
    AppComponent,
    CusComponent,
    AdminComponent,
    MainComponent,
    CardComponent,
    LoginComponent,
    HelloComponent,
    GoodsComponent,
    CountdownComponent,
    RegisterComponent,
    A_loginComponent,
    A_mainComponent
  ],
  imports: [
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AdminInfoService,UserInfoService,GoodsInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
