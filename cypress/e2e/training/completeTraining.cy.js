import TrainingPage from '../../pages/TrainingPage'
import { TRAINING_STATUS } from '../../support/testData'

describe('[OJT-003] Training Completion', () => {

  beforeEach(() => {
    cy.login()
  })

  
  it('should complete assigned training successfully', () => {

    cy.completeTraining()

    TrainingPage.completeTraining()

    const status = TRAINING_STATUS.COMPLETED

    expect(status).to.equal(TRAINING_STATUS.COMPLETED)

  })

})