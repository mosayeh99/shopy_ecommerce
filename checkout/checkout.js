
//----------------- only alert function & for editing after-----------------
function confirmation() {alert(" Successfully purchased , \n Thank you for using our site . ")}

//-------------- To get selected item from cart page -----------------------
let prodectsCartArr = JSON.parse(localStorage.productsInCart)
fetch(
    'https://raw.githubusercontent.com/mosayeh99/products_json_api/main/data/produc' + 'ts.json')
    .then(res => res.json())
    .then((full) => {
        let productsTable = "";
        let prodInCart = "";
        let totalPrice = "";
        let subTotalPrice = 0;
        full
            .products
            .forEach(e => {
                prodectsCartArr.forEach(el => {
                    if (el.productId == e.id) {
                        prodInCart += `
                        <tr>
                            <td>                        
                                <span>${e.title}</span>
                                <span>[${el.productSize}]</span>
                                <span>×${el.productQty}</span>
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
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

//-------------- To get & set address from local Storge -----------------------
let loginUserArr = JSON.parse(localStorage.User);
printAddress();
function printAddress() {
    let addressOfUSer = "";
    loginUserArr[0].Address.forEach(e => {
            addressOfUSer += `<li class="list-group-item">
                              <input class="form-check-input me-1" type="radio" name="listGroupRadio"></input>
                              <label class="form-check-label"> ${e} </label>
                              </li>`
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

//-------------- TO add Card Number in local Storage -----------------------------
savePaymentBtn.onclick = function () {
    var CardNO = document
        .getElementById("CardNumber")
        .value
        console
        .log(CardNO);
    if (CardNO) {
        localStorage.setItem("Card Number", CardNO);
    }
}