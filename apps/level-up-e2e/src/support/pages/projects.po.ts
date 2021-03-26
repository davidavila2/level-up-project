import * as faker from 'faker';

export const projectsState = {
  route: '/',
  projectName: faker.company.companyName(),
  projectDescription: faker.lorem.sentence(),
  newProjectName: faker.company.companyName(),
  newProjectDescription: faker.lorem.sentence(),
}

export const projectsElementRegistry = {
  buttons: {
    delete: 'delete-btn',
    route: 'route-btn',
    submit: 'submit-btn',
    reset: 'reset-btn',
  },
  text: {
    projectTitle: 'project-title',
    projectDescription: 'project-description',
    updateProjectName: 'update-project-name',
  },
  form: {
    projectTitleInput: 'project-title-input',
    projectDescription: 'project-description-textarea',
    projectStatus: 'project-status',
    status: {
      open: 'Open',
      inProgress: 'In Progress',
      done: 'Done'
    }
  },
  projectItem: 'project-item',
  errors: {
    projectTitleInputError: 'project-title-input-error',
    projectDescriptionsTextAreaError: 'project-description-textarea-error',
    projectStatusError: 'project-status-error',
  },
}

// GET
/********** Get Buttons ************/
export const project = () => cy.dataCy(projectsElementRegistry.projectItem)
export const deleteBtn = () => cy.dataCy(projectsElementRegistry.buttons.delete);
export const resetBtn = () => cy.dataCy(projectsElementRegistry.buttons.reset);
export const submitBtn = () => cy.dataCy(projectsElementRegistry.buttons.submit);
export const routeBtn = () => cy.dataCy(projectsElementRegistry.buttons.route);

/********** Get Inputs ************/
export const projectTitle = () => cy.dataCy(projectsElementRegistry.form.projectTitleInput)
export const projectDescription = () => cy.dataCy(projectsElementRegistry.form.projectDescription);

/********** Get Select ************/
export const projectStatus = () => cy.dataCy(projectsElementRegistry.form.projectStatus);
export const open = () => cy.dataCy(projectsElementRegistry.form.status.open);
export const inProgress = () => cy.dataCy(projectsElementRegistry.form.status.inProgress);
export const done = () => cy.dataCy(projectsElementRegistry.form.status.done);

/********** Get List Items ************/
export const createdProject = () => cy.dataCy(projectsElementRegistry.text.projectTitle).contains(projectsState.projectName)
export const updatedProject = () => cy.dataCy(projectsElementRegistry.text.projectTitle).contains(projectsState.newProjectName)

// ACTIONS
/********** Clicking Actions ************/
export const clickDeleteBtn = () => deleteBtn().click();
export const clickResetBtn = () => resetBtn().click();
export const clickSubmitBtn = () => submitBtn().click();
export const clickRouteBtn = () => routeBtn().click();

/********** Typing Actions ************/
export const typeProjectTitle = () => projectTitle().type(projectsState.projectName);
export const typeProjectDescription = () => projectDescription().type(projectsState.projectDescription);
export const typeNewProjectTitle = () => projectTitle().clear().type(projectsState.newProjectName);
export const typeNewProjectDescription = () => projectDescription().clear().type(projectsState.newProjectDescription);

/********** Selecting Actions ************/
export const selectProjectStatus = () => projectStatus().click();
export const selectOpen = () => open().click();
export const selectInProgress = () => inProgress().click();
export const selectDone = () => done().click();
export const selectPreviousProjectCreated = () => createdProject().click();

/********** Custom Actions ************/
export const deleteProjectCreated = () => {
  updatedProject().parentsUntil('mat-list-item[data-cy="project-item"]').within(() =>
    deleteBtn().click()
  )
}

export const routeToProject = () => {
  routeBtn().first().click();
}

/********** Routing Actions ************/
export const routeToProjects = () => cy.visit(projectsState.route);

// ASSERTIONS
