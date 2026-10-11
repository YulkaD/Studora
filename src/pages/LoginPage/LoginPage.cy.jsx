import React from 'react';
import LoginPage from './LoginPage';

describe('LoginPage Component Test', () => {
  it('має успішно відображати заголовок та опис авторизації', () => {
    cy.mount(<LoginPage />);
    cy.get('h1').should('contain.text', '🔑 Вхід у систему');
    cy.get('p').should('exist');
  });
});