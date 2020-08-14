import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';

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
  constructor(private primengConfig: PrimeNGConfig) {
    this.items = [
      { label: 'Career', icon: 'pi pi-fw pi-home', routerLink: ['career'] },
      { label: 'Projects', icon: 'pi pi-fw pi-calendar' },
      { label: 'MyTech Dairy', icon: 'pi pi-fw pi-pencil' },
      { label: 'Personal', icon: 'pi pi-fw pi-file' },
      { label: 'My Travel Log', icon: 'pi pi-fw pi-cog' },
    ];

    this.activeItem = this.items[0];
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
