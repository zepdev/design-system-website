/// <reference types="cypress" />

describe("sidebar", () => {
  it("can navigate to the home page", () => {
    cy.visit("http://localhost:8000")
    cy.contains("Download").click()
    cy.url().should("include", "download")
  })
  it("can navigate to a menu item: download page", () => {
    cy.visit("http://localhost:8000")
    cy.contains("Guideline").click()
    cy.contains("Color").click()
    cy.url().should("include", "color")
  })
  it("can opens drawer when in mobile view", () => {
    cy.visit("http://localhost:8000")
      .viewport("iphone-6+")
      .get("[data-testid=mobileMenuButton]")
      .click()
      .should("be.visible")
  })
})
