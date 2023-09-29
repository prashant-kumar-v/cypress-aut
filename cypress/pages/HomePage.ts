export default class HomePage {
  private elements = {
    searchBox: () => cy.get("input[id='twotabsearchtextbox']"),
    searchBtn: () => cy.get("input[id='nav-search-submit-button']"),
    allCategoryMenuIcon: () => cy.get("[id='nav-hamburger-menu']"),
    menuCloseIcon: () => cy.get('#hmenu-canvas-background > .nav-sprite').first(),
    allCategoryMenu: () => cy.get("[id='hmenu-canvas']")
  }

  searchProduct(txt: string) {
    this.elements.searchBox().type(txt);
  }

  clickOnSearchBtn() {
    this.elements.searchBtn().click();
  }

  clickOnAllCategoryMenuIcon() {
    this.elements.allCategoryMenuIcon().click();
  }

  menuCloseIconIsVisible() {
    this.elements.menuCloseIcon().should("be.visible");
  }

  clickOnMenuCloseIcon() {
    this.elements.menuCloseIcon().click();
  }

  allCategoryMenuIsVisible() {
    this.elements.allCategoryMenu().should("be.visible");
  }
}