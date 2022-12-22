let bodyOverlay = document.querySelector('body .mb-body-overlay');

// -----------------Mobile Side Menu-----------------
let mbHeadbarMenuicon = document.querySelector('header .head-bar .toggle-menu ')
let mbToolbarMenuicon = document.querySelector('.toolbar-mobile .toolbar-menu')
let mbMenuDrawer = document.querySelector('.menu-drawer');
let mbMenuDrawerCloseBtn = document.querySelector('.menu-drawer .drawer-close-btn');
let mbMenuDrawerHeadBtns = document.querySelectorAll('.menu-drawer .drawer-header .mb-tap-title');
let mbMenuDrawerlinks = document.querySelectorAll('.menu-drawer .menu-mb-item');
function openMenuDrawer() {
    mbMenuDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
    bodyOverlay.style.visibility = 'visible';
}
function closeMenuDrawer() {
    mbMenuDrawer.classList.remove('active');
    document.body.style.overflow = 'auto';
    bodyOverlay.style.visibility = 'hidden';
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
    if (e.target != mbHeadbarMenuicon && e.target != mbToolbarMenuicon && e.target != mbMenuDrawer.children) {
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
    document.body.style.overflow = 'hidden';
    bodyOverlay.style.visibility = 'visible';
}
function closeSearchDrawer() {
    mbSearchDrawer.classList.remove('active');
    document.body.style.overflow = 'auto';
    bodyOverlay.style.visibility = 'hidden';
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
})