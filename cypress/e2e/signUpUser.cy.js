import userCRUD from "../support/pageObjects/UserCRUD.page"

describe('Sign up new user ', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Validate correct load of sign up page', () => {
    userCRUD.validateLoadSignUpPage();
  })
  it.skip('Sign up - success', () =>{
    userCRUD.fillForm();
    userCRUD.validateCreateUserWithSuccess();
  })
})