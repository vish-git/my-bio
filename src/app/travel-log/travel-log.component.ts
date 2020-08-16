import { Component, OnInit } from '@angular/core';
import * as dataLinks from '../links';

@Component({
  selector: 'app-travel-log',
  templateUrl: './travel-log.component.html',
  styleUrls: ['./travel-log.component.css'],
})
export class TravelLogComponent implements OnInit {
  display: boolean = false;
  imageObject: any = {};
  imageData: any;
  imageUrl: any;
  imageDesc: any;
  imageName: any;

  constructor() {}

  ngOnInit(): void {
    this.imageObject = dataLinks.karnatakaTravelImageLinks;
  }

  showDialog(imageObject: any) {
    this.display = true;
    this.imageUrl = imageObject.url || '';
    this.imageDesc = imageObject.description || '';
    this.imageName = imageObject.name || '';
  }
}
