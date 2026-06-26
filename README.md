# WorkForcePro QA Assignment

## Overview

This repository contains my submission for the **WorkForcePro Software QA Engineer Take-Home Assignment**.

The assignment demonstrates my approach to manual testing, test planning, defect reporting, automation testing, API testing, SQL validation, accessibility testing, and QA documentation.

---
**Note:** Live API endpoints were not provided as part of the assignment. Therefore, the Postman collection was prepared based on the documented requirements and was not executed.

**AI Assistance Disclosure:** 
This assignment was completed with the assistance of AI tools, including ChatGPT and Claude, to support brainstorming, documentation refinement, and review of deliverables.

All technical decisions, test design, automation implementation, SQL queries, API test collection, and final validation were reviewed, verified, and completed by me.

---

# Project Structure

```
WorkForcePro-Assignment/
│
├── Cypress/
│   ├── cypress/
│   ├── fixtures/
│   ├── pages/
│   ├── support/
│   └── cypress.config.js
│
├── Postman/
│   ├── WorkForcePro.postman_collection.json
│   └── WorkForcePro.postman_environment.json
│
├── SQL/
│   └── WorkForcePro_SQL_Queries.sql
│
├── Documents/
│   ├── Test Strategy
│   ├── Test Scenarios
│   ├── Test Cases
│   ├── Requirement Traceability Matrix (RTM)
│   ├── Defect Report
│   ├── API Test Report
│   ├── Accessibility Test Report
│   ├── SQL Query Explanations
│   ├── Rails Console Investigation (Bonus)
│   └── Smoke Test Checklist
│
└── README.md
```

---

# Deliverables

The following deliverables are included:

* Test Scenarios
* Test Cases
* Requirement Traceability Matrix (RTM)
* Smoke Test Checklist
* Defect Report
* Postman Collection
* API Test Report
* SQL Queries
* Cypress Project
* Accessibility Test Report
* Rails Console Investigation (Bonus)

---

# Automation Framework

The UI automation framework is developed using:

* Cypress
* JavaScript
* Page Object Model (POM)
* Fixtures
* Custom Commands

### Automated Scenarios

* Employee Creation
* Duplicate Email Validation
* Training Assignment
* Training Completion
* Training Approval
* Certification Alerts
* Negative Test Scenarios

---

# API Testing

API testing was designed using Postman.

The collection includes validations for:

* HTTP Status Codes
* Response Structure
* Required Fields
* Business Rules

**Note:** Live API endpoints were not provided as part of the assignment. Therefore, the Postman collection was prepared based on the documented requirements and was not executed.

---

# SQL Validation

SQL queries were created to validate:

* Employee Details
* Training Completion
* Training Count
* Expiring Certifications
* Overdue Trainings
* Top 5 Employees by Completed Trainings

Query explanations are included in the documentation.

---

# Accessibility Testing

Manual accessibility testing was performed on the SauceDemo application covering:

* Keyboard Accessibility
* Form Accessibility
* Visual Accessibility
* Screen Reader Considerations
* Usability

---

# Assumptions

* Live API endpoints were not available; API execution could not be performed.
* SQL queries were written based on the provided database schema.
* For overdue trainings, records with a status other than **Completed** were treated as overdue because the schema did not include a due date.
* Accessibility testing was limited to the scope defined in the assignment.

---

# How to Run the Cypress Tests

## Install dependencies

```bash
npm install
```

## Open Cypress Test Runner

```bash
npx cypress open
```

## Run all tests in headless mode

```bash
npx cypress run
```

---

**AI Assistance Disclosure:** 
This assignment was completed with the assistance of AI tools, including ChatGPT and Claude, to support brainstorming, documentation refinement, and review of deliverables.

All technical decisions, test design, automation implementation, SQL queries, API test collection, and final validation were reviewed, verified, and completed by me. 

---