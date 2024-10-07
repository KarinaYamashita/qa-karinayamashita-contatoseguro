import userCRUD from "../support/pageObjects/UserCRUD.page"

describe('Sign up new user ', () => {
  beforeEach(() => {
    cy.visit('/')
    userCRUD.openSignUpForm();
    userCRUD.fillForm();
  })

  it('Validate read user', () => {
    userCRUD.validateReadUserData();
  })
})