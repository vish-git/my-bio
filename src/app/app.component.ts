import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any;
  items: MenuItem[];

  activeItem: MenuItem;

  title = 'my-bio';

  currentSelectedTabDetails: any;
  constructor(private primengConfig: PrimeNGConfig, private router: Router) {
    // router.events.subscribe((val) => {
    //   // see also
    //   console.log(val instanceof NavigationEnd);
    //   console.log(val.url);

    // }
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log(event);
        this.setActiveItem(event.url);
        // this.router.navigate([event.url]);
      });
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
      { label: 'Career', icon: 'pi pi-fw pi-desktop', routerLink: ['/my-bio'] },
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-list',
        routerLink: ['projects'],
        skipLocationChange: true,
      },
      {
        label: 'MyTech Dairy',
        icon: 'pi pi-fw pi-pencil',

        routerLink: ['tech-dairy'],
        skipLocationChange: true,
      },
      {
        label: 'Personal',
        icon: 'pi pi-fw pi-heart',
        routerLink: ['personal'],
        skipLocationChange: true,
      },
      {
        label: 'My Travel Log',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['travel-log'],
        skipLocationChange: true,
      },
    ];

    this.activeItem = this.items[0];
  }

  activateMenu(tab) {
    this.currentSelectedTabDetails = tab;
    console.log('hello1');
    console.log(tab.activeItem);
  }

  setActiveItem(url) {}
}
