let confirmPurchaseBtn = document.querySelector('.confirm-btn-in-checkout-page');
confirmPurchaseBtn.addEventListener('click', () => {
    shopyAlertSuccess();
    localStorage.removeItem('productsInCart');
})
//-------------- To get selected item from cart page -----------------------
let prodectsCartArr;
if (localStorage.productsInCart != null) {
    prodectsCartArr = JSON.parse(localStorage.productsInCart);
}
fetch(
    'https://raw.githubusercontent.com/mosayeh99/products_json_api/main/data/produc' + 'ts.json')
    .then(res => res.json())
    .then((full) => {
        let productsTable = "";
        let prodInCart = "";
        let totalPrice = "";
        let subTotalPrice = 0;
        full.products.forEach(e => {
                prodectsCartArr.forEach(el => {
                    if (el.productId == e.id) {
                        prodInCart += `
                        <tr class="product-row">
                            <td>
                                <span>${e.title}</span>
                                <span>[${el.productSize}]</span>
                                <span>× ${el.productQty}</span>
                            </td>
                            <td class="subTotal">EGP ${el.productQty * e.price}</td>
                        </tr>`
                        totalPrice = `
                        <tr class="totalPriceList">
                            <td>Total Price</td>
                        <td class="subTotal">EGP ${subTotalPrice += el.productQty * e.price} </td>
                        </tr>`
                    }
                })
            })
        productsTable = prodInCart + totalPrice;
        document.querySelector(".productsbody").innerHTML = productsTable;
})

//-------------- Add Address btn disappear function -----------------------
var coll = document.getElementsByClassName("addAddress_btn");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = "38px";
        }
    });
}

//-------------- To get & set address from local Storge -----------------------
let loginUserArr;
if (localStorage.User != null) {
    loginUserArr = JSON.parse(localStorage.User);
}
printAddress();
function printAddress() {
    let addressOfUSer = "";
    let addessCounter = 0;
    loginUserArr[0].Address.forEach(e => {
        if (addessCounter == 0) {
            addressOfUSer += `
            <label id="checkout-radio-input" class="form-check-label">
                <input class="form-check-input me-1" type="radio" name="listGroupRadio" checked></input>
                ${e}</label>
            `
            addessCounter++;
        }else {
            addressOfUSer += `
            <label id="checkout-radio-input" class="form-check-label">
                <input class="form-check-input me-1" type="radio" name="listGroupRadio"></input>
                ${e}</label>
            `
        }
    })
    document.querySelector("#address-list").innerHTML = addressOfUSer;
}
let addAddressBtn = document.getElementById("addAddressBtn");
let newAddressInput = document.getElementById("newAddress");
addAddressBtn.addEventListener('click', () => {
    if (newAddressInput.value != "") {
        loginUserArr[0]
            .Address
            .push(newAddressInput.value);
        localStorage.setItem("User", JSON.stringify(loginUserArr));
        printAddress();
    }
})