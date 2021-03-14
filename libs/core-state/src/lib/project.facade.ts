import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { ProjectFacadeBase } from './project.state';
import { Project } from '@level-up/core-data';

@Injectable({ providedIn: 'root' })
export class ProjectFacade extends ProjectFacadeBase {
  constructor(store: Store<AppState>) {
    super(Project, store);
  }
}
