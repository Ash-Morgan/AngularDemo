"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GoodsInfo = /** @class */ (function () {
    function GoodsInfo() {
    }
    GoodsInfo.prototype.toString = function () {
        return "goodsid:" + this.goodsid +
            ",guserid:" + this.guserid +
            ",gname:" + this.gname +
            ",gstartaccount:" + this.gstartaccount +
            ",ghighaccount:" + this.ghighaccount +
            ",gcontent:" + this.gcontent +
            ",gstartdate:" + this.gstartdate +
            ",genddate:" + this.genddate +
            ",goodstate:" + this.goodstate +
            ",gstate:" + this.gstate;
    };
    return GoodsInfo;
}());
exports.GoodsInfo = GoodsInfo;
