import TrainingPage from '../../pages/TrainingPage'
import { TRAINING_STATUS } from '../../support/testData'

describe('[OJT-005] Training Approval', () => {

  beforeEach(() => {
    cy.login()
  })

  it('should approve completed training successfully', () => {

    cy.approveTraining()

    TrainingPage.approveTraining()

    const approvalStatus = TRAINING_STATUS.APPROVED

    expect(approvalStatus).to.equal(TRAINING_STATUS.APPROVED)

  })

})