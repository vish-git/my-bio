import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-log',
  templateUrl: './travel-log.component.html',
  styleUrls: ['./travel-log.component.css'],
})
export class TravelLogComponent implements OnInit {
  display: boolean = false;
  imageurl: any;

  constructor() {}

  ngOnInit(): void {}

  showDialog(image: any) {
    this.display = true;
    this.imageurl = image;
  }
}
