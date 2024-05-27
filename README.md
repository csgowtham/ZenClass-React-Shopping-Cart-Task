# Shop - React App

This is a simple shopping site built with React for learning purposes. The site allows users to browse a selection of products, add them to a cart, and remove them from the cart.

## Features

- **Product Listing**: Displays a list of products with images, names, prices, and descriptions.
- **Add to Cart**: Allows users to add products to the cart.
- **Remove from Cart**: Allows users to remove products from the cart.
- **Cart Count**: Displays the number of items in the cart.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


- **public/**: Contains the public assets and the main HTML file.
- **src/**: Contains the source code for the React application.
  - **components/**: Contains the individual React components used in the app.
  - **App.js**: The main component that brings together all other components.
  - **index.js**: The entry point for the React application.

## Components

### App.js

The main component that renders the NavBar, Header, Section, and Footer components. It also manages the state of the cart.

### NavBar.js

Displays the navigation bar with the cart count.

### Header.js

Displays the header of the site.

### Section.js

Displays the list of products and handles the logic for adding and removing products from the cart.

### Footer.js

Displays the footer of the site.

## How to Run the Project

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/shop.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd shop
    ```
3. **Install the dependencies:**
    ```bash
    npm install
    ```
4. **Start the development server:**
    ```bash
    npm start
    ```
5. **Open your browser and navigate to:**
    ```
    http://localhost:3000
    ```

## Usage

- Browse the list of products.
- Click the "Add to Cart" button to add a product to the cart.
- Click the "Remove from Cart" button to remove a product from the cart.
- The cart count in the NavBar will update accordingly.

## Dependencies

- React
- ReactDOM


