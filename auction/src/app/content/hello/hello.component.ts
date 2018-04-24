import {Component, OnInit} from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./css/index.css']
})
export class HelloComponent implements OnInit{
  array = [ "url(.././assets/images/cont/slider_img1.jpg)" ];

  ngOnInit() {
    setTimeout(_ => {
      this.array = ["url(.././assets/images/cont/slider_img1.jpg)",
        "url(.././assets/images/cont/slider_img2.jpg)",
        "url(.././assets/images/cont/slider_img3.jpg)",
        "url(.././assets/images/cont/slider_img4.jpg)",
        "url(.././assets/images/cont/slider_img5.jpg)"];
    }, 500);
  }
}
