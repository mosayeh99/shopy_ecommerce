// --------Add&Remove body overlay And Prevent&Allow body scroll--------
let bodyOverlay = document.querySelector('body .mb-body-overlay');
function addOverlayAndPreventScroll() {
    document.body.style.overflow = 'hidden';
    bodyOverlay.style.visibility = 'visible';
}
function removeOverlayAndAllowScroll() {
    document.body.style.overflow = 'auto';
    bodyOverlay.style.visibility = 'hidden';
}

// -----------------Mobile Side Menu-----------------
let mbHeadbarMenuicon = document.querySelector('header .head-bar .toggle-menu ')
let mbToolbarMenuicon = document.querySelector('.toolbar-mobile .toolbar-menu')
let mbMenuDrawer = document.querySelector('.menu-drawer');
let mbMenuDrawerCloseBtn = document.querySelector('.menu-drawer .drawer-close-btn');
let mbMenuDrawerHeadBtns = document.querySelectorAll('.menu-drawer .drawer-header .mb-tap-title');
let mbMenuDrawerlinks = document.querySelectorAll('.menu-drawer .menu-mb-item');
function openMenuDrawer() {
    mbMenuDrawer.classList.add('active');
    addOverlayAndPreventScroll();
}
function closeMenuDrawer() {
    mbMenuDrawer.classList.remove('active');
    removeOverlayAndAllowScroll();
}
mbHeadbarMenuicon.addEventListener('click', (e) => {
    e.stopPropagation();
    openMenuDrawer();
});
mbToolbarMenuicon.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    openMenuDrawer();
});
mbMenuDrawerCloseBtn.addEventListener('click', closeMenuDrawer);
mbMenuDrawer.addEventListener('click', (e) => {e.stopPropagation()});
document.addEventListener('click', (e) => { // close Menu when click anywhere except menu icons and menu drawer
    if (e.target != mbHeadbarMenuicon && e.target != mbToolbarMenuicon && e.target != mbMenuDrawer) {
        closeMenuDrawer();
    }
});
function toggleMenuDrawerTabs(e) {
    mbMenuDrawerHeadBtns.forEach((el) => {
        el.classList.remove('active');
    })
    mbMenuDrawerlinks.forEach((el) => {
        el.classList.remove('active');
    })
    e.target.classList.add('active');
    document.querySelector(e.target.dataset.menutab).classList.add('active');
}
mbMenuDrawerHeadBtns[0].addEventListener('click', (e) => {toggleMenuDrawerTabs(e);});
mbMenuDrawerHeadBtns[1].addEventListener('click', (e) => {toggleMenuDrawerTabs(e);});

// -----------------Set search input value of large screen in localStorage-------------------
let largeSearchInputFiled = document.querySelector('header .head-bar .search input');
let largeSearchInputIcon = document.querySelector('header .head-bar .search a');
largeSearchInputIcon.addEventListener('click', (e) => {
    if (largeSearchInputFiled.value != "") {
        localStorage.setItem('shopySearchInputValue', JSON.stringify(largeSearchInputFiled.value));
    }else {
        e.preventDefault();
    }
});

// ----------------------Print Structure of Mobile Search Menu----------------------
loadMobileSearchDrawer();
function loadMobileSearchDrawer() {
    let shopyMobileSearchDrawer = `
    <div class="drower-header">
            <span>Search in site</span>
            <button class="drower-close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <div class="mb-search">
            <input type="text" placeholder="search...">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </span>
        </div>
        <div class="search-result">
            <div class="mb-result-head">
                <span class="head-text active">Need some suggestions?</span>
                <span class="head-text">search result</span>
            </div>
            <div class="mb-result-content">
            <div class="search-result-found">
                <div class="shopy-search-result-items">

                    </div>
                    <div class="mb-result-view-more">
                        <a href="#">
                            <span>view All</span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <line x1="15" y1="16" x2="19" y2="12"></line>
                                    <line x1="15" y1="8" x2="19" y2="12"></line>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="result-not-found">
                    <span>No results founded for your search</span>
                </div>
            </div>
        </div>
    `
    document.querySelector('.search-drawer').innerHTML = shopyMobileSearchDrawer;
}

// print product page path to products in search drawer based on current page
let shopyProductPagePath;
if (window.location.pathname.indexOf('product') != -1) {
    shopyProductPagePath = '#';
}else if (window.location.pathname.indexOf('index') != -1 || window.location.pathname.indexOf('shopy_ecommerce') != -1) {
    shopyProductPagePath = 'product/product.html';
}else {
    shopyProductPagePath = '../product/product.html';
}

