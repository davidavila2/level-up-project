import { ActionReducerMap } from '@ngrx/store';
import { IEntityState } from '@briebug/ngrx-auto-entity';
import { Project } from '@level-up/core-data';
import { projectReducer } from './project.state';

export interface AppState {
  // todo: add each entity state interface to our application state interface
  project: IEntityState<Project>
}

export const appReducer: ActionReducerMap<AppState> = {
  // todo: add each entity reducer
  project: projectReducer
};
