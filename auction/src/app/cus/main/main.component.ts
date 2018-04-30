import {Component, OnInit} from '@angular/core';
import {GoodsInfoService} from "../../services/goods-info.service";

@Component({
  selector: 'app-content',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  constructor(private goodsinfoservice:GoodsInfoService) {
  }

  array = [ "url(.././assets/images/cont/slider_img1.jpg)" ];
  list1 = ["1","2","3","4","5"];
  list2 = ["6","7","8","9","10"];
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
  }

  initList():void{
    this.goodsinfoservice.getAllGoodsInfo().subscribe(
      (val) => {
          console.log("Post success",val)
          this.goodslist = val;
        console.log("Put success",this.goodslist);
      }
    )
  }

}
