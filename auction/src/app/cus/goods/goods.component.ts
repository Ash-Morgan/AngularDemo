import {Component, OnInit} from '@angular/core';
import {GoodsInfo} from "../../entity/GoodsInfo";
import {GoodsInfoService} from "../../services/goods-info.service";
import {NzMessageService} from "ng-zorro-antd";
import {ActivatedRoute} from "@angular/router";
import {UserInfo} from "../../entity/UserInfo";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  URL: string = ".././assets/images/goods/";
  array = ["url(" + this.URL + "goods1_1.jpg)"];
  goodsinfo: GoodsInfo = new GoodsInfo();
  userinfo: UserInfo = new UserInfo();
  highaccount: number;
  auctioninfoList: any;
  endDate: number;
  isButton: string = 'Ing';
  count: number = 100.0;
  id: number;

  initGoods(): void {
    const data = {
      'id': this.id
    };
    this.goodsInfoService.getGoodsInfoById(data).subscribe(
      (val) => {
        console.log("GET call successful!",
          val);
        this.goodsinfo = JSON.parse(val.goodsinfo);
        this.auctioninfoList = JSON.parse(val.auctionInfoList);
        console.log("Put in success!", this.goodsinfo);
        console.log("Put in success!", this.auctioninfoList);
        if (this.auctioninfoList.length > 0) {
          this.highaccount = this.auctioninfoList[0].aaccount
        }else {
          this.highaccount = this.goodsinfo.gstartaccount
        }
      }
    );
  }

  addprice(): void {
    if (this.isLogin()) {
      alert("请问您，是否确认出价？")
      this.isButton = 'Did'
      this.highaccount += this.count
      var userInfo = JSON.parse(sessionStorage.getItem('userinfo'));
      const data = {
        'goodsid': this.goodsinfo.goodsid,
        'highaccount': this.highaccount,
        'addaccount':this.count,
        'username': userInfo.username
      };
      this.goodsInfoService.postHighAccount(data).subscribe(
        (val) => {
          console.log("POST call successful value returned in body!",
            val);
          if (val.result === "success") {
            this._message.create('success',
              '恭喜你，出价成功所出价格为:' + this.highaccount);
          } else if (val.result === "error") {
            this.highaccount -= this.count;
            this._message.create('error',
              '对不起，出价失败，余额不足！');
          }
        }
      );
      this.initGoods();
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

  isDid(): boolean {
    var userInfo = JSON.parse(sessionStorage.getItem('userinfo'));
    if (this.auctioninfoList.length > 0) {
      if (userInfo.userid === this.auctioninfoList[0].userid) {
        return true;
      }else {
        return false;
      }
    }
    return false;
  }

  constructor(private goodsInfoService: GoodsInfoService,
              private _message: NzMessageService,
              private routerInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.routerInfo.snapshot.queryParams["id"];
    setTimeout(_ => {
      this.array = ["url(" + this.URL + "goods1_1.jpg)",
        "url(" + this.URL + "goods1_2.jpg)",
        "url(" + this.URL + "goods1_3.jpg)",
        "url(" + this.URL + "goods1_4.jpg)",
        "url(" + this.URL + "goods1_5.jpg)"];
    }, 500);
    // this.initGoods();
    var interval = setInterval(_ => {
      this.initGoods();
      if (this.isLogin()) {
        if (this.isDid()) {
          this.isButton = 'Did';
        }else {
          this.isButton = 'Ing';
        }
      }else {
        this.isButton = 'Ing';
      }
      this.endDate = Date.parse(this.goodsinfo.genddate);
      if (Math.floor(this.endDate - Date.now()) <= 0) {
        this.isButton = 'End';
        var userInfo = JSON.parse(sessionStorage.getItem('userinfo'));
        const data = {
          'username': userInfo.username,
          'goodsid': this.goodsinfo.goodsid
        }
        this.goodsInfoService.isChange(data).subscribe(
          (val) => {
            if (val.result === "success") {
              this._message.create('success',
                '恭喜你，拍卖成功！');
            } else if (val.result === "error") {
              this._message.create('error',
                '对不起，拍卖失败！');
            }
            clearInterval(interval);
          }
        );
      }
    }, 200);
  }

}
