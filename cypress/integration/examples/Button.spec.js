describe('sidebar', () => {
  it('can navigate to download page', () => {
    cy.visit('http://localhost:8000')
      .get(
        '.SidebarNav-list-0-1-13 > :nth-child(1) > .ButtonBase-button-0-1-21'
      )
      .click()
      .get(':nth-child(1) > [data-testid=sidebarNavItemLink]')
      .click()
      .get('.zep-typo--display-4')
      .should('have.text', 'Zeppelin Design System')
  })
})
