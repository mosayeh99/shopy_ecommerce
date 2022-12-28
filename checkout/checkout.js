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

function addAddress() {
    var newli = document.createElement('li');
    var newlabel = document.createElement("label");
    // var newli = document.createElement("li");
    var y = document.createTextNode(document.getElementById("newAddress").value);
    newlabel.appendChild(y);
    newli.appendChild(newlabel)
    // newli.appendChild(newli)
    document
        .getElementById("address-list")
        .appendChild(newli);

    // var y = document.createTextNode(document.getElementById("newAddress").value);
    // var newlabel = document.createElement("label"); newlabel.appendChild(y)
    // document.getElementById("firstRadio").appendChild(newlabel); var newAddress =
    // prompt("Enter your new address"); if (newAddress === null) { alert(" Failed
    // to added, Please try again.") } else {     alert(" Successfully added. ") }

}
// Add Address btn function
var coll = document.getElementsByClassName("addAddress_btn");
for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
function addMethod() {
    var newMethod = prompt("Enter your new method of payment");
    if (newMethod === null) {
        alert(" Failed to added, Please try again.")
    } else {
        alert(" Successfully added. ")
    }
}
