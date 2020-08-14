import { SkillNodeService } from './skill-node.service';
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-skill-table',
  templateUrl: './skill-table.component.html',
  styleUrls: ['./skill-table.component.css'],
})
export class SkillTableComponent implements OnInit {
  files: TreeNode[];

  cols: any[];
  constructor(private SkillNodeService: SkillNodeService) {}

  ngOnInit(): void {
    this.files = this.SkillNodeService.getFilesystem().data;

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
    ];
  }
}
