import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project';

const BASE_URL = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  model = 'projects';

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  getUrlForId(id: string): string {
    return `${this.getUrl()}/${id}`;
  }

  load(id: string) {
    return this.httpClient.get(this.getUrlForId(id))
  }

  loadAll() {
    return this.httpClient.get(this.getUrl());
  }

  create(project: Project) {
    return this.httpClient.post(this.getUrl(), project);
  }

  update(project: Project) {
    return this.httpClient.patch(this.getUrlForId(project.id), project);
  }

  delete(id: string) {
    return this.httpClient.delete(this.getUrlForId(id));
  }
}
