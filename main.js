fetch('https://raw.githubusercontent.com/mosayeh99/products_json_api/main/data/products.json')
.then(res => res.json())
.then((full) => {
    let shopyProductList = "";
    let shopyProductListHead = "";
    let shopyProductInfo = "";
    full.products.forEach(e => {
        shopyProductListHead = `
        <div id="shopy-product" data-productid="${e.id}">
        <div id="shopy-product-item" class="position-relative overflow-hidden pe-none">
            <a href="product/product.html">
                <img class="w-100" src="${e.images[0]}" alt="">
                <img class="w-100 position-absolute start-0 opacity-0" src="${e.images[1]}" alt="">
            </a>
            <div id="shopy-product-sizes" class="d-none d-md-block">
                <a href="product/product.html">
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
        <div id="shopy-product-title" class="ps-3 pt-2 pb-1 pe-none">
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
        shopyProductList += shopyProductListHead + shopyProductSizes + shopyProductInfo;
    });
    document.querySelector('#shopy-section-product-list #product-list').innerHTML = shopyProductList;
});

let shopyProduct = document.querySelector('#shopy-section-product-list #product-list #shopy-product');
document.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.getAttribute('id') == 'shopy-product') {
        localStorage.setItem('IdProductToShow', JSON.stringify(e.target.dataset.productid));
        location.href ='product/product.html';
    }
})