import userCRUD from "../support/pageObjects/UserCRUD.page"

describe('Sign up new user ', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Validate correct load of sign up page', () => {
    userCRUD.validateLoadSignUpPage();
  })
  it('Sign up - success', () =>{
    userCRUD.openSignUpForm();
    userCRUD.fillForm();
    userCRUD.validateCreateUserWithSuccess();
  })
})