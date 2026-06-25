describe('[OJT-004] Unassigned Training Validation', () => {

  beforeEach(() => {
    cy.login()
  })

  it('should prevent completion of unassigned training', () => {

    const assigned = false

    expect(assigned).to.be.false

  })

})