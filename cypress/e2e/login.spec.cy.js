import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
      sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
      dashboardGrid: ".orangehrm-dashboard-grid",
      wrongCredentialAlert: "[role='alert']",
      myInfoButton: ".oxd-navbar-nav [href='/web/index.php/pim/viewMyDetails']",
      firstName: "[name='firstName']",
      middleName: "[name='middleName']",
      lastName: "[name='lastName']",
      genericField:".oxd-input--active",
      dateField:"[placeholder='D, dd M yyyy']",
      dateCloseButton:(".--close"),
      buttonSubmit:("[type='submit']"),
      buttonDown:(".oxd-select-text--arrow"),
      nationality:(':nth-child(27)'),
      maritalStatus:('.oxd-select-dropdown > :nth-child(3)'),
      gender:(".oxd-radio-wrapper"),
      bloodType:('.oxd-select-dropdown > :nth-child(6)'),
      testField:("[options='']")


  }

  it.only('Login - Sucess', () => {
    //               Login Success
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    //                My Info
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstName).clear().type("creito")
    cy.get(selectorsList.middleName).clear().type("aparecido")
    cy.get(selectorsList.lastName).clear().type("P7")
    cy.get(selectorsList.genericField).eq(3).clear().type ("40028922")
    cy.get(selectorsList.genericField).eq(4).clear().type ("Other Id Test")
    cy.get(selectorsList.genericField).eq(5).clear().type ("Driver License Test")
    cy.get(selectorsList.dateField).eq(0).clear().type("2025-10-30")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.buttonDown).eq(0).click()
    cy.get(selectorsList.nationality).click()
    cy.get(selectorsList.buttonDown).eq(1).click()
    cy.get(selectorsList.maritalStatus).click()
    cy.get(selectorsList.dateField).eq(1).clear().type("1999-12-12")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.gender).eq(0).click()
    cy.get(selectorsList.buttonSubmit).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close')
//                Custom Fields
    cy.get(selectorsList.buttonDown).eq(2).click()
    cy.get(selectorsList.bloodType).click()
    cy.get(selectorsList.testField).clear().type("777")
    cy.get(selectorsList.buttonSubmit).eq(1).click()
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close')

    
    


  })
  //              Login Fail
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
