import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders learn react link', () => {
  mount(<App />);
  cy.get('a').contains('Learn React');
});

it('renders learn react link', () => {
  mount(<App />);
  cy.findAllByText('Learn React').should('exist')
});
