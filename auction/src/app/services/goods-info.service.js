"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var web_api_service_1 = require("./web-api.service");
var core_1 = require("@angular/core");
var util_1 = require("util");
var GoodsInfoService = /** @class */ (function (_super) {
    __extends(GoodsInfoService, _super);
    function GoodsInfoService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    GoodsInfoService_1 = GoodsInfoService;
    GoodsInfoService.prototype.getAllGoodsInfo = function () {
        var url = GoodsInfoService_1.getApiUrl() + "goods/getallgoodsinfo";
        util_1.log('Fetching...');
        util_1.log(url);
        var ob = this.http
            .get(url);
        util_1.log('Fetching End');
        return ob;
    };
    GoodsInfoService.prototype.getGoodsInfoById = function (data) {
        var url = GoodsInfoService_1.getApiUrl() + "goods/getbyid";
        util_1.log('Fetching...');
        util_1.log(url);
        var ob = this.http
            .get(url, { params: data });
        util_1.log('Fetching End');
        return ob;
    };
    GoodsInfoService.prototype.postHighAccount = function (data) {
        var url = GoodsInfoService_1.getApiUrl() + "goods/posthighaccount";
        util_1.log('Fetching...');
        util_1.log(url);
        var ob = this.http
            .post(url, { params: data });
        util_1.log('Fetching End');
        return ob;
    };
    GoodsInfoService = GoodsInfoService_1 = __decorate([
        core_1.Injectable()
    ], GoodsInfoService);
    return GoodsInfoService;
    var GoodsInfoService_1;
}(web_api_service_1.WebApiService));
exports.GoodsInfoService = GoodsInfoService;
