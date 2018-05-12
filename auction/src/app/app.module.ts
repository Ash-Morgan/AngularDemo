import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
import {A_goodsComponent} from "./admin/goods/a_goods.component";
import {G_checkComponent} from "./admin/goods/goodscheck/g_check.component";
import {G_check_FailedComponent} from "./admin/goods/goodscheckfailed/g_check_failed.component";
import {U_checkComponent} from "./admin/user/usercheck/u_check.component";
import {U_check_FailedComponent} from "./admin/user/userfailed/u_failed.component";
import {U_managementComponent} from "./admin/user/usermanagement/u_management.component";
import {U_formComponent} from "./admin/user/usermanagement/form/form.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GoodsTypeService} from "./services/goods-type.service";
import {GoodstypeComponent} from "./cus/type/goodstype.component";
import {DatePipe} from "@angular/common";
import {PersonComponent} from "./cus/person/person.component";
import {AccountComponent} from "./cus/account/account";
import {BalanceComponent} from "./cus/account/balance/balance";
import {AccountInfoService} from "./services/account-info.service";
import {RechargeComponent} from "./cus/account/recharge/recharge";
import {MainService} from "./services/main.service";
import {BillComponent} from "./cus/account/bill/bill";
import {AuctionInfoService} from "./services/auction-info.service";
import {AuctionComponent} from "./cus/auction/auction";
import {AuctionIngComponent} from "./cus/auction/auctioning/auctioning";
import {AuctionedComponent} from "./cus/auction/auctioned/auctioned";
import {GoodsaddComponent} from "./cus/auction/goodsadd/goodsadd";
import {GoodsauctionComponent} from "./cus/auction/goodsauction/goodsauction";
import {GoodscheckComponent} from "./cus/auction/goodscheck/goodscheck";
import {GoodsfailedComponent} from "./cus/auction/goodsfailed/goodsfailed";


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
    A_mainComponent,
    A_goodsComponent,
    G_checkComponent,
    G_check_FailedComponent,
    U_checkComponent,
    U_check_FailedComponent,
    U_managementComponent,
    U_formComponent,
    GoodstypeComponent,
    PersonComponent,
    AccountComponent,
    BalanceComponent,
    RechargeComponent,
    BillComponent,
    AuctionComponent,
    AuctionIngComponent,
    AuctionedComponent,
    GoodsaddComponent,
    GoodsauctionComponent,
    GoodscheckComponent,
    GoodsfailedComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    DatePipe,
    MainService,
    AdminInfoService,
    UserInfoService,
    GoodsInfoService,
    GoodsTypeService,
    AccountInfoService,
    AuctionInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
