import userCRUD from "../support/pageObjects/UserCRUD.page"

describe('Delete user ', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Validate update - success', () => {
        userCRUD.clickAtDeleteBtn();
        userCRUD.validateDeleteUser();
    })
})