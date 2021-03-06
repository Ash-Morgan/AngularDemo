import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardComponent} from "./content/card/card.component";
import {HelloComponent} from "./content/hello/hello.component";
import {MainComponent} from "./cus/main/main.component";
import {GoodsComponent} from "./cus/goods/goods.component";
import {CusComponent} from "./cus/cus.component";
import {AdminComponent} from "./admin/admin.component";
import {A_loginComponent} from "./admin/login/a_login.component";
import {A_mainComponent} from "./admin/main/a_main.component";
import {A_goodsComponent} from "./admin/goods/a_goods.component";
import {G_checkComponent} from "./admin/goods/goodscheck/g_check.component";
import {G_check_FailedComponent} from "./admin/goods/goodscheckfailed/g_check_failed.component";
import {U_checkComponent} from "./admin/user/usercheck/u_check.component";
import {U_check_FailedComponent} from "./admin/user/userfailed/u_failed.component";
import {U_managementComponent} from "./admin/user/usermanagement/u_management.component";
import {GoodstypeComponent} from "./cus/type/goodstype.component";
import {AccountComponent} from "./cus/account/account";
import {BalanceComponent} from "./cus/account/balance/balance";
import {RechargeComponent} from "./cus/account/recharge/recharge";
import {BillComponent} from "./cus/account/bill/bill";
import {AuctionComponent} from "./cus/auction/auction";
import {AuctionIngComponent} from "./cus/auction/auctioning/auctioning";
import {AuctionedComponent} from "./cus/auction/auctioned/auctioned";
import {GoodsaddComponent} from "./cus/auction/goodsadd/goodsadd";
import {GoodsauctionComponent} from "./cus/auction/goodsauction/goodsauction";
import {GoodscheckComponent} from "./cus/auction/goodscheck/goodscheck";
import {GoodsfailedComponent} from "./cus/auction/goodsfailed/goodsfailed";
import {PmainComponent} from "./cus/person/pmain";
import {AddressComponent} from "./cus/person/addresspage/address";
import {PersonComponent} from "./cus/person/personpage/person.component";

const routes: Routes = [
  {path: '', redirectTo: '/cus/main', pathMatch: 'full'},
  {
    path: 'cus', component: CusComponent,
    children: [
      {path: 'main', component: MainComponent},
      {path: 'goodstype', component: GoodstypeComponent},
      {path: 'goods', component: GoodsComponent},
      {path: 'auction', component: AuctionComponent,
        children:[
          {path: 'auctioning', component: AuctionIngComponent},
          {path: 'auctioned', component: AuctionedComponent},
          {path: 'goodsadd', component: GoodsaddComponent},
          {path: 'goodsauction', component: GoodsauctionComponent},
          {path: 'goodscheck', component: GoodscheckComponent},
          {path: 'goodsfailed', component: GoodsfailedComponent}
        ]
      },
      {path: 'pmain', component: PmainComponent,
        children:[
          {path: 'person', component: PersonComponent},
          {path: 'address', component: AddressComponent}
        ]
      },
      {path: 'account', component: AccountComponent,
        children:[
          {path: 'balance', component: BalanceComponent},
          {path: 'bill', component: BillComponent},
          {path: 'recharge', component: RechargeComponent}
        ]
      },
      {path: 'demo2', component: CardComponent}

    ]
  },
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: 'login', component: A_loginComponent},
      {
        path: 'main', component: A_mainComponent,
        children: [
          {path: 'goods', component: A_goodsComponent},
          {path: 'goodscheck', component: G_checkComponent},
          {path: 'goodsfailed', component: G_check_FailedComponent},
          {path: 'user', component: U_managementComponent},
          {path: 'usercheck', component: U_checkComponent},
          {path: 'userfailed', component: U_check_FailedComponent}
        ]
      },
      {
        path: 'hello', component: HelloComponent,
        children: [
          {path: 'demo3', component: CardComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
