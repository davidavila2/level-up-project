import { Component, OnInit } from '@angular/core';
import { NotifyService, Project } from '@level-up/core-data';
import { Observable } from 'rxjs';
import { ProjectFacade } from '@level-up/core-state';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'level-up-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]> = this.projectsFacade.all$
  form: FormGroup;

  constructor(
    public projectsFacade: ProjectFacade,
    private formBuilder: FormBuilder,
    private notify: NotifyService
  ) { }

  ngOnInit() {
    this.projectsFacade.loadAll(Project);
    this.initForm();
    this.resetProject();
    this.projectsFacade.mutations$.subscribe(() => this.resetProject())
  }

  selectProject(project: Project) {
    this.projectsFacade.select(project);
    this.form.patchValue(project);
  }

  resetProject() {
    this.form.reset();
    this.projectsFacade.deselect();
  }

  saveProject(project: Project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  updateProject(project: Project) {
    this.notify.notification(`You have updated ${project.title}`);
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
