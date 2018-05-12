import {Component, OnInit} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";
import {AuctionInfoService} from "../../../services/auction-info.service";

@Component({
  selector: 'app-auctioning',
  templateUrl: './auctioning.html'
})
export class AuctionIngComponent implements OnInit{
  displayTh: Array<any> = ['商品编号', '所属用户编号', '商品名称', '商品起拍价格',
    '商品最高拍卖价格', '商品简介', '拍卖开始时间', '拍卖结束时间', '商品类别',
    '商品状态','操作'];
  data: any;

  initTable(){
    var userInfo = JSON.parse(sessionStorage.getItem('userinfo'));
    const data = {
      'userid':userInfo.userid
    }
    this.auctioninfoservice.getGoodsInfoByUserIdGstate0(data).subscribe(
      (val) => {
        console.log('Get success!', val);
        this.data = val;
      }
    );
  }

  open(url){
    window.open(url,'_self')
  }

  constructor(private message: NzMessageService,
              private auctioninfoservice: AuctionInfoService
  ){}

  ngOnInit(): void {
    this.initTable();
  }
}
