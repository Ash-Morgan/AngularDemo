import { Component, OnInit, Input, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'roy-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements AfterViewInit, OnDestroy {
  // 父组件传递截止日期
  @Input() endDate: number;
  // 父组件传递标题
  @Input() title: string;
  // 小时差
   hour: number;
  // 分钟差
   minute: number;
  // 秒数差
   second: number;
  // 时间差
  private _diff: number;
  private get diff() {
    return this._diff;
  }
  private set diff(val) {
    this._diff = Math.floor(val / 1000);
    this.hour = Math.floor(this._diff / 3600);
    this.minute = Math.floor((this._diff % 3600) / 60);
    this.second = (this._diff % 3600) % 60;
  }
  // 定时器
  private timer;

  // 每一秒更新时间差
  ngAfterViewInit() {
    this.timer = setInterval(() => {
      this.diff = this.endDate - Date.now();
    }, 1000);
  }

  // 销毁组件时清除定时器
  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
