let productsInCartArray = [];
let productsSubtotalPrice;
let productsPrice;
// --------------------------Print Products In Cart------------------------
showProductsIncart();
function showProductsIncart() {
    fetch(
        'https://raw.githubusercontent.com/mosayeh99/products_json_api/main/data/produc' + 'ts.json')
        .then(res => res.json())
        .then((full) => {
            let prodAddedCart = "";
            let productIndexInObj = 0;
            if (localStorage.productsInCart != null) {
                productsInCartArray = JSON.parse(localStorage.productsInCart);
                if (productsInCartArray.length == 0) {
                    document.querySelector('.cart-empty').style.display = 'flex';
                    document.querySelector('#table-foot-btns').style.display = 'none';
                }
                full.products.forEach(e => {
                    productsInCartArray.forEach(el => {
                        if (el.productId == e.id) {
                            productIndexInObj++;
                            printProductsIncart();
                        }
                        function printProductsIncart() {
                            prodAddedCart += `
                            <div id="cart-product" class="row align-items-center py-md-3 text-md-center">
                                <div id="cart-product-item" class="col-12 col-md-6 py-3">
                                    <div class="row align-items-center">
                                        <span class="col-1" id="cart-product-del-btn" data-productindex="${productIndexInObj - 1}">×</span>
                                        <div class="col-3 col-lg-2 d-flex align-items-center justify-content-center">
                                            <a href="../product/product.html">
                                                <img class="has-product-id w-75" data-productid="${e.id}" src="${e.images[0]}" alt="">
                                            </a>
                                        </div>
                                        <a href="../product/product.html" class="col">
                                            <span id="cart-product-title" class="has-product-id text-center text-md-start" data-productid="${e.id}">${e.title} - ${el.productSize}</span>
                                        </a>
                                    </div>
                                </div>
                                <div id="cart-product-price" class="col-12 col-md py-3">
                                    <div class="row justify-content-between">
                                        <span class="col d-md-none fw-semibold">Price</span>
                                        <span class="col text-end text-md-center">EGP<span id="product-price" data-productindex="${productIndexInObj - 1}">${e.price}</span></span>
                                    </div>
                                </div>
                                <div id="cart-product-quantity" class="col-12 col-md-2 py-3">
                                    <div class=" row align-items-center">
                                        <span class="col d-md-none fw-semibold">Quantity</span>
                                        <div id="product-quantity" class="col">
                                            <span id="decrease-quantity" data-productindex="${productIndexInObj - 1}">-</span>
                                            <span id="quantity">${el.productQty}</span>
                                            <span id="increase-quantity" data-productindex="${productIndexInObj - 1}">+</span>
                                        </div>
                                    </div>
                                </div>
                                <div id="cart-product-subtotal" class="col-12 col-md-2 py-3">
                                    <div class="row">
                                        <span class="col d-md-none fw-semibold">Subtotal</span>
                                        <span class="col text-end text-md-center">EGP<span id="cart-product-subtotal-price" data-productindex="${productIndexInObj - 1}">${el.productQty * e.price}</span></span>
                                    </div>
                                </div>
                            </div>
                            `
                        }
                    })
                })
            }else {
                document.querySelector('.cart-empty').style.display = 'flex';
                document.querySelector('#table-foot-btns').style.display = 'none';
            }
        document.querySelector("#cart-table-body").innerHTML = prodAddedCart;

        productsSubtotalPrice = document.querySelectorAll('#cart-product-subtotal-price');
        productsPrice = document.querySelectorAll('#product-price');
    });
}

// ------------------------increase & decrease quantity-------------------
document.addEventListener('click', (e) => {
    if (e.target.getAttribute('id') == 'increase-quantity') {
        let quantityFieldValue = e.target.previousElementSibling;
        quantityFieldValue.textContent = +quantityFieldValue.textContent +1 ;
        productsInCartArray[e.target.dataset.productindex].productQty = quantityFieldValue.textContent;
        localStorage.setItem('productsInCart', JSON.stringify(productsInCartArray));
        productsPrice.forEach(el => {
            if (el.dataset.productindex == e.target.dataset.productindex ) {
                productsSubtotalPrice.forEach(elm => {
                    if (e.target.dataset.productindex == elm.dataset.productindex) {
                        elm.textContent = +quantityFieldValue.textContent * +el.textContent;
                    }
                })
            }
        })
    }else if (e.target.getAttribute('id') == 'decrease-quantity') {
        let quantityFieldValue = e.target.nextElementSibling;
        if (quantityFieldValue.textContent != "1"){
            quantityFieldValue.textContent = +quantityFieldValue.textContent -1 ;
            productsInCartArray[e.target.dataset.productindex].productQty = quantityFieldValue.textContent;
            localStorage.setItem('productsInCart', JSON.stringify(productsInCartArray));
            productsPrice.forEach(el => {
                if (el.dataset.productindex == e.target.dataset.productindex ) {
                    productsSubtotalPrice.forEach(elm => {
                        if (e.target.dataset.productindex == elm.dataset.productindex) {
                            elm.textContent = +quantityFieldValue.textContent * +el.textContent;
                        }
                    })
                }
            })
        }
    }
})

// -------------------------Delete Product From Cart----------------
document.addEventListener('click', (e) => {
    if (e.target.getAttribute('id') == 'cart-product-del-btn') {
        productsInCartArray.splice(+e.target.dataset.productindex, 1);
        localStorage.setItem('productsInCart', JSON.stringify(productsInCartArray));
        showProductsIncart();
        countProductInCart.forEach(e => { // countProductInCart => declared in nav/nav.js
            e.textContent = productsInCartArray.length;
        });
    }
})

let allUsersArray = [];
if (localStorage.User != null) {
    allUsersArray = JSON.parse(localStorage.User);
}
let ProceedToCheckoutBtn = document.querySelector('#cart-foot-checkout-btn');
ProceedToCheckoutBtn.addEventListener('click', () => {
    let userLoginCounter;
    allUsersArray.forEach((el) => {
        console.log(el.loginStatus);
        userLoginCounter = 0;
        if (el.loginStatus == true) {
            location.href = '../checkout/checkout.html';
            userLoginCounter++;
        }
    })
    if (userLoginCounter == 0) {
        location.href = '../login/login.html';
    }
})