class CustomFields {
    selectorsList() {
        const selectors = {
            buttonSubmit:("[type='submit']"),
            buttonDown:(".oxd-select-text--arrow"),
            bloodType:('.oxd-select-dropdown > :nth-child(6)'),
            testField:("[options='']"),
            CloseButtonSubmit:('.oxd-toast-close')
                }
                return selectors
            }
            
    customFields(customFields) {
        cy.get(this.selectorsList().buttonDown).eq(2).click()
        cy.get(this.selectorsList().bloodType).click()
        cy.get(this.selectorsList().testField).clear().type(customFields)
        cy.get(this.selectorsList().buttonSubmit).eq(1).click()
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get(this.selectorsList().CloseButtonSubmit).click({force:true})
    }
}
        export default CustomFields