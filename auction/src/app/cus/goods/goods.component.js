"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GoodsInfo_1 = require("../../entity/GoodsInfo");
var GoodsComponent = /** @class */ (function () {
    function GoodsComponent(goodsInfoService, _message, routerInfo) {
        this.goodsInfoService = goodsInfoService;
        this._message = _message;
        this.routerInfo = routerInfo;
        this.URL = ".././assets/images/goods/";
        this.array = ["url(" + this.URL + "goods1_1.jpg)"];
        this.goodsinfo = new GoodsInfo_1.GoodsInfo();
        this.isdisabled = false;
        this.count = 100.0;
    }
    GoodsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.routerInfo.snapshot.queryParams["id"];
        setTimeout(function (_) {
            _this.array = ["url(" + _this.URL + "goods1_1.jpg)",
                "url(" + _this.URL + "goods1_2.jpg)",
                "url(" + _this.URL + "goods1_3.jpg)",
                "url(" + _this.URL + "goods1_4.jpg)",
                "url(" + _this.URL + "goods1_5.jpg)"];
        }, 500);
        this.initGoods();
        // setInterval(_ => {
        //   this.initGoods();
        // }, 500);
        setInterval(function (_) {
            _this.endDate = Date.parse(_this.goodsinfo.genddate);
            if (Math.floor(_this.endDate - Date.now()) <= 0) {
                _this.isdisabled = true;
            }
        }, 500);
    };
    GoodsComponent.prototype.initGoods = function () {
        var _this = this;
        var data = {
            'id': this.id
        };
        this.goodsInfoService.getGoodsInfoById(data).subscribe(function (val) {
            console.log("GET call successful!", val);
            _this.goodsinfo.goodsid = val.goodsid;
            _this.goodsinfo.guserid = val.guserid;
            _this.goodsinfo.gname = val.gname;
            _this.goodsinfo.gstartaccount = val.gstartaccount;
            _this.goodsinfo.ghighaccount = val.ghighaccount;
            _this.goodsinfo.gcontent = val.gcontent;
            _this.goodsinfo.gstartdate = val.gstartdate;
            _this.goodsinfo.genddate = val.genddate;
            _this.goodsinfo.goodstate = val.goodstate;
            _this.goodsinfo.gstate = val.gstate;
            console.log("Put in success!", _this.goodsinfo);
        });
    };
    GoodsComponent.prototype.addprice = function () {
        var _this = this;
        if (this.isLogin()) {
            this.goodsinfo.ghighaccount += this.count;
            var data = {
                'goodsid': this.goodsinfo.goodsid,
                'goodsghighaccount': this.goodsinfo.ghighaccount,
                'username': sessionStorage.getItem('userinfo')
            };
            this.goodsInfoService.postHighAccount(data).subscribe(function (val) {
                console.log("POST call successful value returned in body!", val);
                if (val.result === "success") {
                    _this._message.create('success', '恭喜你，出价成功所出价格为:' + _this.goodsinfo.ghighaccount);
                }
                else if (val.result === "error") {
                    _this._message.create('error', '出价失败，余额不足！');
                }
            });
        }
        else {
            window.alert("请先登录！");
        }
    };
    GoodsComponent.prototype.isLogin = function () {
        if (sessionStorage.getItem('userinfo') != null) {
            return true;
        }
        return false;
    };
    GoodsComponent = __decorate([
        core_1.Component({
            selector: 'app-goods',
            templateUrl: './goods.component.html',
            styleUrls: ['./goods.component.css']
        })
    ], GoodsComponent);
    return GoodsComponent;
}());
exports.GoodsComponent = GoodsComponent;
