import { Component, OnInit } from '@angular/core';
import * as dataLinks from '../links';

@Component({
  selector: 'app-technical-references',
  templateUrl: './technical-references.component.html',
  styleUrls: ['./technical-references.component.css'],
})
export class TechnicalReferencesComponent implements OnInit {
  display: boolean = false;
  unOrganizedLinks: any;
  htmlReferenceLinks: any;
  cssReferenceLinks: any;
  javascriptReferenceLinks: any;
  javaReferenceLinks: any;
  angularReferenceLinks: any;
  reactReferenceLinks: any;
  graphqlReferenceLinks: any;
  nodejsReferenceLinks: any;
  webpagedesignReferenceLinks: any;
  mobileAppsReferenceLinks: any;
  awsReferenceLinks: any;
  chatAppReferenceLinks: any;
  dsandAlgReferenceLinks: any;
  vuejsReferenceLinks: any;
  devopsandCICDReferenceLinks: any;
  animationReferenceLinks: any;
  webAppSecurityReferenceLinks: any;
  nestjsReferenceLinks: any;
  interviewQuestionReferenceLinks: any;
  typescriptReferenceLinks: any;

  constructor() {}

  ngOnInit(): void {
    this.htmlReferenceLinks = dataLinks.htmlReferenceLinks;
    this.cssReferenceLinks = dataLinks.cssReferenceLinks;
    this.unOrganizedLinks = dataLinks.unOrganizedLinks;
    this.javascriptReferenceLinks = dataLinks.javascriptReferenceLinks;
    this.javaReferenceLinks = dataLinks.javaReferenceLinks;
    this.angularReferenceLinks = dataLinks.angularReferenceLinks;
    this.reactReferenceLinks = dataLinks.reactReferenceLinks;
    this.graphqlReferenceLinks = dataLinks.graphqlReferenceLinks;
    this.nodejsReferenceLinks = dataLinks.nodejsReferenceLinks;
    this.webpagedesignReferenceLinks = dataLinks.webpagedesignReferenceLinks;
    this.mobileAppsReferenceLinks = dataLinks.mobileAppsReferenceLinks;
    this.awsReferenceLinks = dataLinks.awsReferenceLinks;
    this.chatAppReferenceLinks = dataLinks.chatAppReferenceLinks;
    this.dsandAlgReferenceLinks = dataLinks.dsandAlgReferenceLinks;
    this.vuejsReferenceLinks = dataLinks.vuejsReferenceLinks;
    this.devopsandCICDReferenceLinks = dataLinks.devopsandCICDReferenceLinks;
    this.animationReferenceLinks = dataLinks.animationReferenceLinks;
    this.webAppSecurityReferenceLinks = dataLinks.webAppSecurityReferenceLinks;
    this.nestjsReferenceLinks = dataLinks.nestjsReferenceLinks;
    this.interviewQuestionReferenceLinks =
      dataLinks.interviewQuestionReferenceLinks;
    this.typescriptReferenceLinks = dataLinks.typescriptReferenceLinks;
  }

  showDialog() {
    this.display = true;
  }
}
