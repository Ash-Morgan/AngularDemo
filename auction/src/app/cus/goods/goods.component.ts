import {Component, OnInit} from '@angular/core';
import {GoodsInfo} from "../../entity/GoodsInfo";
import {GoodsInfoService} from "../../services/goods-info.service";
import {NzMessageService} from "ng-zorro-antd";
import {ActivatedRoute} from "@angular/router";
import {AuctionInfo} from "../../entity/AuctionInfo";
import {UserInfoService} from "../../services/user-info.service";
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
  auctioninfoList:any;
  endDate: number;
  isButton:string = 'Ing';
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
      }
    );
  }

  addprice(): void {
    alert(this.isButton)
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
            this.goodsinfo.ghighaccount -= this.count;
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

  isDid():boolean{
    const data = {
      "username":sessionStorage.getItem('userinfo')
    }
    this.userInfoService.getUserInfoByUsername(data).subscribe(
      (val)=>{
        console.log("GET call successful!",val);
        this.userinfo = JSON.parse(val.userinfo);
      }
    );
    if(this.auctioninfoList.length > 0){
      if(this.userinfo.userid === this.auctioninfoList[0].userid){
        return true;
      }
    }
    return false;
  }

  constructor(private goodsInfoService: GoodsInfoService,
              private userInfoService: UserInfoService,
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
    this.initGoods();
    // setInterval(_ => {
    //   this.initGoods();
    // }, 500);
    var interval = setInterval(_ => {
      if(this.isLogin()){
        if(this.isDid()){
          this.isButton = 'Did';
        }
      }
      this.endDate = Date.parse(this.goodsinfo.genddate);
      if (Math.floor(this.endDate - Date.now()) <= 0) {
        this.isButton = 'End';
        const data = {
          'username': sessionStorage.getItem('userinfo'),
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
    }, 500);
  }

}
