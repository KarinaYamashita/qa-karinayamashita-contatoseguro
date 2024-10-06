import userCRUD from "../support/pageObjects/UserCRUD.page"

describe('Update user', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Validate update - success', () => {
        userCRUD.openUpdateModal();
        userCRUD.validateUpdateFormIsShowed()
    })
})