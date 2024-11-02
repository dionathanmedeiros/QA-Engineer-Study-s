    class LoginFail {
        selectorsList() {
            const selectors = {
              usernameField: "[name='username']",
             passwordField: "[name='password']",
               loginButton: "[type='submit']",
               wrongCredentialAlert: "[role='alert']",
            }
            return selectors
    }
    //          Login Failed in the Page
    accessLoginFail() {
        cy.visit('/auth/login') 
    }
    commandsLoginFail(username,password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongCredentialAlert)
      }
    }


            export default LoginFail