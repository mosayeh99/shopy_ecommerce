/* 
    ------------------NOTE--------------------
    -----Functions Declared In nav/nav.js-----
    - Set Id Product to localStorage on click
*/

// -----------Print Products in home page with filteration conditiones--------------
showShopyProducts();
function showShopyProducts() {
    let shopyProductList = "";
    let shopyProductListHead = "";
    let shopyProductInfo = "";
    fetch('https://raw.githubusercontent.com/mosayeh99/products_json_api/main/data/products.json')
    .then(res => res.json())
    .then((full) => {
        let wishlistCounter = 0;
        if (localStorage.IdProductsInWishlist != null) {
            full.products.forEach(e => {
            if (JSON.parse(localStorage.IdProductsInWishlist).indexOf((e.id).toString()) != -1) {
                printShopyProducts();
                document.querySelector('.wishlist-empty').style.display = 'none';
                wishlistCounter++;
            }
            if (wishlistCounter == 0) {
                document.querySelector('.wishlist-empty').style.display = 'flex';
            }
            function printShopyProducts() {
                shopyProductListHead = `
                    <div id="shopy-product">
                    <div id="shopy-product-item" class="position-relative overflow-hidden">
                        <a href="../product/product.html">
                            <img class="has-product-id w-100" src="${e.images[0]}" alt="" data-productid="${e.id}">
                            <img class="has-product-id w-100 position-absolute start-0 opacity-0" src="${e.images[1]}" alt="" data-productid="${e.id}">
                        </a>
                        <div id="shopy-product-del-from-wishlist" class="position-absolute">
                            <span>
                                <svg id="del-product-wishlist-icon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" data-productid="${e.id}"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <line x1="4" y1="7" x2="20" y2="7"></line>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                </svg>
                            </span>
                            <span id="wishlist-tooltip" class="d-none d-md-block">Remove From Wishlist</span>
                        </div>
                        <div id="shopy-product-sizes" class="has-product-id d-none d-md-block" data-productid="${e.id}">
                            <a href="../product/product.html" class="pe-none">
                    `
                    let shopyProductSizes = "";
                    e.sizes.forEach(el => {
                        shopyProductSizes += `
                        <span>${el}</span>
                        `
                    })
                    shopyProductInfo = `
                            </a>
                            </div>
                        </div>
                        <div id="shopy-product-title" class="ps-3 pt-2 pb-1">
                            <a href="../product/product.html">
                                <span class="has-product-id" data-productid="${e.id}">${e.title}</span>
                            </a>
                        </div>
                        <div id="shopy-product-price" class="ps-3 pb-2">
                            <span id="shopy-current-price" class="me-2">EGP<span>${e.price}</span></span>
                            <del id="shopy-instead-price">EGP<span>${e.insteadPrice}</span></del>
                        </div>
                    </div>
                    `
                shopyProductList += shopyProductListHead + shopyProductSizes + shopyProductInfo;
            }
            });
            document.querySelector('#shopy-section-product-list #product-list').innerHTML = shopyProductList;
        }else {
            document.querySelector('.wishlist-empty').style.display = 'flex';
        }
    });
}

document.addEventListener('click', (e) => {
    let IdProductsInWishlistArray = JSON.parse(localStorage.IdProductsInWishlist);
    if (e.target.getAttribute('id') == 'del-product-wishlist-icon') {
        IdProductsInWishlistArray.splice(IdProductsInWishlistArray.indexOf(e.target.dataset.productid), 1)
        localStorage.setItem('IdProductsInWishlist', JSON.stringify(IdProductsInWishlistArray));
        showShopyProducts();
        countProductInWishlist.forEach(e => { // countProductInWishlist => declared in nav/nav.js
            e.textContent = IdProductsInWishlistArray.length;
        });
    }
})