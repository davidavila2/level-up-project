import { buildState, IEntityState } from '@briebug/ngrx-auto-entity';
import { Project } from '@level-up/core-data';

export const {
  initialState: initialProjectState,
  selectors: {
    selectAll: allProjects
  },
  facade: ProjectFacadeBase
} = buildState(Project);

export function projectReducer(state = initialProjectState): IEntityState<Project> {
  return state;
}
