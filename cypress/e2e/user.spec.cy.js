import userData from '../fixtures/user-data.json'
import myInfoFix from '../fixtures/my-info.json'
import LoginPage from '../pages/loginPage'
import Dashboard from '../pages/dashboard'
import MenuPage from '../pages/menuPage'
import MyInfo from '../pages/myInfo'
import CustomFields from '../pages/customFields'

  const loginPage = new LoginPage()
  const dashboard= new Dashboard()
  const menuPage= new MenuPage()
  const myInfoPage= new MyInfo()
  const customFields= new CustomFields()

describe('Orange HRM Tests Functions', () => {

//                    Login
  it('Login/Dashboard/MenuPage/MyInfo-CustomFields', () => {
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
})
