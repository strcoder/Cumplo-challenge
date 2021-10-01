describe('Cumplo app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('Frontend page can be open', () => {
    cy.contains('El empleado del mes');
  });

  it('User can vote', () => {
    cy.get('.Home__body--list > li:first-child .ProfileCard--vote').click();
  });
});
