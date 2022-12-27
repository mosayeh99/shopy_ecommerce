// -----------Print Products in home page with filteration conditiones--------------
showShopyProducts();
function showShopyProducts() {
    let shopyProductList = "";
    let shopyProductListHead = "";
    let shopyProductInfo = "";
    fetch('https://raw.githubusercontent.com/mosayeh99/products_json_api/main/data/products.json')
    .then(res => res.json())
    .then((full) => {
        full.products.forEach(e => {
            if (localStorage.IdProductsInWishlist != null) {
                let IdProductsInWishlistArray = JSON.parse(localStorage.IdProductsInWishlist);
                if (IdProductsInWishlistArray.indexOf((e.id).toString()) != -1) {
                    printShopyProducts();
                }
            }
            function printShopyProducts() {
                shopyProductListHead = `
                    <div id="shopy-product">
                    <div id="shopy-product-item" class="position-relative overflow-hidden">
                        <a href="product/product.html">
                            <img class="has-product-id w-100" src="${e.images[0]}" alt="" data-productid="${e.id}">
                            <img class="has-product-id w-100 position-absolute start-0 opacity-0" src="${e.images[1]}" alt="" data-productid="${e.id}">
                        </a>
                        <div id="shopy-product-add-to-wishlist" class="position-absolute">
                            <span>
                                <svg id="shopy-product-wishlist-icon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" data-productid="${e.id}"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                                </path>
                                </svg>
                            </span>
                            <span id="wishlist-tooltip" class="d-none d-md-block">Add To Wishlist</span>
                        </div>
                        <div id="shopy-product-sizes" class="has-product-id d-none d-md-block" data-productid="${e.id}">
                            <a href="product/product.html" class="pe-none">
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
                            <a href="product/product.html">
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
    });
}