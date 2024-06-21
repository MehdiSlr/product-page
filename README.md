# Shopping Site

This project is a simple web application that displays a list of products fetched from an API. It includes a styled card layout for each product, and each card displays the product's image, details, rating, stock information, and price. 

## Features

- Fetches product data from a public API
- Displays products in a responsive card layout
- Uses different logos for different product categories
- Shows product details including title, description, brand, rating, stock, and price
- Highlights product details when hovered over

## Technologies Used

- HTML
- CSS
- JavaScript

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/shopping-site.git
```
2. Navigate to the project directory:
```bash
cd shopping-site
```
3. Open index.html in your favorite web browser.

## Project Structure

- shopping-site
    - assets
        - images
            - logo.png
            - beauty.avif
            - furniture.png
            - groceries.png
            - fragrances.png
    - index.html
    - styles.css
    - main.js
    - README.md


## Detailed Description

### index.html
This is the main HTML file that sets up the basic structure of the web page. It includes references to the CSS and JavaScript files.

### main.js
This JavaScript file handles the fetching of product data from the API and dynamically generates the HTML structure for each product card.

fetchProducts(): Fetches product data from the API.
displayProducts(products): Creates and appends the HTML elements for each product.

### styles.css
This CSS file contains all the styles for the web page, including the layout of the product cards and the hover effects.

.card: Styles for the product cards.
.card-head: Styles for the header section of the card.
.product-detail: Styles for the product details.
.product-detail:hover: Styles applied when the product detail section is hovered over.
## How to Use
1. Open index.html in your web browser.
2. The products will be fetched from the API and displayed as cards.
3. Hover over the product details to see the hover effects.

## Credits
Created by Mehdi Salari

## License
This project is licensed under the MIT License. See the LICENSE file for details.