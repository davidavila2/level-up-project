/* eslint-disable @typescript-eslint/no-namespace */
declare namespace Cypress {
  interface Chainable {
    elementContains(
      element: Cypress.Chainable<Element>, valueMatcher: RegExp | string
    ): Cypress.Chainable<Element>;
    selectorContains(
      selector: string, valueMatcher: RegExp | string
    ): Cypress.Chainable<Element>;
    dataCy(value: string): Cypress.Chainable<Element>;
    checkLocation(path: string): void;
  }
}

Cypress.Commands.add(
  'selectorContains',
  (selector: string, valueMatcher: RegExp | string) => {
    cy.get(selector).contains(valueMatcher);
  }
);

Cypress.Commands.add(
  'elementContains',
  (element: Cypress.Chainable<Element>, valueMatcher: RegExp | string) => {
    element.contains(valueMatcher);
  }
);

Cypress.Commands.add('dataCy', (value) => {
  return cy.get(`[data-cy=${value}]`);
});

Cypress.Commands.add('checkLocation', (route) => {
  cy.location('pathname').should('equal', route);
});
