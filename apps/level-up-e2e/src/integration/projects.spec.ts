import {
  typeProjectDescription,
  typeProjectTitle,
  selectProjectStatus,
  clickSubmitBtn,
  selectOpen,
  routeToProjects,
  selectPreviousProjectCreated,
  typeNewProjectTitle,
  typeNewProjectDescription,
  deleteProjectCreated
} from '../support/pages/projects.po';

describe('Projects MDV', () => {
  before(() => {
    routeToProjects()
  });

  it('should create a project', () => {
    typeProjectTitle();
    typeProjectDescription();
    selectProjectStatus();
    selectOpen();
    clickSubmitBtn();
  });

  it('update', () => {
    selectPreviousProjectCreated();
    typeNewProjectTitle();
    typeNewProjectDescription();
    selectProjectStatus();
    selectOpen();
    clickSubmitBtn();
  });

  it('delete', () => {
    deleteProjectCreated();
  });
});
