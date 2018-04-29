import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardComponent} from "./content/card/card.component";
import {HelloComponent} from "./content/hello/hello.component";
import {MainComponent} from "./content/main/main.component";
import {GoodsComponent} from "./content/goods/goods.component";
import {CusComponent} from "./cus/cus.component";
import {AdminComponent} from "./admin/admin.component";

const routes: Routes = [
  { path: '', redirectTo: '/cus/main', pathMatch: 'full' },
  { path: 'cus',component: CusComponent,
    children:[
      { path: 'main',component: MainComponent},
      { path: 'demo2',component: CardComponent},
      { path: 'hello',component: HelloComponent,
        children:[
          { path: 'demo3',component: CardComponent}
        ]},
      { path: 'goods',component: GoodsComponent}
    ]},
  { path: 'admin',component: AdminComponent,
    children:[
      { path: 'main',component: MainComponent},
      { path: 'demo2',component: CardComponent},
      { path: 'hello',component: HelloComponent,
        children:[
          { path: 'demo3',component: CardComponent}
        ]},
      { path: 'goods',component: GoodsComponent}
    ]}
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
