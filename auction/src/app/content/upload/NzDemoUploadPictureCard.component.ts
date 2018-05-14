// tslint:disable
import {Component, Input, OnInit} from '@angular/core';
import {NzMessageService, UploadFile} from "ng-zorro-antd";
import {MainService} from "../../services/main.service";

@Component({
  selector: 'nz-upload-picture',
  template: `
  <div class="clearfix">
    <nz-upload
      nzAction="{{URL}}"
      nzListType="picture-card"
      [(nzFileList)]="fileList"
      [nzShowButton]="fileList.length < 3"
      [nzPreview]="handlePreview">
        <i class="anticon anticon-plus"></i>
        <div class="ant-upload-text">Upload</div>
    </nz-upload>
    <nz-modal [nzVisible]="previewVisible" [nzContent]="modalContent" [nzFooter]="null" (nzOnCancel)="previewVisible=false">
      <ng-template #modalContent>
        <img [src]="previewImage" [ngStyle]="{ 'width': '100%' }" />
      </ng-template>
    </nz-modal>
  </div>
  `,
  styles: [`
  :host ::ng-deep i {
    font-size: 32px;
    color: #999;
  }
  :host ::ng-deep .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
  `]
})
export class NzDemoUploadPictureCardComponent implements OnInit{
  fileList = [];
  previewImage = '';
  previewVisible = false;
  URL:string;
  @Input() goodsid:number;

  constructor(private msg: NzMessageService,
              private mainService:MainService) {}

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  initURL(){
    this.mainService.getServerIP().subscribe(
      (val)=>{
        this.URL = 'http://'+val.ipaddress+':8081/main/uploadpicture?goodsid='+this.goodsid+'&size='+this.fileList.length;
        console.log(this.URL);
      }
    );
  }

  ngOnInit(): void {
    setInterval(_ => {
      this.initURL()
    },1000);
  }
}
