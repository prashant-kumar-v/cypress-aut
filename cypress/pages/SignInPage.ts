export default class SignInPage {
  
  verifySignInPageOpened(){
    cy.url().should('include', 'https://www.amazon.in/ap/signin');
  }
}