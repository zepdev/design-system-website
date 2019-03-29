describe('download button', () => {
  it('can navigate to new tab when download button is clicked', () => {
    cy.visit('http://localhost:8000/content/download/')
      .get('[data-testid=downloadCss]')
      .click()
      .get('[data-testid=sidebarNavItemLink]')
      .click()
      .get('.Layout-main-0-1-3 > :nth-child(1) > .zep-button')
      .click()
      .get('.Layout-h1Styled-0-1-7')
      .should('have.text', 'Download')
  })
})
