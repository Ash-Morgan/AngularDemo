import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.html'
})
export class AuctionComponent implements OnInit{
  turnTo(url){
    window.open(url,'_self');
  }

  constructor(
  ){}

  ngOnInit(): void {
  }
}
