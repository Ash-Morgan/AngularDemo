import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pmain',
  templateUrl: './pmain.html'
})
export class PmainComponent implements OnInit{
  turnTo(url){
    open(url,'_self')
  }

  constructor(
  ){}

  ngOnInit(): void {
  }
}
