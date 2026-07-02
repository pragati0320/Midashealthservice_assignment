//duplicate check

import EmployeePage from '../../pages/EmployeePage'

describe('[EMP-002] Duplicate Email Validation', () => {

  
  beforeEach(() => {
    cy.login()
  })

  it('should prevent duplicate employee email', () => {

    const email = 'ramesh@test.com'

    cy.validateDuplicateEmail(email)

    EmployeePage.validateDuplicateEmail(email)

    expect(email).to.contain('@')
    expect(email).to.equal('ramesh@test.com')

  })

})

//