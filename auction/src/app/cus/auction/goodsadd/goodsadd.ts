import {Component, OnInit} from '@angular/core';
import {GoodsInfo} from "../../../entity/GoodsInfo";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {NzMessageService} from "ng-zorro-antd";
import {GoodsInfoService} from "../../../services/goods-info.service";

@Component({
  selector: 'app-goodsadd',
  templateUrl: './goodsadd.html'
})
export class GoodsaddComponent implements OnInit{

  constructor(private fb: FormBuilder,
              private datePipe: DatePipe,
              private message: NzMessageService,
              private goodsService: GoodsInfoService) {

  }

  ngOnInit() {
  }
}
