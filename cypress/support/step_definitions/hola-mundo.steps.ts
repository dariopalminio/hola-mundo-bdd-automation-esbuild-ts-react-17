import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estoy en la página principal", () => {
  cy.log("Paso ejecutado correctamente");
  cy.visit("/");
});

When("la página carga", () => {
  // No necesitamos hacer nada específico aquí, Cypress espera a que la página cargue
   cy.log("Paso ejecutado correctamente");
});

Then("debería ver {string}", (mensaje: string) => {
  cy.get("#root").should("contain", mensaje);
});
