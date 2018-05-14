import {Component, OnInit} from '@angular/core';
import {GoodsInfoService} from "../../../services/goods-info.service";
import {GoodsInfo} from "../../../entity/GoodsInfo";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-goodscheck',
  templateUrl: './goodscheck.html'
})
export class GoodscheckComponent implements OnInit{
  displayTh: Array<any> = ['商品编号', '所属用户编号', '商品名称', '商品起拍价格',
    '商品最高拍卖价格', '商品简介', '拍卖开始时间', '拍卖结束时间', '商品类别',
    '商品状态'];
  data:any;
  addShow:boolean = false;
  goodsinfo:GoodsInfo = new GoodsInfo();
  a_validateForm: FormGroup;
  uploadShow:boolean = false;
  addgoods:GoodsInfo = new GoodsInfo();

  initgoodsinfo():void{
    this.goodsinfo.goodsid = null;
    this.goodsinfo.guserid = null;
    this.goodsinfo.gname = null;
    this.goodsinfo.gstartaccount = null;
    this.goodsinfo.ghighaccount = null;
    this.goodsinfo.gcontent = null;
    this.goodsinfo.gstartdate = '';
    this.goodsinfo.genddate = '';
    this.goodsinfo.gtypeid = null;
    this.goodsinfo.goodstate = null;
    this.goodsinfo.gstate = null;
  }

  openAdd():void{
    this.initgoodsinfo();
    this.addShow = true;
  }

  closeAdd():void{
    this.initgoodsinfo();
    this.a_validateForm.reset();
    this.addShow = false;
  }

  submitAdd($event, value):void{
    this.goodsinfo.guserid = value.a_guserid;
    this.goodsinfo.gname = value.a_gname;
    this.goodsinfo.gstartaccount = value.a_gstartaccount;
    this.goodsinfo.ghighaccount = value.a_ghighaccount;
    this.goodsinfo.gcontent = value.a_gcontent;
    this.goodsinfo.gstartdate = this.datePipe.transform(value.a_gstartdate,'yyyy-MM-dd HH:mm:ss');
    this.goodsinfo.genddate = this.datePipe.transform(value.a_genddate,'yyyy-MM-dd HH:mm:ss');
    this.goodsinfo.gtypeid = value.a_gtypeid;
    console.log("goodsinfo = ",this.goodsinfo);
    this.goodsinfoservice.addgoodsinfo(this.goodsinfo).subscribe(
      (val) =>{
        this.message.create('success', `添加成功！`);
        this.addgoods = val;
        console.log("addgoods",this.addgoods);
        this.openUpload();
      }
    );
  }

  openUpload(){
    this.uploadShow = true;
  }

  closeUpload(){
    this.uploadShow = false;
  }

  getA_FormControl(name) {
    return this.a_validateForm.controls[name];
  }

  initTable(){
    var userInfo = JSON.parse(sessionStorage.getItem('userinfo'));
    const data = {
      'gstate':0,
      'userid':userInfo.userid
    }
    this.goodsinfoservice.getGoodsInfoByGstateAndGuserid(data).subscribe(
      (val)=>{
        this.data = val;
      }
    );
  }

  constructor(private fb: FormBuilder,
              private datePipe: DatePipe,
              private message: NzMessageService,
              private goodsinfoservice:GoodsInfoService) {
    this.a_validateForm = this.fb.group({
      a_gname: ['', [Validators.required]],
      a_guserid: ['', [Validators.required]],
      a_gstartaccount: ['', [Validators.required]],
      a_ghighaccount: ['', [Validators.required]],
      a_gstartdate: [''],
      a_genddate: [''],
      a_gtypeid: ['', [Validators.required]],
      a_goodstate: ['', [Validators.required]],
      a_gcontent: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.initTable();
  }
}
