import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-chart',
  templateUrl: './skill-chart.component.html',
  styleUrls: ['./skill-chart.component.css'],
})
export class SkillChartComponent implements OnInit {
  data: any;

  constructor() {}

  ngOnInit(): void {
    this.data = {
      labels: [
        'Java',
        'Javascript',
        'Node.js',
        'Angular/React',
        'Security/SSO',
        'Mongodb',
        'Redis',
      ],
      datasets: [
        {
          label: 'Experience level',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [5, 4, 4, 4, 3, 2, 2, 0],
        },
      ],
    };
  }
}
