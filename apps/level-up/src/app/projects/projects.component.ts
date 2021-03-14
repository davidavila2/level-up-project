import { Component, OnInit } from '@angular/core';
import { emptyProject, Project } from '@level-up/core-data';
import { Observable } from 'rxjs';
import { ProjectFacade } from '@level-up/core-state';

@Component({
  selector: 'level-up-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]> = this.projectsFacade.all$;
  selectedProject: Project;

  constructor(private projectsFacade: ProjectFacade) { }

  ngOnInit() {
    this.projectsFacade.loadAll(Project);
    this.resetProject();
  }

  selectProject(project: Project) {
    this.projectsFacade.select(project);
  }

  resetProject() {
    this.selectProject(emptyProject);
  }

  cancel() {
    this.resetProject();
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
    console.log(project, 'due');
    this.projectsFacade.create(project);
  }

  deleteProject(project) {
    this.projectsFacade.delete(project);
  }
}
