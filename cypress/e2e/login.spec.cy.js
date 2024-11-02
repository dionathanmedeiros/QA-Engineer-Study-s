import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import LoginFail from '../pages/loginFail'

const loginPage = new LoginPage()
const loginFail= new LoginFail()

describe('Orange HRM Tests', () => {

  const selectorsList = {
      
      sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
      dashboardGrid: ".orangehrm-dashboard-grid",
      
      myInfoButton: ".oxd-navbar-nav [href='/web/index.php/pim/viewMyDetails']",
      firstName: "[name='firstName']",
      middleName: "[name='middleName']",
      lastName: "[name='lastName']",
      genericField:".oxd-input--active",
      dateField:"[placeholder='yyyy-dd-mm']",
      dateCloseButton:(".--close"),
      buttonSubmit:("[type='submit']"),
      buttonDown:(".oxd-select-text--arrow"),
      nationality:(':nth-child(41) > span'),
      maritalStatus:('.oxd-select-dropdown > :nth-child(3)'),
      gender:(".oxd-radio-wrapper"),
      bloodType:('.oxd-select-dropdown > :nth-child(6)'),
      testField:("[options='']"),
      CloseButtonSubmit:('.oxd-toast-close')


  }

  it('Login - Sucess', () => {
      loginPage.accessLoginPage(),
      loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    //               Login Success
    
    
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
    cy.get(selectorsList.CloseButtonSubmit).click({force:true})
//                Custom Fields
    cy.get(selectorsList.buttonDown).eq(2).click()
    cy.get(selectorsList.bloodType).click()
    cy.get(selectorsList.testField).clear().type("777")
    cy.get(selectorsList.buttonSubmit).eq(1).click()
    cy.get('body').should('contain', 'Successfully Saved')
    cy.get(selectorsList.CloseButtonSubmit).click({force:true})


    
    


  })

  //              Login Fail
  it('Login - Fail', () =>  {
    loginFail.accessLoginFail(),
    loginFail.commandsLoginFail(userData.userFail.username, userData.userFail.password)
 
  })
})
