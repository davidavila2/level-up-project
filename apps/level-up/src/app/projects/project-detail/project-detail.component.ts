import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Project, STATUS } from '@level-up/core-data';

@Component({
  selector: 'level-up-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  selectedProject: Project;
  projectStatuses = STATUS;

  @Input() form: FormGroup;
  @Input() set project(value) {
    this.selectedProject = Object.assign({}, value)
  }

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
