import { Injectable } from '@angular/core';
import { Store, ActionsSubject, Action } from '@ngrx/store';
import { AppState } from './app.state';
import { createProjectSuccess, deleteProjectSuccess, ProjectFacadeBase, updateProjectSuccess } from './project.state';
import { Project } from '@level-up/core-data';
import { filter } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ProjectFacade extends ProjectFacadeBase {
  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
      action.type === createProjectSuccess.type ||
      action.type === updateProjectSuccess.type ||
      action.type === deleteProjectSuccess.type
    )
  )

  constructor(
    store: Store<AppState>,
    private actions$: ActionsSubject
  ) {
    super(Project, store);
  }
}
