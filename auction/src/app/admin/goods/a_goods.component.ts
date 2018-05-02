import {Component, OnInit} from '@angular/core';
import {AdminInfo} from '../../entity/AdminInfo';
import {NzMessageService} from "ng-zorro-antd";
import {forEach} from "@angular/router/src/utils/collection";
import {GoodsInfoService} from "../../services/goods-info.service";
import {GoodsInfo} from "../../entity/GoodsInfo";

@Component({
  selector: 'app-a-goods',
  templateUrl: './a_goods.component.html',
  styleUrls: ['a_goods.component.css']
})
export class A_goodsComponent implements OnInit {

  displayTh: Array<any> = ['商品编号', '所属用户编号', '商品名称', '商品起拍价格',
    '商品最高拍卖价格', '商品简介', '拍卖开始时间', '拍卖结束时间', '商品类别',
    '商品状态','操作'];
  data: any;
  goodsUpdate:GoodsInfo = new GoodsInfo();
  goodsinfo:GoodsInfo = new GoodsInfo();
  updateShow:boolean = false;
  addShow:boolean = false;

  constructor(private message: NzMessageService,
              private goodsService: GoodsInfoService) {
  }

  ngOnInit() {
    this.goodsService.getAllGoodsInfo().subscribe(
      (val) => {
        console.log('Get success!', val);
        this.data = val;
      }
    );
  }

  initgoodsinfo():void{
    this.goodsinfo.goodsid = null;
    this.goodsinfo.guserid = null;
    this.goodsinfo.gname = null;
    this.goodsinfo.gstartaccount = null;
    this.goodsinfo.ghighaccount = null;
    this.goodsinfo.gcontent = null;
    this.goodsinfo.gstartdate = null;
    this.goodsinfo.genddate = null;
    this.goodsinfo.gtypeid = null;
    this.goodsinfo.goodstate = null;
    this.goodsinfo.gstate = null;
  }

  openUpdate(info:any):void{
    console.log('info=',info.gname);
    this.goodsUpdate=info;
    this.updateShow = true;
  }

  closeUpdate():void{
    this.updateShow = false;
  }

  submitUpdate():void{

  }

  openAdd():void{
    this.initgoodsinfo();
    this.addShow = true;
  }

  closeAdd():void{
    this.addShow = false;
  }

  submitAdd():void{

  }
}
