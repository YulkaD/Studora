import React from 'react';
import TasksPage from './TasksPage';

describe('TasksPage Component Test', () => {
  it('коректно рендерить сторінку тасків', () => {
    cy.mount(<TasksPage />);
    cy.get('h1').should('exist');
  });
});