

import './commands';

require('cypress-xpath');

// Manejo de excepciones no controladas
Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes(
      'ResizeObserver loop completed with undelivered notifications'
    )
  ) {
    return false; // Ignora esta excepción
  }
  if (err.message.includes('o is not iterable')) {
    return false; // Ignora este error específico
  }
  if (err.message.includes('Right-hand side of')) {
    return false; // Ignora este error específico
  }
  if (err.message.includes('postMessage')) {
    return false;
  }
  return !err.message.includes('is not iterable');
});

// Limpieza del estado antes de cada prueba
beforeEach(() => {

});

// Hook después de cada prueba
afterEach(function () { // Define el tipo explícito

});
