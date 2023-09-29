/// <reference types="cypress"/>

import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductCartSideSheet from "../pages/ProductCartSideSheet";

describe("Amazon test", () => {
  // pages
  let homepage: HomePage;
  let productPage: ProductPage;
  let productCartSideSheet: ProductCartSideSheet;

  before(() => {
    cy.visit("https://www.amazon.in/");
  })

  after(() => {
  })

  it("amazon aut", async () => {

    homepage = new HomePage();
    homepage.searchProduct("iphone 14");
    homepage.clickOnSearchBtn();

    // const [newWindow] = Promise.all([
    //   context.waitForEvent("page"),
    //   page.getByRole('heading', { name: 'Apple iPhone 14 (128 GB) - Midnight' }).getByRole('link').click()
    // ])
    // newWindow.waitForLoadState("domcontentloaded");
    cy.contains('Apple iPhone 14 (128 GB) - Midnight').click();


    productPage = new ProductPage();
    productPage.verifyProductTitle("Apple iPhone 14 (128 GB) - Midnight");
    productPage.clickOnAddToCartBtn();

    productCartSideSheet = new ProductCartSideSheet();
    productCartSideSheet.verifyCartSideSheetIsDisplayed();
    productCartSideSheet.clickOnSideSheetCartBtn();
  })
})