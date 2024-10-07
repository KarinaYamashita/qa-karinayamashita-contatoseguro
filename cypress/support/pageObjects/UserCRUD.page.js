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

    openSignUpForm(){
        cy.get(element.createUserBtn).click();
    }

    fillForm(text){
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

    validateReadUserData(){
        cy.get(element.userTable)
        .last()
        .contains(userInfo.name)        
        .should('be.visible')
    }

    validateReadAllUserData(){
        cy.get(element.userTable)       
        .should('be.visible')
    }

    openUpdateModal(){
        cy.get(element.editUserBtn).should('be.visible')
        .last()
        .click()
    }

    validateUpdateFormIsShowed(){
        cy.contains(text.titleUpdateForm);
    }

    clickAtDeleteBtn() {
        cy.get(element.userTable).contains(userInfo.name)
        .parent('tr')
        .find(element.deleteUserBtn).click();
    }
    validateDeleteUser(){
        cy.contains(text.msgSuccessDeleteUser);
        cy.get(element.closeMsgBtn).should('be.visible').
        click()
        cy.get(element.userTable).contains(userInfo.name)
        .should('not.be.visible')
    }
}

export default new UserCRUD();