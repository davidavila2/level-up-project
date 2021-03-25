import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EntityService } from '../entity.service';
import { Project } from './project';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends EntityService {
  model = 'projects';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  loadProject(id: string) {
    return this.load(Project as any, id)
  }

  loadAllProjects() {
    return this.loadAll(Project as any)
  }

  createProject(project: Project) {
    return this.create(Project as any, project);
  }

  updateProject(project: Project) {
    return this.update(Project as any, project)
  }

  deleteProject(id: string) {
    return this.delete(Project as any, id)
  }
}
