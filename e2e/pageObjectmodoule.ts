// launch the url
// enter username and password
// click on login button
// verify the login not successful

// Add to cart Scenario
// launch the url
// enter username and password
// click on login button
// Select the product and click on add to cart button

// without POM - we will write the test cases in single file
// We wont reuse the code again and again. If we have to write the test cases for multiple pages, we will duplicate the code.

// with POM - we will create a separate class for each page and write the test cases in separate file

// Page

// LoginPage - LoginPage.ts > declare locator(username, password, login btn) and
// methods for login page(open url, enter username, enter password, click on login button)

// AddtoCartPage - AddtoCartPage.ts

// CheckoutPage - CheckoutPage.ts

// Test

// LoginTest - LoginTest.ts > write the test cases for login page

// AddtoCartTest - AddtoCartTest.ts > write the test cases for add to cart page

// CheckoutTest - CheckoutTest.ts > write the test cases for checkout page