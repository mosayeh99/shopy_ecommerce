let userInfoArray = [];
if (localStorage.User != null) {
    userInfoArray = JSON.parse(localStorage.getItem("User"));
}

let userName = document.querySelector('#user-info #user-name');
let userEmail = document.querySelector('#user-info #user-email');
let userAddress = document.querySelector('#user-info #user-address');
let logoutBtn = document.querySelector('#useraccount-logout-btn a');

if (userInfoArray.length != 0) {
    userInfoArray.forEach((el) => {
        if (el.loginStatus == true) {
            userName.textContent = el.FirstName + " " + el.LastName;
            userEmail.textContent = el.RegUser;
            let UserAddress = "";
            let addressCount = 0;
            el.Address.forEach((ele) => {
                addressCount++;
                UserAddress += `
                <div class="row">
                    <span class="col-3 ps-2 py-2 fw-semibold">Address ${addressCount}</span>
                    <span id="user-address" class="col ps-2 py-2">${ele}</span>
                </div>
                `
                // userAddress.textContent += ele + '-';
            })
            document.querySelector('#user-info').insertAdjacentHTML('beforeend', UserAddress);
        }
    })
}

logoutBtn.addEventListener('click', () => {
    let userIndex = userInfoArray.findIndex(ele => ele.loginStatus == true);
    if (userIndex != -1) {
        if (localStorage.IdProductsInWishlist != null) {
            userInfoArray[userIndex].wishlist = JSON.parse(localStorage.IdProductsInWishlist);
        }
        if (localStorage.productsInCart != null) {
            userInfoArray[userIndex].cart = JSON.parse(localStorage.productsInCart);
        }
    }
    userInfoArray.forEach((el) => {
        if (el.loginStatus == true) {
            el.loginStatus = false;
            localStorage.setItem('User', JSON.stringify(userInfoArray));
            localStorage.setItem('IdProductsInWishlist', JSON.stringify([]));
            localStorage.setItem('productsInCart', JSON.stringify([]));
            location.href = '../login/login.html';
        }
    })
})