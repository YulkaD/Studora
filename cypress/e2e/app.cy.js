describe('E2E: Перевірка роботи застосунку Studora', () => {
  it('користувач успішно відкриває головну сторінку та бачить інтерфейс', () => {
   
    cy.visit('http://localhost:5173');

    cy.get('body').should('be.visible');
  });
});