import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@level-up/core-data'

@Component({
  selector: 'level-up-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
  @Input() projects: Project[];

  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
