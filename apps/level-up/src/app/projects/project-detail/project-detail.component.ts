import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Project } from '@level-up/core-data';

@Component({
  selector: 'level-up-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  currentProject: Project;
  originalTitle: string;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set project(value) {
    if (value) { this.originalTitle = value.title; }
    this.currentProject = Object.assign({}, value);
  }
}
