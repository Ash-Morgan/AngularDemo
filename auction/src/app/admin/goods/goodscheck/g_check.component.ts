import {Component, OnInit} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";
import {GoodsInfoService} from "../../../services/goods-info.service";

@Component({
  selector: 'app-a-g-check',
  templateUrl: './g_check.component.html'
})
export class G_checkComponent implements OnInit{
  displayTh: Array<any> = ['商品编号', '所属用户编号', '商品名称', '商品起拍价格',
    '商品最高拍卖价格', '商品简介', '拍卖开始时间', '拍卖结束时间', '商品类别',
    '商品状态','操作'];
  data: any;

  initTable(){
    this.goodsService.getNotCheckGoodsInfo().subscribe(
      (val) => {
        console.log('Get success!', val);
        this.data = val;
      }
    );
  }

  success(info:any){
    this.goodsService.postCheckSign(info,1).subscribe(
      (val) => {
        console.log('Post success!', val);
        this.initTable();
      }
    );
  }

  failed(info:any){
    this.goodsService.postCheckSign(info,2).subscribe(
      (val) => {
        console.log('Post success!', val);
        this.initTable();
      }
    );
  }

  constructor(private message: NzMessageService,
              private goodsService: GoodsInfoService
  ){}

  ngOnInit(): void {
    this.initTable();
  }


}
