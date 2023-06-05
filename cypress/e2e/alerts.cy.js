describe('Cypress application', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/alerts')
  });

  it('should have the ability to assert automatically resolved alerts', () => {
    cy.get('[id="alertButton"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains('You clicked a button');
    });
  });

  it('should have the ability to assert scheduled allert', () => {
    cy.get('[id="alertButton"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains('This alert appeared after 5 seconds');
    });
  });

  it('should autimatically resolve alerts', () => {
    cy.get('#confirmButton').click();

    cy.on('window:confirm', (text) => {
      expect(text).to.contains('Do you confirm action?');
    });

    cy.get('#confirmResult')
      .should('have.text', 'You selected Ok');
  });

  it('should have the ability to Cancel alerts', () => {
    cy.get('#confirmButton').click();

    cy.on('window:confirm', (text) => {
      expect(text).to.contains('Do you confirm action?');
    });

    cy.on('window:confirm', () => false);

    cy.get('#confirmResult')
      .should('have.text', 'You selected Cancel');
  });

  // it.only('should have the ability to enter text to alert', () => {
  //   cy.get('#promtButton').click();

  //   cy.on('window:confirm', (text) => {
  //     expect(text).to.contains('Please enter your name');
  //   });
  // });
});
