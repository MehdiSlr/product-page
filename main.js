
let limit = 30;
let skip = 0;

document.addEventListener('DOMContentLoaded', ()=>{
    const productContainer = document.getElementById('product-container');
    async function fetchProducts(limit, skip) {
        const res = await fetch('https://dummyjson.com/products?limit=' + limit + '&skip=' + skip);
        const json = await res.json();
        displayProducts(json.products);
    }

    const loadMoreBtn = document.getElementById('more');
    loadMoreBtn.addEventListener('click', ()=>{
        skip = limit;
        limit += 10;
        fetchProducts(limit, skip);
    });

    function displayProducts(products) {
        products.forEach(product => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('card');

            const cardHeadDiv = document.createElement('div');
            cardHeadDiv.classList.add('card-head');
            cardDiv.appendChild(cardHeadDiv);

            const logoImg = document.createElement('img');
            switch (product.category) {
                case 'beauty':
                    logoImg.src = './assets/images/beauty.avif';
                    break;
                case 'furniture':
                    logoImg.src = './assets/images/furniture.png';
                    break;
                case 'groceries':
                    logoImg.src = './assets/images/groceries.png';
                    break;
                case 'fragrances':
                    logoImg.src = './assets/images/fragrances.png';
                    break;
            }
            logoImg.classList.add('card-logo');
            cardHeadDiv.appendChild(logoImg);

            const productImg = document.createElement('img');
            productImg.src = product.thumbnail;
            productImg.classList.add('product-img');
            cardHeadDiv.appendChild(productImg);

            const productDetailDiv = document.createElement('div');
            productDetailDiv.classList.add('product-detail');
            cardHeadDiv.appendChild(productDetailDiv);

            const productDetailH2 = document.createElement('h2');
            productDetailH2.textContent = product.title;
            productDetailDiv.appendChild(productDetailH2);

            const productDetailP = document.createElement('p');
            productDetailP.textContent = product.description;
            productDetailDiv.appendChild(productDetailP);

            const cardHeadSpan = document.createElement('span');
            cardHeadSpan.classList.add('back-text');
            cardHeadSpan.textContent = 'API';
            cardHeadDiv.appendChild(cardHeadSpan);

            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.classList.add('card-body');
            cardDiv.appendChild(cardBodyDiv);

            const productDescDiv = document.createElement('div');
            productDescDiv.classList.add('product-desc');
            cardBodyDiv.appendChild(productDescDiv);

            const productTitleSpan = document.createElement('span');
            productTitleSpan.classList.add('product-title');
            productTitleSpan.textContent = product.title;
            productDescDiv.appendChild(productTitleSpan);

            const productBadgeSpan = document.createElement('span');
            productBadgeSpan.classList.add('product-badge');
            productBadgeSpan.textContent = 'New';
            productTitleSpan.appendChild(productBadgeSpan);

            const productCaptionSpan = document.createElement('span');
            productCaptionSpan.classList.add('product-caption');
            productCaptionSpan.textContent = product.brand;
            productDescDiv.appendChild(productCaptionSpan);

            const productPropertiesDiv = document.createElement('div');
            productPropertiesDiv.classList.add('product-properties');
            cardBodyDiv.appendChild(productPropertiesDiv);

            const productRatingSpan = document.createElement('span');
            productRatingSpan.classList.add('product-rating');
            productPropertiesDiv.appendChild(productRatingSpan);

            const productRatingH4 = document.createElement('h4');
            productRatingH4.textContent = 'Rating';
            productRatingSpan.appendChild(productRatingH4);

            const productRatingDiv = document.createElement('div');
            productRatingDiv.classList.add('rating');
            productRatingSpan.appendChild(productRatingDiv);

            rateColor = 'red';
            switch (true) {
                case product.rating <= 2:
                    rateColor = 'red';
                    break;
                case product.rating > 2 && product.rating < 3.5:
                    rateColor = 'orange';
                    break;
                case product.rating >= 3.5:
                    rateColor = 'green';
                    break;
            }

            const productRatingSpanSpan = document.createElement('span');
            productRatingSpanSpan.innerHTML = `<strong style="color: ${rateColor};" class="rate-color">${product.rating}</strong> ` + '/ 5';
            productRatingSpanSpan.classList.add('rating-span');
            productRatingDiv.appendChild(productRatingSpanSpan);

            const productStockSpan = document.createElement('span');
            productStockSpan.classList.add('product-stock');
            productPropertiesDiv.appendChild(productStockSpan);

            const productStockH4 = document.createElement('h4');
            productStockH4.textContent = 'Stock';
            productStockSpan.appendChild(productStockH4);

            const productStockUl = document.createElement('ul');
            productStockUl.classList.add('ul-stock');
            productStockSpan.appendChild(productStockUl);

            const productStockLi1 = document.createElement('li');
            productStockLi1.textContent = product.stock;
            productStockUl.appendChild(productStockLi1);

            const productStockLi2 = document.createElement('li');
            productStockLi2.textContent = 'in';
            productStockUl.appendChild(productStockLi2);

            const productStockLi3 = document.createElement('li');
            productStockLi3.textContent = 'Stock';
            productStockUl.appendChild(productStockLi3);

            const productPriceSpan = document.createElement('span');
            productPriceSpan.classList.add('product-price');
            productPriceSpan.innerHTML = 'USD' + `<b>${product.price}</b>`;
            productPropertiesDiv.appendChild(productPriceSpan);

            productContainer.appendChild(cardDiv);
        });
    }
    fetchProducts(limit, skip);
})