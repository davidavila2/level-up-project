import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

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

  @Output() saved = new EventEmitter<Project>();
  @Output() cancelled = new EventEmitter();

  // Maybe use this?
  // saveForm(formDirective: NgForm) {
  //   this.saved.emit(this.form.value);
  //   formDirective.resetForm();
  // }
}
