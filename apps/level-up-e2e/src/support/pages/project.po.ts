export const projectState = {
  route: ['project/:id'],
}

export const projectElementRegisitry = {
  buttons: {
    back: 'back-btn'
  },
  text: {
    projectTitle: 'project-title',
    projectDescription: 'project-description',
    projectStatus: 'project-status'
  }
}

// GET
/********** Get Buttons ************/
export const back = () => cy.dataCy(projectElementRegisitry.buttons.back)

// ACTIONS
/********** Clicking Actions ************/
export const clickBack = () => back().click();
