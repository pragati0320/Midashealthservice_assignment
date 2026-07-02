// ========================================
// Authentication Commands
// ========================================
Cypress.Commands.add('login', () => {

  cy.log('Login as Admin')

})



// Employee Commands
Cypress.Commands.add('createEmployee', (employee) => {

  cy.log(`Creating employee: ${employee.name}`)

})

Cypress.Commands.add('validateDuplicateEmail', (email) => {

  cy.log(`Validating duplicate email: ${email}`)

})
// Training Commands

Cypress.Commands.add('assignTraining', (trainingName) => {

  cy.log(`Assigning training: ${trainingName}`)

})

Cypress.Commands.add('completeTraining', () => {

  cy.log('Completing assigned training')

})

Cypress.Commands.add('approveTraining', () => {

  cy.log('Approving completed training')

})
// Certification Commands
Cypress.Commands.add('verifyCertificationAlert', () => {

  cy.log('Verifying certification expiration alert')

})