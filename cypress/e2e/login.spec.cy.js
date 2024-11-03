import userData from '../fixtures/user-data.json'
import myInfoFix from '../fixtures/my-info.json'
import LoginPage from '../pages/loginPage'
import LoginFail from '../pages/loginFail'
import Dashboard from '../pages/dashboard'
import MenuPage from '../pages/menuPage'
import MyInfo from '../pages/myInfo'
import CustomFields from '../pages/customFields'

  const loginPage = new LoginPage()
  const loginFail= new LoginFail()
  const dashboard= new Dashboard()
  const menuPage= new MenuPage()
  const myInfoPage= new MyInfo()
  const customFields= new CustomFields()

describe('Orange HRM Tests', () => {
  
//                    Login
  it('Login - Sucess', () => {
        loginPage.accessLoginPage(),
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    //                Dashboard                //
        dashboard.acessDashboard()
    //                MenuPage                 //
        menuPage.acessMyInfo()
    //                My info Page             //
        myInfoPage.employeeName(myInfoFix.employeeName.firstName, myInfoFix.employeeName.middleName, myInfoFix.employeeName.lastName)
        myInfoPage.employeeId(myInfoFix.employeeId.employeeIdTest, myInfoFix.employeeId.otherId)
        myInfoPage.driverLicenseNumber(myInfoFix.driverLicenseNumber.driverLicenseNumberId, myInfoFix.driverLicenseNumber.licenseExpiryDate)
        myInfoPage.nationalityAndMaritalStatus()
        myInfoPage.dateOfBirthAndGender(myInfoFix.dateOfBirthAndGender.dateOfBirth)
        myInfoPage.submitButton()
    //               Custom Fields             //
        customFields.customFields(myInfoFix.customField.testField)
  })

    //               Login Fail                //

  it('Login - Fail', () =>  {
        loginFail.accessLoginFail(),
        loginFail.commandsLoginFail(userData.userFail.username, userData.userFail.password)
 
  })
})
