import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {MainComponent} from "./content/main/main.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardComponent} from "./content/card/card.component";
import {AppRoutingModule} from './/app-routing.module';
import {HelloComponent} from "./content/hello/hello.component";
import {LoginComponent} from "./content/login/login.component";
import {UserInfoService} from "./services/user-info.service";
import {GoodsComponent} from "./content/goods/goods.component";
import {GoodsInfoService} from "./services/goods-info.service";
import {CountdownComponent} from "./content/countdown/countdown.component";
import {RegisterComponent} from "./content/register/register.component";


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardComponent,
    LoginComponent,
    HelloComponent,
    GoodsComponent,
    CountdownComponent,
    RegisterComponent
  ],
  imports: [
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UserInfoService,GoodsInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
