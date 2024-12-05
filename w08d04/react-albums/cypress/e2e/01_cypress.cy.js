describe('tests for cypress', () => {

  it('can check if true is true', () => {
    expect(true).to.equal(true);
  });

  it('can visit the homepage', () => {
    cy.visit('http://localhost:8765');
  });

});