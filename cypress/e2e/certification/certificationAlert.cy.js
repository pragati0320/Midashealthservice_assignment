//certification alert test

import CertificationPage from '../../pages/CertificationPage'

describe('[CERT-001] Certification Tracking', () => {

  beforeEach(() => {
    cy.login()
  })

  it('should display expiring certification alerts', () => {

    cy.verifyCertificationAlert()

    CertificationPage.verifyExpiringCertificationAlert()

    const certification = {
      name: 'Forklift Operator Certification',
      daysRemaining: 25
    }

    expect(certification.name).to.not.be.empty
    expect(certification.daysRemaining).to.be.lessThan(30)

  })

})
