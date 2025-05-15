import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estoy en la página principal", () => {
  cy.visit("/");
});

When("la página carga", () => {
  // No necesitamos hacer nada específico aquí, Cypress espera a que la página cargue
});

Then("debería ver el mensaje {string}", (mensaje: string) => {
  cy.get("#root").should("contain", mensaje);
});