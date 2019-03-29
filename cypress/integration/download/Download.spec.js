describe('download button', () => {
  it('can navigate to new tab when download button is clicked', () => {
    cy.visit('http://localhost:8000/content/download/')
      .get('[data-testid=downloadCss]')
      .should('have.attr', 'target', '_blank')
  })
})
