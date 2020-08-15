import { reactLinks } from './../../data/links';
import { Component, OnInit } from '@angular/core';
import * as dataLinks from '../links';

@Component({
  selector: 'app-tech-dairy',
  templateUrl: './tech-dairy.component.html',
  styleUrls: ['./tech-dairy.component.css'],
})
export class TechDairyComponent implements OnInit {
  reactConceptsLinks: any;
  reactMainLinks: any;
  unOrganizedLinks: any;
  constructor() {}

  ngOnInit(): void {
    this.reactConceptsLinks = dataLinks.reactConceptsLinks;
    this.reactMainLinks = dataLinks.reactMainLinks;
    this.unOrganizedLinks = dataLinks.unOrganizedLinks;
  }
}
