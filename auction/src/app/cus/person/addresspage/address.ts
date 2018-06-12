import {Component, OnInit} from '@angular/core';
import {AddressInfoService} from "../../../services/address-info.service";

@Component({
  selector: 'app-address',
  templateUrl: './address.html'
})
export class AddressComponent implements OnInit{
  displayTh: Array<any> = ['地址编号', '地址','操作'];
  data: any;
  updateShow:boolean = false;
  addShow:boolean = false;

  initTable(){
    var userInfo = JSON.parse(sessionStorage.getItem('userinfo'));
    const data = {
      'userid':userInfo.userid
    }
    this.addressService.getAllAddressInfo(data).subscribe(
      (val) => {
        console.log('Get success!', val);
        this.data = val;
      }
    );
  }

  openAdd(){
    this.addShow = true;
  }

  closeAdd(){
    this.addShow = false;
  }

  openUpdate(){
    this.updateShow = true;
  }

  closeUpdate(){
    this.updateShow = false;
  }

  deleteinfo(){
    alert("是否确认删除！");
  }

  constructor(private addressService:AddressInfoService
  ){}

  ngOnInit(): void {
    this.initTable();
  }
}
