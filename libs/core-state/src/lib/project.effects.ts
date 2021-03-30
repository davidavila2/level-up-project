import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { NotifyService } from '@level-up/core-data';
import { createProjectSuccess, deleteProjectSuccess, updateProjectSuccess } from './project.state';

@Injectable()
export class ProjectsEffects {
  notifyCreateSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(createProjectSuccess),
    tap(() => this.notify.notification('You have created a Project'))
  ),
    { dispatch: false }
  );

  notifyUpdateSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(updateProjectSuccess),
    tap(() => this.notify.notification('You have updated a Project'))
  ),
    { dispatch: false }
  );

  notifyDeleteSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(deleteProjectSuccess),
    tap(() => this.notify.notification('You have deleted a Project'))
  ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private notify: NotifyService,
  ) { }
}
