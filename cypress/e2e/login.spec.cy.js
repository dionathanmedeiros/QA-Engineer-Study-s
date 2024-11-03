import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import LoginFail from '../pages/loginFail'
import Dashboard from '../pages/dashboard'
import MenuPage from '../pages/menuPage'
import MyInfo from '../pages/myInfo'
import CustomFields from '../pages/customfields'

  const loginPage = new LoginPage()
  const loginFail= new LoginFail()
  const dashboard= new Dashboard()
  const menuPage= new MenuPage()
  const myInfoPage= new MyInfo()
  const customFields= new CustomFields()

describe('Orange HRM Tests', () => {

  const selectorsList = {}
//                    Login
  it('Login - Sucess', () => {
        loginPage.accessLoginPage(),
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    //                Dashboard                //
        dashboard.acessDashboard()
    //                MenuPage                 //
        menuPage.acessMyInfo()
    //                My info Page             //
        myInfoPage.myInfoPage()
    //               Custom Fields             //
        customFields.customFields()
  })

    //               Login Fail                //

  it('Login - Fail', () =>  {
        loginFail.accessLoginFail(),
        loginFail.commandsLoginFail(userData.userFail.username, userData.userFail.password)
 
  })
})
