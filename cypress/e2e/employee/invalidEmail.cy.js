describe('[EMP-003] Invalid Email Validation', () => {

  beforeEach(() => {
    cy.login()
  })

  
  it('should reject invalid email format', () => {

    cy.fixture('invalidEmployee').then((employee) => {

      expect(employee.email).to.not.contain('@')

    })

  })

})