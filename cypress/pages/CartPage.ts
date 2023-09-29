export default class CartPage {
  private elements = {
    deleteBtn: () => cy.get("span[data-feature-id='delete'] input[value='Delete']"),
    proceedToBuyBtn: () => cy.get("[name='proceedToRetailCheckout']"),
    selectedQty: () => cy.get("[id='quantity'] option[selected]"),
    qtyDropdown: () => cy.get("[id='quantity']"),
    activeCartSubtotal: () => cy.get("[id='sc-subtotal-amount-activecart']>span")
   }

   getSelectedQtyAndVerify(qty: number) {
     this.elements.selectedQty()
     .invoke("text")
     .then(text=>{
       expect(Number(text.trim())).to.equal(qty)
     })
  }

   changeQty(qty: number) {
     this.elements.qtyDropdown().select(`${qty}`);
  }

   clickOnDeleteBtn() {
    this.elements.deleteBtn().click();
  }

   clickOnProceedToBuyBtn() {
    this.elements.proceedToBuyBtn().click();
  }

   getSubtotalAndVerify(totalAmt: string) {
     this.elements.activeCartSubtotal()
     .invoke("text")
     .then(text=>{
       expect((text)?.trim()).to.equal(totalAmt);
     })
  }
}