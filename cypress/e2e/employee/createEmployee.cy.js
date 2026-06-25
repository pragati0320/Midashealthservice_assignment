import EmployeePage from '../../pages/EmployeePage'

describe('[EMP-001] Employee Management', () => {

  beforeEach(() => {
    cy.login()
  })

  it('should create employee successfully', () => {

    cy.fixture('employee').then((employee) => {

      cy.createEmployee(employee)

      EmployeePage.createEmployee(employee)

      expect(employee.name).to.not.be.empty
      expect(employee.employeeId).to.match(/^EMP\d+$/)
      expect(employee.email).to.contain('@')
      expect(employee.department).to.equal('QA')

    })

  })

})