import {Component, OnInit} from '@angular/core';
import {GoodsInfoService} from "../../services/goods-info.service";
import {GoodsTypeService} from "../../services/goods-type.service";

@Component({
  selector: 'app-content',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private goodsinfoservice: GoodsInfoService,
              private goodstypeservice:GoodsTypeService) {
  }

  array = ["url(.././assets/images/cont/slider_img1.jpg)"];
  goodsTlist = [];
  goodslist = [];

  ngOnInit() {
    setTimeout(_ => {
      this.array = ["url(.././assets/images/cont/slider_img1.jpg)",
        "url(.././assets/images/cont/slider_img2.jpg)",
        "url(.././assets/images/cont/slider_img3.jpg)",
        "url(.././assets/images/cont/slider_img4.jpg)",
        "url(.././assets/images/cont/slider_img5.jpg)"];
    }, 500);
    this.initList();
    this.initTList();
  }

  initList(): void {
    this.goodsinfoservice.getAllGoodsInfo().subscribe(
      (val) => {
        console.log("Get success", val)
        this.goodslist = val;
        console.log("Get success", this.goodslist);
      }
    )
  }

  initTList(): void {
    this.goodstypeservice.getAllType().subscribe(
      (val) => {
        console.log("Get success", val)
        this.goodsTlist = val;
        console.log("Get success", this.goodsTlist);
      }
    )
  }

}
