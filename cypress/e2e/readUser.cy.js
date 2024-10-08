import userCRUD from "../support/pageObjects/UserCRUD.page"

describe('Read user info ', () => {
  beforeEach(() => {
    cy.visit('/')
    userCRUD.openSignUpForm();
    userCRUD.fillForm();
  })

  it('Validate read user', () => {
    userCRUD.validateReadUserData();
  })
})