import userCRUD from "../support/pageObjects/UserCRUD.page"

describe('Validate CRUD user flow ', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Validate correct load of sign up page', () => {
    userCRUD.validateLoadSignUpPage();
  })

  it('Validate Sign up with success', () => {
    userCRUD.openSignUpForm();
    userCRUD.fillForm();
    userCRUD.validateCreateUserWithSuccess();
  })

  it('Validate read user with success', () => {
    userCRUD.validateReadUserData();
  })

  it('Validate update with success', () => {
    userCRUD.openUpdateModal();
    userCRUD.validateUpdateFormIsShowed()
  })

  it('Validate delete with success', () => {
    userCRUD.clickAtDeleteBtn();
    userCRUD.validateDeleteUser();
  })

})
