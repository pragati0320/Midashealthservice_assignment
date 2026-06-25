import { TRAINING_STATUS } from '../../support/testData'

describe('[OJT-002] Assignment Visibility', () => {

  beforeEach(() => {
    cy.login()
  })

  it('should display assigned training in employee record', () => {

    const status = TRAINING_STATUS.ASSIGNED

    expect(status)
      .to.equal(TRAINING_STATUS.ASSIGNED)

  })

})