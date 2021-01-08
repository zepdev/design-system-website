/// <reference types="cypress" />

describe("links", () => {
  it("can navigate to a page from a link: Developers to Download", () => {
    cy.visit("http://localhost:8000/content/getting-started/developers/")
    cy.contains("Download Now").click()
    cy.url().should("include", "download")
  })
})
