import { buildState, IEntityState } from '@briebug/ngrx-auto-entity';
import { Project } from '@level-up/core-data';

export const {
  initialState: initialProjectState,
  selectors: {
    selectAll: allProjects,
    selectCurrentEntity: selectCurrent
  },
  entityState,
  facade: ProjectFacadeBase,
  actions: {
    createSuccess: createProjectSuccess,
    deleteSuccess: deleteProjectSuccess,
    updateSuccess: updateProjectSuccess
  }
} = buildState(Project);

export function projectReducer(state = initialProjectState): IEntityState<Project> {
  return state;
}
