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
        'Angular.js',
        'React.js',
        'SSO',
        'Mongodb',
        'Redis',
      ],
      datasets: [
        {
          label: 'Skill Snapshot',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [5, 4, 4, 4, 0.2, 2, 2, 2],
        },
      ],
    };
  }
}