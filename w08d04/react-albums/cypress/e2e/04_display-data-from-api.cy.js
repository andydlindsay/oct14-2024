describe('display results', () => {

  it('can display the results from an API request', () => {
    // visit the home page
    cy.visit('/');

    // tell cypress to load and return our fake data
    cy.intercept('GET', '**/search*', { fixture: 'journey' })
      .as('fetchJourneyData');

    // find the input field and type "journey"
    cy.get('.search__form')
      .find('input')
      .type('Journey')
      .should('have.value', 'Journey');

    // wait for the api results to load
    cy.wait('@fetchJourneyData')

    // check for a specific Journey album
    cy.contains('Trial By Fire')
      .should('be.visible');

    // uncheck the explicit checkbox
    cy.get('#Explicit')
      .uncheck();

    // make sure that no explicit albums are in the results
    cy.should('not.contain', 'The Essential Journey');
  });

});
