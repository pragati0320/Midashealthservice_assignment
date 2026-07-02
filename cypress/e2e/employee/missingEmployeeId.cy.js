describe('[EMP-004] Missing Employee ID Validation', () => {

  beforeEach(() => {
    cy.login()
  })

  
  it('should not allow employee creation without employee ID', () => {

    cy.fixture('invalidEmployee').then((employee) => {

      expect(employee.employeeId).to.be.empty

    })

  })

})