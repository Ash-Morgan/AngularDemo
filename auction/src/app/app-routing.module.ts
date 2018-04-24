import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardComponent} from "./content/card/card.component";
import {HelloComponent} from "./content/hello/hello.component";
import {MainComponent} from "./content/main/main.component";
import {GoodsComponent} from "./content/goods/goods.component";

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'demo2', component: CardComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'goods', component: GoodsComponent }
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
