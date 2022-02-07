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
  deleteProjectCreated,
} from '../support/pages/projects.po';

describe('Projects MDV', () => {
  before(() => {
    cy.intercept('/projects', { fixture: 'projects.json' })

    routeToProjects();
  });

  it('should read page', () => {
    cy.get('h1').should('have.text', 'Projects').and('be.visible');

    cy.get('mat-list-item').should('have.length', 3);

    cy.get('mat-card-title').last().should('have.text', 'Create a Project').and('be.visible');
  })

  it('should create a project', () => {
    typeProjectTitle();
    typeProjectDescription();
    selectProjectStatus();
    selectOpen();
    clickSubmitBtn();

    cy.get('.mat-snack-bar-container').should('exist')
  });

  it('update', () => {
    selectPreviousProjectCreated();
    typeNewProjectTitle();
    typeNewProjectDescription();
    selectProjectStatus();
    selectOpen();
    clickSubmitBtn();

    cy.get('.mat-snack-bar-container').should('exist')
  });

  it('delete', () => {
    deleteProjectCreated();

    cy.get('.mat-snack-bar-container').should('exist')
    cy.get('mat-list-item').should('have.length', 3);
  });
});
