# Store Front App

A 4-Phase build of the storefront application, written in React.

#### Phase 1 Requirements

In this first phase, our goal is to setup the basic scaffolding of the
application with initial styling and basic behaviors. This initial build sets up
the file structure and state management so that we can progressively build this
application in a scalable manner

User Stories

- As a user, I expect to see a list of available product categories in the store so that I can easily browse products
- As a user, I want to choose a category and see a list of all available products matching that category
- As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence

Technical Tasks

- Create a visually appealing site using Material UI
- Use a Redux Store to manage the state of categories and items in the store
- Display a list of categories from state
- When the user selects (clicks on) a category …
  - Identify that category as selected (change of class/display)
  - Show a list of products associated with the category

#### Phase 2 Requirements

In phase 2, we will be adding the “Add to Cart” feature to our application, which
will allow our users to not only browse items in the store, but also select them
and have them persist in their “shopping cart” for later purchase.

User Stories

- As a user, I want to choose from products in the list and add them to my shopping cart
- As a user, I want to see the products that I’ve added to my shopping cart so that
- As a user, I want to change the quantity of items I intend to purchase in my shopping cart
- As a user, I want to be able to remove an item from my shopping cart

Technical Tasks

- Continue to use Material UI Components for layout and styling
- Add a “Cart” indicator to the header, like this: Cart (0)
- Create a new Cart component to show the items in the user’s cart

#### Phase 3 Requirements

In phase 3, we will be connecting our Virtual Store to a live API so that our data is persistent and able to be separately managed.

User Stories

- As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock
- As a user, I want to know to that when I add an item to my cart, that it is removed from inventory so that no other users can purchase it

Technical Tasks

- Continue to use Material UI Components for layout and styling
- Load the category and product list from a remote API on page load.
- Update the product quantity in stock when adding items to (or removing from) the cart
- Continue to use multiple reducers

#### Phase 4 Requirements

In phase 4, we will be completing work on our Virtual Store by adding a two full page views to the application: Product Details and Checkout

User Stories

- As a user, I want to see a full detail view of a product so that I can make a more informed choice about purchasing it.
- As a user, I want to view my full cart and initiate the checkout process so that I can purchase my items and have them delivered

Technical Tasks

- Add routing to the application
- Link every product to a page that displays the full product details
- Link the “Cart” summary in the header to a full shopping cart page with shipping/payment forms
- Additionally, we will be swapping out our Redux store and replacing it with a store built using Redux Toolkit

## Author: Joel Watson

### Links and Resources

Phase 1 (lab 29)

- [PR 29](https://github.com/401-advanced-javascript-joel/store-front/pull/1)
- [CI/CD 29](https://github.com/401-advanced-javascript-joel/store-front/pull/1/checks)
- [CodeSandbox 29](https://codesandbox.io/s/store-front-phase-1-ybooz)

Phase 2 (lab 31)

- [PR 31](https://github.com/401-advanced-javascript-joel/store-front/pull/2)
- [CI/CD 31](https://github.com/401-advanced-javascript-joel/store-front/pull/2/checks)
- [CodeSandbox 31](https://codesandbox.io/s/store-front-phase-2-m1oyw)

Phase 3 (lab 32)

- [PR 32](https://github.com/401-advanced-javascript-joel/store-front/pull/3)
- [CI/CD 32](https://github.com/401-advanced-javascript-joel/store-front/pull/3/checks)
- [CodeSandbox 32](https://codesandbox.io/s/store-front-phase-3-3vjpf)

Phase 4 (lab 33)

- [PR 33](https://github.com/401-advanced-javascript-joel/store-front/pull/4)
- [CI/CD 33](https://github.com/401-advanced-javascript-joel/store-front/pull/4/checks)
- [CodeSandbox 33](https://codesandbox.io/s/store-front-phase-4-3vjpf)

Deployment & Sandbox

- [Netlify](https://peaceful-curran-96d1bd.netlify.app/)

### Setup

- `npm install`

### How to run

- `npm start`

### How to test

- `npm test`

### UML

![UML 29](https://raw.githubusercontent.com/401-advanced-javascript-joel/store-front/master/assets/lab-29.jpg)
