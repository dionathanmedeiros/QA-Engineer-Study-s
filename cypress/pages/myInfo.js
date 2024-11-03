class MyInfo {
    selectorsList() {
        const selectors = {
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
        CloseButtonSubmit:('.oxd-toast-close'),
        }
            return selectors
    }
    myInfoPage() {
        cy.get(this.selectorsList().firstName).clear().type("creito")
        cy.get(this.selectorsList().middleName).clear().type("aparecido")
        cy.get(this.selectorsList().lastName).clear().type("P7")
        cy.get(this.selectorsList().genericField).eq(3).clear().type ("40028922")
        cy.get(this.selectorsList().genericField).eq(4).clear().type ("Other Id Test")
        cy.get(this.selectorsList().genericField).eq(5).clear().type ("Driver License Test")
        cy.get(this.selectorsList().dateField).eq(0).clear().type("2025-10-30")
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().buttonDown).eq(0).click()
        cy.get(this.selectorsList().nationality).click()
        cy.get(this.selectorsList().buttonDown).eq(1).click()
        cy.get(this.selectorsList().maritalStatus).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type("1999-12-12")
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().gender).eq(0).click()
        cy.get(this.selectorsList().buttonSubmit).eq(0).click()
        cy.get('body').should('contain', 'Successfully Update')
        cy.get(this.selectorsList().CloseButtonSubmit).click({force:true})
    }
}
    export default MyInfo