import userData from '../fixtures/user-data.json'
import LoginFail from '../pages/loginFail'
import LoginPage from '../pages/loginPage'
import Dashboard from '../pages/dashboard'

const loginFail= new LoginFail()
const loginPage = new LoginPage()
const dashboard= new Dashboard()

describe('Login Orange HRM Tests', () => {

it('Login - Fail', () =>  {
    loginFail.accessLoginFail(),
    loginFail.commandsLoginFail(userData.userFail.username, userData.userFail.password),
    loginFail.wrongAlert()
})

    it('Login - Success', () =>  {
        loginPage.accessLoginPage(),
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
        dashboard.acessDashboard()
    })
})