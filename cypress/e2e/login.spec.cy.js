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
      dateField:"[placeholder='yyyy-dd-mm']",
      dateCloseButton:(".--close"),
      buttonSubmit:("[type='submit']")


  }

  it.only('Login - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstName).clear().type("creito")
    cy.get(selectorsList.middleName).clear().type("aparecido")
    cy.get(selectorsList.lastName).clear().type("P7")
    cy.get(selectorsList.genericField).eq(3).clear().type ("40028922")
    cy.get(selectorsList.genericField).eq(4).clear().type ("Other Id Test")
    cy.get(selectorsList.genericField).eq(5).clear().type ("Driver License Test")
    cy.get(selectorsList.dateField).eq(0).clear().type("2024-10-30")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.buttonSubmit).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close')
    


  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
