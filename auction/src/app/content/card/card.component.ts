import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['../../app.component.css']
})
export class CardComponent implements OnInit{
  isShow:boolean;

  ngOnInit(): void {
  }
}
