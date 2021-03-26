import { deleteBtn, routeToProjects } from "../support/pages/projects.po"

describe('Delete all Projects', () => {
  before(() => {
    routeToProjects();
  })

  it('should delete all projects', () => {
    deleteBtn().each((btn) => {
      btn.click();
    })
  })
})
