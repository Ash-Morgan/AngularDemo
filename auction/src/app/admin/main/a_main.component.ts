import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-a-main',
  templateUrl: './a_main.component.html',
  styleUrls: ['./a_main.component.css']
})
export class A_mainComponent implements OnInit{
  adminstate = sessionStorage.getItem('adminstate');
  isCollapsed = false;
  constructor(
  ){}

  ngOnInit(): void {
  }


}
