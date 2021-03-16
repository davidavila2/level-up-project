import { Component, OnInit } from '@angular/core';
import { emptyProject, Project } from '@level-up/core-data';
import { Observable } from 'rxjs';
import { ProjectFacade } from '@level-up/core-state';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'level-up-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]> = this.projectsFacade.all$;
  project: Project;
  form: FormGroup;

  constructor(
    public projectsFacade: ProjectFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.projectsFacade.loadAll(Project);
    this.initForm();
    this.resetProject();
  }

  selectProject(project: Project) {
    this.project = project;
    this.form.patchValue(project);
  }

  resetProject() {
    this.form.reset();
    this.selectProject(emptyProject)
  }

  saveProject(project: Project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  updateProject(project: Project) {
    this.projectsFacade.update(project);
  }

  createProject(project: Project) {
    this.projectsFacade.create(project);
  }

  deleteProject(project) {
    this.projectsFacade.delete(project);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      status: ['', Validators.compose([Validators.required])]
    });
  }
}
