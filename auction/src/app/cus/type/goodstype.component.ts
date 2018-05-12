import {Component, OnInit} from "@angular/core";
import {GoodsInfoService} from "../../services/goods-info.service";
import {GoodsTypeService} from "../../services/goods-type.service";
import {ActivatedRoute} from "@angular/router";
import {GoodsType} from "../../entity/GoodsType";

@Component({
  selector: 'app-goods-tpye',
  templateUrl: './goodstype.component.html',
  styleUrls: ['./goodstype.component.css']
})
export class GoodstypeComponent implements OnInit {
  goodstype:GoodsType = new GoodsType();
  typeid: number;
  goodslist = [];

  initType(){
    const data = {
      'typeid': this.typeid
    };
    this.goodstypeservice.getGoodsTypeByTypeId(data).subscribe(
      (val) => {
        console.log("GET call successful!",
          val);
        this.goodstype.typeid = val.typeid;
        this.goodstype.tname = val.tname;
        this.goodstype.tstate = val.tstate;
        console.log("Put in success!", this.goodstype);
      }
    );
  }

  initList(){
    const data = {
      'typeid': this.typeid
    };
    this.goodsinfoservice.getGoodsInfoByType(data).subscribe(
      (val) => {
        console.log("GET call successful!",
          val);
        this.goodslist = val;
        console.log("Put in success!", this.goodslist);
      }
    );
  }


  constructor(private goodsinfoservice: GoodsInfoService,
              private goodstypeservice:GoodsTypeService,
              private routerInfo: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.typeid = this.routerInfo.snapshot.queryParams["typeid"];
    this.initType();
    this.initList();
  }

}
