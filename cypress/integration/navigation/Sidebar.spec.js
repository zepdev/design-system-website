describe('sidebar', () => {
  it('can navigate to the home page', () => {
    cy.visit('http://localhost:8000')
      .get('.Sidebar-logo-0-1-12')
      .click()
      .get('.Layout-h1Styled-0-1-7')
      .should('have.text', 'Zeppelin Design System')
  })
  it('can navigate to a menu item: download page', () => {
    cy.visit('http://localhost:8000')
      .get(':nth-child(4) > .SidebarNavItem-button-0-1-15')
      .click()
      .get('.Layout-h1Styled-0-1-7')
      .should('have.text', 'Download')
  })
  it('can navigate a submenu item: Developers', () => {
    cy.visit('http://localhost:8000')
      .get(
        '.SidebarNav-list-0-1-14 > :nth-child(1) > .ButtonBase-button-0-1-22'
      )
      .click()
      .get('[data-testid=sidebarNavItemLink]')
      .click()
      .get('.Layout-h1Styled-0-1-7')
      .should('have.text', 'Developers')
  })
})
