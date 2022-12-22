// only alert function & for editing after
function confirmation() {
    alert(" Successfully purchased , \n Thank you for using our site . ")
}

//  to get selected item from cart page
function showItem() {
    var elem = document.querySelectorAll('p[class="item"]')
    for (var i = 0; i < elem.length; i++) {
        elem[i].style.display = "block";
    }
}
// to store the user address in cookie
function cookieAddress() {

    //for session cookie
    var address = document
        .getElementById("address")
        .value;
    document.cookie = "addressCookie=" + address + "; expires= 1/1/2000";

    // for long cookie (3 month)
    /*
    var currentDate = new Date();
    this.setMonth(this.getMonth() + 3);

    var address = document.getElementById("address").value;
    document.cookie = "addressCookie=" + address + "; expires=" + currentDate;
    */
}