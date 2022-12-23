fetch('https://raw.githubusercontent.com/mosayeh99/products_json_api/main/data/products.json')
.then(res => res.json())
.then((full) => {
    let productList = "";
    let productListHead = "";
    let productInfo = "";
    full.products.forEach(e => {
        productListHead = `
        <div id="shopy-product" data-productid="${e.id}">
        <div id="shopy-product-item" class="position-relative overflow-hidden">
            <a href="product/product.html">
                <img class="w-100" src="${e.images[0]}" alt="">
                <img class="w-100 position-absolute start-0 opacity-0" src="${e.images[1]}" alt="">
            </a>
            <div id="shopy-product-sizes" class="d-none d-md-block">
                <a href="product/product.html">
        `
        let productSizes = "";
        e.sizes.forEach(el => {
            productSizes += `
            <span>${el}</span>
            `
        })
        productInfo = `
                </a>
            </div>
        </div>
        <div id="shopy-product-title" class="ps-3 pt-2 pb-1">
            <a href="product/product.html">
                <span>${e.title}</span>
            </a>
        </div>
        <div id="shopy-product-price" class="ps-3 pb-2">
            <span id="shopy-current-price" class="me-2">EGP<span>${e.price}</span></span>
            <del id="shopy-instead-price">EGP<span>${e.insteadPrice}</span></del>
        </div>
    </div>
        `
        productList += productListHead + productSizes + productInfo;
    });
    document.querySelector('#shopy-section-product-list #product-list').innerHTML = productList;
})