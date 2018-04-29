"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var card_component_1 = require("./content/card/card.component");
var hello_component_1 = require("./content/hello/hello.component");
var main_component_1 = require("./content/main/main.component");
var goods_component_1 = require("./content/goods/goods.component");
var cus_component_1 = require("./cus/cus.component");
var routes = [
    { path: '', redirectTo: '/cus/main', pathMatch: 'full' },
    { path: 'cus', component: cus_component_1.CusComponent,
        children: [
            { path: 'main', component: main_component_1.MainComponent },
            { path: 'demo2', component: card_component_1.CardComponent },
            { path: 'hello', component: hello_component_1.HelloComponent,
                children: [
                    { path: 'demo3', component: card_component_1.CardComponent }
                ] },
            { path: 'goods', component: goods_component_1.GoodsComponent }
        ] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            declarations: [],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
