import { routeToProject, routeToProjects } from "../support/pages/projects.po";

describe('Project', () => {
  before(() => {
    routeToProjects();
  });

  it('should route to project page', () => {
    routeToProject();
  })
});
