import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.html',
  styleUrls: ['./account.css']
})
export class AccountComponent implements OnInit{
  isOpenOne = true;

  turnTo(url){
    open(url,'_self')
  }

  constructor(
  ){}

  ngOnInit(): void {
  }
}
