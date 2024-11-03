class Dashboard {
    selectorsList() {
        const selectors = {
            sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
            dashboardGrid: ".orangehrm-dashboard-grid",
                }
                return selectors
            }
            
    acessDashboard() {
            cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
            cy.get(this.selectorsList().dashboardGrid)
    }
}
        export default Dashboard