import { ActionReducerMap } from '@ngrx/store';
import { IEntityState } from '@briebug/ngrx-auto-entity';
import { Project } from '@level-up/core-data';
import { projectReducer } from './project.state';

export interface AppState {
  project: IEntityState<Project>
}

export const appReducer: ActionReducerMap<AppState> = {
  project: projectReducer
};
