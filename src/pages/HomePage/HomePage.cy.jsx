import React from 'react';
import HomePage from './HomePage';

describe('HomePage Component Test', () => {
  it('коректно рендерить сторінку HomePage', () => {
    cy.mount(<HomePage />);
    cy.get('h1').should('exist');
  });
});