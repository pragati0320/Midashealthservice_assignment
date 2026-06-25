class TrainingPage {

  assignTraining(training) {

    cy.log(`Training Name: ${training.trainingName}`)
    cy.log(`Due Date: ${training.dueDate}`)

  }

  completeTraining() {

    cy.log('Training completed')

  }

  approveTraining() {

    cy.log('Training approved')

  }

}

export default new TrainingPage()