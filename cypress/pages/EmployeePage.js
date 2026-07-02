class EmployeePage {

  createEmployee(employee) {

    cy.log(`Employee Name: ${employee.name}`)
    cy.log(`Employee ID: ${employee.employeeId}`)
    cy.log(`Employee Email: ${employee.email}`)
    cy.log(`Department: ${employee.department}`)

  }

  
    validateDuplicateEmail(email) {

    cy.log(`Duplicate Email Validation: ${email}`)

  }

}

export default new EmployeePage()