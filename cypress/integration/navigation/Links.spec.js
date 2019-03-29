describe('links', () => {
  it('can navigate to a page from a link: Developers to Download', () => {
    cy.visit('http://localhost:8000/getting-started/developers/')
      .get(
        '.SidebarNav-list-0-1-14 > :nth-child(1) > .ButtonBase-button-0-1-22'
      )
      .click()
      .get('[data-testid=sidebarNavItemLink]')
      .click()
      .get('.Layout-main-0-1-3 > :nth-child(1) > .zep-button')
      .click()
      .get('.Layout-h1Styled-0-1-7')
      .should('have.text', 'Download')
  })
})
