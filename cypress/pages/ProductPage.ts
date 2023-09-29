export default class ProductPage {

  private elements = {
    productTitle: () => cy.get("span[id='productTitle']"),
    addToCartBtn: () => cy.get("#desktop_qualifiedBuyBox input[id='add-to-cart-button']"),
    buyNowBtn: () => cy.get("input[id='buy-now-button']"),
    navCartCount: () => cy.get("span[id='nav-cart-count']"),
    navCartLink: () => cy.get("a[id='nav-cart']")
  }
  
  // Functions
   verifyProductTitle(productTitle: string) {
    this.elements.productTitle()
    .invoke("text")
    .then(text=>{
      expect(text).to.contain(productTitle);
    })
  }

   clickOnAddToCartBtn() {
     this.elements.addToCartBtn().click();
  }

   clickOnNavCartLink() {
    this.elements.navCartLink().click();
  }

   getCartCountAndVerify(count: number) {
     this.elements.navCartCount()
     .invoke("text")
     .then(text=>{
       expect(Number(text)).to.equal(count);
     })
  }
}