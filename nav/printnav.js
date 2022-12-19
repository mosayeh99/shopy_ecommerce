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
            <a href="../index.html"><img src="../assets/images/logo.jpg" alt="Logo" class="logo"></a>
            <div class="head-icons">
                <div class="search">
                    <input type="text" placeholder="search...">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
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
                        <span>0</span>
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
                        <span>0</span>
                    </a>
                </div>
            </div>
        </div>
        <nav>
            <ul>
                <li>Swaetpant</li>
                <li>Sweatshirt</li>
                <li>T-Shirt</li>
                <li>Pullover</li>
                <li>Shirt</li>
            </ul>
        </nav>
    `;
    document.querySelector('header').innerHTML = shopyHeader;
}