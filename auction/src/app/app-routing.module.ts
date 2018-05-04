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

const routes: Routes = [
  {path: '', redirectTo: '/cus/main', pathMatch: 'full'},
  {
    path: 'cus', component: CusComponent,
    children: [
      {path: 'main', component: MainComponent},
      {path: 'demo2', component: CardComponent},
      {path: 'goods', component: GoodsComponent}
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
