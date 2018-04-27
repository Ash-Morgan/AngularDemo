import {Component, OnInit} from '@angular/core';
import {GoodsInfo} from "../../entity/GoodsInfo";
import {GoodsInfoService} from "../../services/goods-info.service";
import {NzMessageService} from "ng-zorro-antd";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  URL: string = ".././assets/images/goods/";
  array = ["url(" + this.URL + "goods1.jpg)"];
  goodsinfo: GoodsInfo = new GoodsInfo();
  endDate: number;
  isdisabled: boolean = false;
  count: number = 100.0;
  id: number;

  constructor(private goodsInfoService: GoodsInfoService,
              private _message: NzMessageService,
              private routerInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.routerInfo.snapshot.queryParams["id"];
    setTimeout(_ => {
      this.array = ["url(" + this.URL + "goods1.jpg)",
        "url(" + this.URL + "goods2.jpg)",
        "url(" + this.URL + "goods3.jpg)",
        "url(" + this.URL + "goods4.jpg)",
        "url(" + this.URL + "goods5.jpg)"];
    }, 500);
    this.initGoods();
    // setInterval(_ => {
    //   this.initGoods();
    // }, 500);
    setInterval(_ => {
      this.endDate = Date.parse(this.goodsinfo.genddate);
      if (Math.floor(this.endDate - Date.now()) <= 0) {
        this.isdisabled = true;
      }
    }, 500);
  }

  initGoods(): void {
    const data = {
      'id': this.id
    };
    this.goodsInfoService.getGoodsInfoById(data).subscribe(
      (val) => {
        console.log("GET call successful!",
          val);
        this.goodsinfo.goodsid = val.goodsid;
        this.goodsinfo.guserid = val.guserid;
        this.goodsinfo.gname = val.gname;
        this.goodsinfo.gstartaccount = val.gstartaccount;
        this.goodsinfo.ghighaccount = val.ghighaccount;
        this.goodsinfo.gcontent = val.gcontent;
        this.goodsinfo.gstartdate = val.gstartdate;
        this.goodsinfo.genddate = val.genddate;
        this.goodsinfo.goodstate = val.goodstate;
        this.goodsinfo.gstate = val.gstate;
        console.log("Put in success!", this.goodsinfo);
      }
    );
  }

  addprice(): void {
    if (this.isLogin()) {
      this.goodsinfo.ghighaccount += this.count;
      const data = {
        'goodsid': this.goodsinfo.goodsid,
        'goodsghighaccount': this.goodsinfo.ghighaccount,
        'username': sessionStorage.getItem('userinfo')
      };
      this.goodsInfoService.postHighAccount(data).subscribe(
        (val) => {
          console.log("POST call successful value returned in body!",
            val);
          if (val.result === "success") {
            this._message.create('success',
              '恭喜你，出价成功所出价格为:' + this.goodsinfo.ghighaccount);
          } else if (val.result === "error") {
            this._message.create('error',
              '出价失败，余额不足！');
          }
        }
      );
    } else {
      window.alert("请先登录！");
    }
  }

  isLogin(): boolean {
    if (sessionStorage.getItem('userinfo') != null) {
      return true;
    }
    return false;
  }

}
