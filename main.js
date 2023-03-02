/* 
    ------------------NOTE--------------------
    -----Functions Declared In nav/nav.js-----
    - Set Id Product to localStorage on click
    - Set Wishlist Product Id to LocalStorage
    - Set fill style to product wishlist icons
*/

let fiterSection = document.querySelector('#product-filter-bar');
let bannerArrow = document.querySelector('#banner-head-two-images #banner-arrow');
bannerArrow.addEventListener('click', () => {
    fiterSection.scrollIntoView({
        behavior: 'smooth'
    })
})
// ---------------change product grid layout-----------------------
let shopyProductList = document.querySelector('#shopy-section-product-list #product-list');
let largGridLayoutBtns = document.querySelectorAll('#display-products-shape .larg-grid-layout-icon');
let mbGridLayoutBtns = document.querySelectorAll('#display-products-shape .mb-grid-layout-icon');
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('larg-grid-layout-icon')) {
        largGridLayoutBtns.forEach(el => {
            el.classList.remove('active')
        })
        e.target.classList.add('active');
        shopyProductList.removeAttribute('class');
        localStorage.setItem('grid_layout_large_screen', e.target.dataset.gridlayout);
        shopyProductList.classList.add(e.target.dataset.gridlayout);
    }else if (e.target.classList.contains('mb-grid-layout-icon')) {
        mbGridLayoutBtns.forEach(el => {
            el.classList.remove('active')
        })
        e.target.classList.add('active');
        shopyProductList.removeAttribute('class');
        localStorage.setItem('grid_layout_mobile_screen', e.target.dataset.gridlayout);
        shopyProductList.classList.add(e.target.dataset.gridlayout);
    }
})
window.addEventListener('resize', loadGridLayout);
loadGridLayout();
function loadGridLayout() {
    if (window.innerWidth > 767) {
        if (localStorage.grid_layout_large_screen != null) {
            shopyProductList.classList.add(localStorage.grid_layout_large_screen);
            largGridLayoutBtns.forEach(el => {
                el.classList.remove('active');
                if (el.dataset.gridlayout == localStorage.grid_layout_large_screen) {
                    el.classList.add('active');
                }
            })
        }
    }else {
        if (localStorage.grid_layout_mobile_screen != null) {
            shopyProductList.classList.add(localStorage.grid_layout_mobile_screen);
            mbGridLayoutBtns.forEach(el => {
                el.classList.remove('active');
                if (el.dataset.gridlayout == localStorage.grid_layout_mobile_screen) {
                    el.classList.add('active');
                }
            })
        }
    }
}

// ---------Add filter checkbox value to Category Array----------
let filterCategoriesArray = [];
document.addEventListener('change', (e) => {
    if (e.target.getAttribute('id') == 'filter-toggle-checkbox') {
        if (e.target.checked) {
            filterCategoriesArray.push(e.target.dataset.fitervalue);
            showShopyProducts();
        }else {
            filterCategoriesArray.splice(filterCategoriesArray.indexOf(e.target.dataset.fitervalue), 1);
            showShopyProducts();
        }
    }
})

// -----------Print Products in home page with filteration conditiones--------------
showShopyProducts();
function showShopyProducts() {
    let shopyProducts = "";
    let shopyProductsHead = "";
    let shopyProductInfo = "";
    fetch('https://raw.githubusercontent.com/mosayeh99/products_json_api/main/data/products.json')
    .then(res => res.json())
    .then((full) => {
        full.products.forEach(e => {
            if (filterCategoriesArray.length != 0) {
                if (filterCategoriesArray.indexOf(e.category) != -1) {
                    printShopyProducts();
                }
            } else {
                printShopyProducts();
            }
            function printShopyProducts() {
                shopyProductsHead = `
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
                shopyProducts += shopyProductsHead + shopyProductSizes + shopyProductInfo;
            }
        });
        shopyProductList.innerHTML = shopyProducts;
        fillStyleToProductWishlist(); // Function declared in nav/nav.js
    });
}

// ----------------Filter Menu Drawer open & close-------------------
let shopyFilterBtn = document.querySelector('#product-filter-bar #product-filter-btn');
let shopyFilterDrawer = document.querySelector('#product-filter-bar #product-filter-drawer');
let filterDrawerCloseBtn = document.querySelector('#product-filter-drawer #drower-close-btn');
function openFilterDrawer() {
    shopyFilterDrawer.classList.add('active');
    addOverlayAndPreventScroll(); // Function Declared in nav/nav.js
}
function closeFilterDrawer() {
    shopyFilterDrawer.classList.remove('active');
    removeOverlayAndAllowScroll(); // Function Declared in nav/nav.js
}
shopyFilterBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openFilterDrawer();
});
filterDrawerCloseBtn.addEventListener('click', closeFilterDrawer);
shopyFilterDrawer.addEventListener('click', e => {e.stopPropagation()});
document.addEventListener('click', (e) => {
    if (e.target != shopyFilterBtn && e.target != shopyFilterDrawer) {
        closeFilterDrawer();
    }
})

window.onload = () => {
    fillStyleToProductWishlist(); // Function declared in nav/nav.js
}