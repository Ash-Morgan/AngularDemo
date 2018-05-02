"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var A_goodsComponent = /** @class */ (function () {
    function A_goodsComponent(message) {
        this.message = message;
        this._allChecked = false;
        this._disabledButton = true;
        this._checkedNumber = 0;
        this._displayData = [];
        this._operating = false;
        this._dataSet = [];
        this._indeterminate = false;
    }
    A_goodsComponent.prototype._displayDataChange = function ($event) {
        this._displayData = $event;
    };
    A_goodsComponent.prototype._refreshStatus = function () {
        var allChecked = this._displayData.every(function (value) { return value.checked === true; });
        var allUnChecked = this._displayData.every(function (value) { return !value.checked; });
        this._allChecked = allChecked;
        this._indeterminate = (!allChecked) && (!allUnChecked);
        this._disabledButton = !this._dataSet.some(function (value) { return value.checked; });
        this._checkedNumber = this._dataSet.filter(function (value) { return value.checked; }).length;
    };
    A_goodsComponent.prototype._checkAll = function (value) {
        if (value) {
            this._displayData.forEach(function (data) { return data.checked = true; });
        }
        else {
            this._displayData.forEach(function (data) { return data.checked = false; });
        }
        this._refreshStatus();
    };
    A_goodsComponent.prototype._operateData = function () {
        var _this = this;
        this._operating = true;
        setTimeout(function (_) {
            _this._dataSet.forEach(function (value) { return value.checked = false; });
            _this._refreshStatus();
            _this._operating = false;
        }, 1000);
    };
    A_goodsComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 46; i++) {
            this._dataSet.push({
                key: i,
                name: "Edward King " + i,
                age: 32,
                address: "London, Park Lane no. " + i,
            });
        }
    };
    A_goodsComponent = __decorate([
        core_1.Component({
            selector: 'app-a-goods',
            templateUrl: './a_goods.component.html',
            styleUrls: ['a_goods.component.css']
        })
    ], A_goodsComponent);
    return A_goodsComponent;
}());
exports.A_goodsComponent = A_goodsComponent;
