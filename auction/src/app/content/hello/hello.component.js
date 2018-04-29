"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
        this.array = ["url(.././assets/images/cont/slider_img1.jpg)"];
    }
    HelloComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function (_) {
            _this.array = ["url(.././assets/images/cont/slider_img1.jpg)",
                "url(.././assets/images/cont/slider_img2.jpg)",
                "url(.././assets/images/cont/slider_img3.jpg)",
                "url(.././assets/images/cont/slider_img4.jpg)",
                "url(.././assets/images/cont/slider_img5.jpg)"];
        }, 500);
    };
    HelloComponent = __decorate([
        core_1.Component({
            selector: 'app-hello',
            templateUrl: './hello.component.html',
            styleUrls: ['./css/index.css']
        })
    ], HelloComponent);
    return HelloComponent;
}());
exports.HelloComponent = HelloComponent;
