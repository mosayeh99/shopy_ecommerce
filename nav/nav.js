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

// ---------------Mobile Search Menu--------------------
let mbToolbarSearchIcon = document.querySelector('.toolbar-mobile .toolbar-search');
let mbSearchDrawer = document.querySelector('.search-drawer');
let mbSearchDrawerCloseBtn = document.querySelector('.search-drawer .drower-header .drower-close-btn');
// let mbsearchFiled = document.querySelector('.search-drawer .mb-search input');
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
mbSearchDrawer.addEventListener('click', (e) => {e.stopPropagation()});
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