import TrainingPage from '../../pages/TrainingPage'

describe('[OJT-001] Training Assignment', () => {

  beforeEach(() => {
    cy.login()
  })

  it('should assign training successfully', () => {

    cy.fixture('training').then((training) => {

      cy.assignTraining(training.trainingName)

      TrainingPage.assignTraining(training)

      expect(training.trainingName)
        .to.equal('Forklift Safety')

      expect(training.dueDate)
        .to.equal('2026-06-30')

    })

  })

})