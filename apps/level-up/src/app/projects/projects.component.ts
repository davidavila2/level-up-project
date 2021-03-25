import { Component, OnInit } from '@angular/core';
import { Project } from '@level-up/core-data';
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
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.projectsFacade.loadAll(Project);
    this.initForm();
    this.resetProject();
    this.projectsFacade.mutations$.subscribe(() => this.resetProject())
  }

  selectProject(project: Project): void {
    this.projectsFacade.select(project);
    this.form.patchValue(project);
  }

  resetProject(): void {
    this.projectsFacade.deselect();
    this.form.reset();

    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).setErrors(null);
    });
  }

  createProject(project: Project): void {
    this.projectsFacade.create(project);
  }

  updateProject(project: Project): void {
    this.projectsFacade.update(project);
  }

  deleteProject(project: Project): void {
    this.projectsFacade.delete(project);
  }

  saveProject(project: Project): void {
    project.id ? this.updateProject(project) : this.createProject(project);
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      id: null,
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      status: ['', Validators.compose([Validators.required])]
    });
  }
}
