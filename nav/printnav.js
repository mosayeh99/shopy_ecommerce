loadheader();
function loadheader() {
    let shopyHeader = `
    <div class="topbar">
    <div class="content mycontainer">
        <div class="links">
            <a href="">About Us</a>
            <a href="">Contact</a>
        </div>
        <div class="offfer">
            <p>GET 10% OFF ON YOUR FIRST ORDER!</p>
        </div>
        <div class="location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="10" r="3" />
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </svg>
            <a href="">Location</a>
        </div>
    </div>
</div>
<div class="head-bar mycontainer">
    <div class="toggle-menu">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <a href="../index.html"><img src="../assets/images/logo.jpg" alt="Logo" class="logo"></a>
    <div class="head-icons">
        <div class="search">
            <input type="text" placeholder="search...">
            <a href="../search_result/search.html">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </a>
        </div>
        <div class="user-icon">
            <a href="../login/login.html">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
            </a>
        </div>
        <div class="heart-icon">
            <a href="../wishlist/wishlist.html">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                    </path>
                </svg>
                <span class="shopy-wishlist-count">0</span>
            </a>
        </div>
        <div class="cart-icon">
            <a href="../cart/cart.html">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart"
                    width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="6" cy="19" r="2"></circle>
                    <circle cx="17" cy="19" r="2"></circle>
                    <path d="M17 17h-11v-14h-2"></path>
                    <path d="M6 5l14 1l-1 7h-13"></path>
                </svg>
                <span class="shopy-cart-count">0</span>
            </a>
        </div>
    </div>
</div>
<nav>
    <ul>
        <li><a href="../search_result/search.html" class="shopy-category-link" data-productscategory="Hoodie">Hoodies</a></li>
        <li><a href="../search_result/search.html" class="shopy-category-link" data-productscategory="T-Shirt">T-Shirts</a></li>
        <li><a href="../search_result/search.html" class="shopy-category-link" data-productscategory="Jacket">Jackets</a></li>
        <li><a href="../search_result/search.html" class="shopy-category-link" data-productscategory="Pants">Pants</a></li>
        <li><a href="../search_result/search.html" class="shopy-category-link" data-productscategory="Jeans">Jeans</a></li>
    </ul>
</nav>
    `;
    document.querySelector('header').innerHTML = shopyHeader;
}

loadMobileToolbar();
function loadMobileToolbar() {
    let shopyMobileToolbar = `
    <div class="toolbar-menu toolbar-item">
    <a href="/">
        <span class="toolbar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
        </span>
        <span class="toolbar-label">Menu</span>
    </a>
</div>
<div class="toolbar-search toolbar-item">
    <a href="/">
        <span class="toolbar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </span>
        <span class="toolbar-label">Search</span>
    </a>
</div>
<div class="toolbar-accout toolbar-item">
    <a href="../login/login.html">
        <span class="toolbar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24"
            height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
            stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="12" cy="7" r="4"></circle>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
            </svg>
        </span>
        <span class="toolbar-label">Account</span>
    </a>
</div>
<div class="toolbar-wishlist toolbar-item">
    <a href="../wishlist/wishlist.html">
        <span class="toolbar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24"
                height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572">
                </path>
            </svg>
            <span class="shopy-wishlist-count">0</span>
        </span>
        <span class="toolbar-label">Wishlist</span>
    </a>
</div>
<div class="toolbar-cart toolbar-item">
    <a href="../cart/cart.html">
        <span class="toolbar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart"
                width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"
                fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="6" cy="19" r="2"></circle>
                <circle cx="17" cy="19" r="2"></circle>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
            </svg>
            <span class="shopy-cart-count">0</span>
        </span>
        <span class="toolbar-label">Cart</span>
    </a>
</div>
    `
    document.querySelector('.toolbar-mobile').innerHTML = shopyMobileToolbar;
}

loadMobileMenuDrawer();
function loadMobileMenuDrawer() {
    let shopyMobileMenuDrawer = `
    <button class="drawer-close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="32" height="32" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
        <div class="drawer-header">
            <div class="mb-tap-title active" data-menutab=".menu-mb-cat">
                <span>Categories</span>
            </div>
            <div class="mb-tap-title" data-menutab=".menu-mb-nav">
                <span>Menu</span>
            </div>
        </div>
        <div class="menu-mb-cat active menu-mb-item">
            <ul>
                <li><a href="../search_result/search.html" class="shopy-category-link" data-productscategory="Hoodie">Hoodies</a></li>
                <li><a href="../search_result/search.html" class="shopy-category-link" data-productscategory="T-Shirt">T-Shirts</a></li>
                <li><a href="../search_result/search.html" class="shopy-category-link" data-productscategory="Jacket">Jackets</a></li>
                <li><a href="../search_result/search.html" class="shopy-category-link" data-productscategory="Pants">Pants</a></li>
                <li><a href="../search_result/search.html" class="shopy-category-link" data-productscategory="Jeans">Jeans</a></li>
            </ul>
        </div>
        <div class="menu-mb-nav menu-mb-item">
            <ul>
                <li><a href="/">About us</a></li>
                <li><a href="/">Contact us</a></li>
                <li><a href="/">Location</a></li>
            </ul>
        </div>
    `
    document.querySelector('.menu-drawer').innerHTML = shopyMobileMenuDrawer;
}

