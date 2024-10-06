const element = require('../elements/createUser.elements').ELEMENTS
const form = require('../elements/createUser.elements').FORM
const userInfo = require('../data/user.data').USERINFO
const text = require('../data/elementsText.data').TEXTS

class UserCRUD {
    validateLoadSignUpPage() {
        cy.get(element.createUserBtn).should('be.visible')
        .and('have.text', text.createUserBtnLabel).click()
        cy.contains(text.titleSignupForm);
    }

    fillForm(text){
        cy.get(element.createUserBtn).click();
        cy.get(form.nameLocator).type(userInfo.name);
        cy.get(form.mailLocator).type(userInfo.mail);
        cy.get(form.phoneLocator).type(userInfo.phone);
        cy.get(form.birthCityLocator).type(userInfo.birthCity);
        cy.get(form.birthDateLocator).type(userInfo.birthDate);
        cy.get(form.companyInputLocator).type(userInfo.company)
        cy.get(form.companiesLocator).first().click();
        cy.get(form.nameLocator).click()
        cy.get(form.submitBtn).click();
    }

    validateCreateUserWithSuccess(){
        cy.get(element.userTable).should('be.visible')
        .and('contain', userInfo.name)
        .and('contain', userInfo.mail)
    }

    openUpdateModal(){
        cy.get(element.editUserBtn).should('be.visible')
        .last
        ().click()
    }

    validateUpdateFormIsShowed(){
        cy.contains(text.titleUpdateForm)
    }
}

export default new UserCRUD();