// -----------------Show search result on search drawer----------------
let mbSearchFiled = document.querySelector('.search-drawer .mb-search input');
let mbSearchResultHeadText = document.querySelectorAll('.search-drawer .mb-result-head .head-text');
let mbSearchResultViewMoreBtn = document.querySelector('.search-drawer .mb-result-view-more');
let mbSearchResultNotFoundText = document.querySelector('.search-drawer .result-not-found');
fetch('https://raw.githubusercontent.com/mosayeh99/products_json_api/main/data/products.json')
.then(res => res.json())
.then((full) => {
    let shopySearchDrawerResults = "";
    full.products.forEach(e => { // show products suggestions when window loaded
        if (+e.id % 5 == 0) { // To show random products
            shopySearchDrawerResults += `
            <div class="result-item">
                <div class="result-item-img">
                    <a href="${shopyProductPagePath}">
                        <img class="has-product-id" src="${e.images[0]}" alt="" data-productid="${e.id}">
                    </a>
                </div>
                <div class="result-item-text">
                    <a href="${shopyProductPagePath}">
                        <p class="has-product-id" data-productid="${e.id}">${e.title}</p>
                    </a>
                    <span class="item-price">EGP<span>${e.price}</span></span>
                    <del class="item-instead-price">EGP<span>${e.insteadPrice}</span></del>
                </div>
            </div>
            `;
        }
        document.querySelector('.shopy-search-result-items').innerHTML = shopySearchDrawerResults;
    })
    mbSearchFiled.addEventListener('keyup', () => { // show search result when start write on search input
        shopySearchDrawerResults = "";
        let searchResultCounter = 0;
        full.products.forEach(e => {
            if (mbSearchFiled.value != "") {
                if (e.title.toLowerCase().indexOf(mbSearchFiled.value.toLowerCase()) != -1) {
                    searchResultCounter++;
                    if (searchResultCounter <= 8) {
                        mbSearchResultHeadText[0].classList.remove('active');
                        mbSearchResultHeadText[1].classList.add('active');
                        mbSearchResultViewMoreBtn.classList.add('active');
                        mbSearchResultNotFoundText.classList.remove('active');
                        printSearchDrawerResult();
                    }
                }
                if (searchResultCounter == 0) {
                    mbSearchResultHeadText[0].classList.remove('active');
                    mbSearchResultHeadText[1].classList.add('active');
                    mbSearchResultViewMoreBtn.classList.remove('active');
                    mbSearchResultNotFoundText.classList.add('active');
                }
            }else {
                if (+e.id % 6 == 0) { // To show random products
                    mbSearchResultHeadText[0].classList.add('active');
                    mbSearchResultHeadText[1].classList.remove('active');
                    mbSearchResultViewMoreBtn.classList.remove('active');
                    mbSearchResultNotFoundText.classList.remove('active');
                    printSearchDrawerResult();
                }
            }
            function printSearchDrawerResult() {
                shopySearchDrawerResults += `
                <div class="result-item">
                    <div class="result-item-img">
                        <a href="${shopyProductPagePath}">
                            <img class="has-product-id" src="${e.images[0]}" alt="" data-productid="${e.id}">
                        </a>
                    </div>
                    <div class="result-item-text">
                        <a href="${shopyProductPagePath}">
                            <p class="has-product-id" data-productid="${e.id}">${e.title}</p>
                        </a>
                        <span class="item-price">EGP<span>${e.price}</span></span>
                        <del class="item-instead-price">EGP<span>${e.insteadPrice}</span></del>
                    </div>
                </div>
                `;
            }
        })
        document.querySelector('.shopy-search-result-items').innerHTML = shopySearchDrawerResults;
    })
});

// ----------------open and close search drawer--------------------
let mbToolbarSearchIcon = document.querySelector('.toolbar-mobile .toolbar-search');
let mbSearchDrawer = document.querySelector('.search-drawer');
let mbSearchDrawerCloseBtn = document.querySelector('.search-drawer .drower-header .drower-close-btn');
function openSearchDrawer() {
    mbSearchDrawer.classList.add('active');
    addOverlayAndPreventScroll();
}
function closeSearchDrawer() {
    mbSearchDrawer.classList.remove('active');
    removeOverlayAndAllowScroll();
}
mbToolbarSearchIcon.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    openSearchDrawer();
});
mbSearchDrawerCloseBtn.addEventListener('click', closeSearchDrawer);
mbSearchDrawer.addEventListener('click', (e) => {
    if (e.target.getAttribute('class') != 'has-product-id') {
        e.stopPropagation();
    }
});
document.addEventListener('click', (e) => {
    if (e.target != mbToolbarSearchIcon && e.target != mbSearchDrawer) {
        closeSearchDrawer();
    }
});

// ------set count of product in wishlist to wishlist icons------- 
let countProductInWishlist = document.querySelectorAll('.shopy-wishlist-count');
let shopyWishlistArray;
if (localStorage.IdProductsInWishlist != null) {
    shopyWishlistArray = JSON.parse(localStorage.IdProductsInWishlist);
    countProductInWishlist.forEach(e => {
        e.textContent = shopyWishlistArray.length;
    });
} else {
    shopyWishlistArray = [];
}

// ------set count of product in cart to cart icons-------
let countProductInCart = document.querySelectorAll('.shopy-cart-count');
let shopyCartArray;
if (localStorage.IdProductsInCart != null) {
    shopyCartArray = JSON.parse(localStorage.IdProductsInCart);
    countProductInCart.forEach(e => {
        e.textContent = shopyCartArray.length;
    });
}


// ----------Set Id Product to localStorage on click--------------
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('has-product-id')) {
        localStorage.setItem('IdProductToShow', JSON.stringify(e.target.dataset.productid));
    }
});

// -----Set Wishlist Product Id to LocalStorage-----
document.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.getAttribute('id') == 'shopy-product-wishlist-icon') {
        e.target.classList.add('is--added-to-wishlist');
        e.target.parentElement.nextElementSibling.textContent = 'Added To Wishlist';
        shopyWishlistArray.push(e.target.dataset.productid);
        countProductInWishlist.forEach(e => {
            e.textContent = shopyWishlistArray.length;
        });
        localStorage.setItem('IdProductsInWishlist', JSON.stringify(shopyWishlistArray));
    }
});

// -----Set fill style to product wishlist icons that founded in localStorage------
function fillStyleToProductWishlist() {
    let allProductWishListIcons = document.querySelectorAll('#shopy-section-product-list #shopy-product-wishlist-icon');
    allProductWishListIcons.forEach(e => {
        if (shopyWishlistArray.indexOf(e.dataset.productid) != -1) { // shopyWishlistArray => declared in nav/nav.js
            e.classList.add('is--added-to-wishlist');
            e.parentElement.nextElementSibling.textContent = 'Added To Wishlist';
        }
    });
}