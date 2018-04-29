"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MainComponent = /** @class */ (function () {
    function MainComponent(goodsinfoservice) {
        this.goodsinfoservice = goodsinfoservice;
        this.array = ["url(.././assets/images/cont/slider_img1.jpg)"];
        this.list1 = ["1", "2", "3", "4", "5"];
        this.list2 = ["6", "7", "8", "9", "10"];
        this.goodslist = [];
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function (_) {
            _this.array = ["url(.././assets/images/cont/slider_img1.jpg)",
                "url(.././assets/images/cont/slider_img2.jpg)",
                "url(.././assets/images/cont/slider_img3.jpg)",
                "url(.././assets/images/cont/slider_img4.jpg)",
                "url(.././assets/images/cont/slider_img5.jpg)"];
        }, 500);
        this.initList();
    };
    MainComponent.prototype.initList = function () {
        var _this = this;
        this.goodsinfoservice.getAllGoodsInfo().subscribe(function (val) {
            console.log("Post success", val);
            _this.goodslist = val;
            console.log("Put success", _this.goodslist);
        });
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-content',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css']
        })
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
