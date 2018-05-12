import {Component, OnInit} from '@angular/core';
import {GoodsInfoService} from "../../../services/goods-info.service";

@Component({
  selector: 'app-goodsauction',
  templateUrl: './goodsauction.html'
})
export class GoodsauctionComponent implements OnInit{
  displayTh: Array<any> = ['商品编号', '所属用户编号', '商品名称', '商品起拍价格',
    '商品最高拍卖价格', '商品简介', '拍卖开始时间', '拍卖结束时间', '商品类别',
    '商品状态'];
  data:any;

  initTable(){
    var userInfo = JSON.parse(sessionStorage.getItem('userinfo'));
    const data = {
      'gstate':1,
      'userid':userInfo.userid
    }
    this.goodsinfoservice.getGoodsInfoByGstateAndGuserid(data).subscribe(
      (val)=>{
        this.data = val;
      }
    );
  }

  constructor(private goodsinfoservice:GoodsInfoService
  ){}

  ngOnInit(): void {
    this.initTable();
  }
}
