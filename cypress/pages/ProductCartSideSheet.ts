export default class ProductCartSideSheet {
  private elements = {
    cartSideSheet: () => cy.get("div[id='attach-accessory-pane']"),
    crossBtn: () => cy.get("span[id='attach-sidesheet-view-cart-button'] input"),
    sideSheetCartBtn: () => cy.get("a#attach-close_sideSheet-link")
  }
  // Functions
  verifyCartSideSheetIsDisplayed() {
    this.elements.cartSideSheet().should("be.visible");
  }

  clickOnCrossBtn() {
    this.elements.crossBtn().click();
  }

  clickOnSideSheetCartBtn() {
    this.elements.sideSheetCartBtn().click();
  }

}