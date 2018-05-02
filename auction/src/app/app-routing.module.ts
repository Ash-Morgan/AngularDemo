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
          {path: 'goods', component: A_goodsComponent}
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
