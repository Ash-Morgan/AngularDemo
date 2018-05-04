import {Component, OnInit} from '@angular/core';
import {AdminInfo} from '../../entity/AdminInfo';
import {NzMessageService} from "ng-zorro-antd";
import {GoodsInfoService} from "../../services/goods-info.service";
import {GoodsInfo} from "../../entity/GoodsInfo";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  _startdate = new Date();
  u_validateForm: FormGroup;
  a_validateForm: FormGroup;

  initTable(){
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
    this._startdate = new Date();
    this.updateShow = true;
  }

  closeUpdate():void{
    this.updateShow = false;
  }

  submitUpdate($event, value):void{
    this.goodsUpdate.guserid = value.u_guserid;
    this.goodsUpdate.gname = value.u_gname;
    this.goodsUpdate.gstartaccount = value.u_gstartaccount;
    this.goodsUpdate.ghighaccount = value.u_ghighaccount;
    this.goodsUpdate.gcontent = value.u_gcontent;
    this.goodsUpdate.gstartdate = value.u_gstartdate;
    this.goodsUpdate.genddate = value.u_genddate;
    this.goodsUpdate.gtypeid = value.u_gtypeid;
    this.goodsUpdate.goodstate = value.u_goodstate;
    this.goodsService.updategoodsinfo(this.goodsUpdate).subscribe(
      () =>{
        this.message.create('success', `更新成功！`);
        this.initTable();
        this.closeUpdate();
      }
    );
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
    this.goodsinfo.gstartdate = value.a_gstartdate;
    this.goodsinfo.genddate = value.a_genddate;
    this.goodsinfo.gtypeid = value.a_gtypeid;
    this.goodsinfo.goodstate = value.a_goodstate;
    this.goodsService.addgoodsinfo(this.goodsinfo).subscribe(
      () =>{
        this.message.create('success', `添加成功！`);
        this.initTable();
        this.closeAdd();
      }
    );
  }

  deleteinfo(info:any):void{
    this.goodsService.deletegoodsinfo(info).subscribe(
      () =>{
        this.message.create('success', `删除成功！`);
        this.initTable();
      }
    );
  }

  getU_FormControl(name) {
    return this.u_validateForm.controls[name];
  }

  getA_FormControl(name) {
    return this.a_validateForm.controls[name];
  }

  constructor(private fb: FormBuilder,
              private message: NzMessageService,
              private goodsService: GoodsInfoService) {
    this.u_validateForm = this.fb.group({
      u_gname: ['', [Validators.required]],
      u_guserid: ['', [Validators.required]],
      u_gstartaccount: ['', [Validators.required]],
      u_ghighaccount: ['', [Validators.required]],
      u_gstartdate: ['', [Validators.required]],
      u_genddate: ['', [Validators.required]],
      u_gtypeid: ['', [Validators.required]],
      u_goodstate: ['', [Validators.required]],
      u_gcontent: ['', [Validators.required]]
    });
    this.a_validateForm = this.fb.group({
      a_gname: ['', [Validators.required]],
      a_guserid: ['', [Validators.required]],
      a_gstartaccount: ['', [Validators.required]],
      a_ghighaccount: ['', [Validators.required]],
      a_gstartdate: ['', [Validators.required]],
      a_genddate: ['', [Validators.required]],
      a_gtypeid: ['', [Validators.required]],
      a_goodstate: ['', [Validators.required]],
      a_gcontent: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.initTable();
  }
}
