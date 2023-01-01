let arr = [];
if (localStorage.User != null) {
    arr =JSON.parse(localStorage.getItem("User"));
}
// localStorage.setItem("User",JSON.stringify(arr))
// ------------------Password Showing ---------------------
var passlog = document.getElementById('passLog') ;
var showlog = document.getElementById('showLog') ;
showlog.addEventListener('click' , function(){
    if(passlog.type === "password"){
        passlog.type= "text";
    }else{
        passlog.type = "password" ;
    }
}) ;

var passreg = document.getElementById('passReg') ;
var showreg = document.getElementById('showReg') ;
showreg.addEventListener('click' , function(){
    if(passreg.type === "password"){
        passreg.type= "text";
    }
    else{
        passreg.type = "password" ;
    }
}) ;

var newPass = document.getElementById('newPass') ;
var showReset = document.getElementById('showReset') ;
showReset.addEventListener('click' , function(){
    if(newPass.type === "password"){
        newPass.type= "text";
    }else{
        newPass.type = "password" ;
    }
}) ;

// ------------------------------- Login Form ------------------------------- //
document.getElementById("loginNow").addEventListener("click",function(){
    document.getElementById("login").style.display = "block"
    document.getElementById("signup").style.display = "none"
    document.getElementById("reset").style.display = "none"
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

document.getElementById("logBtn").addEventListener('click',function(e){
    e.preventDefault();
    if (arr.length != 0) {
        var userLog = document.getElementById("userLog").value;
        var passLog = document.getElementById("passLog").value;
        let userIndex = arr.findIndex(el => el.RegUser == userLog && el.RegPassword == passLog);
            if (userLog == "") {
                e.preventDefault();
                document.getElementById("error").innerHTML ="Please enter your Email.";
                document.getElementById("error").style.display = "block"
            }else if (passLog == "") {
                e.preventDefault();
                document.getElementById("error").innerHTML ="Please enter your password.";
                document.getElementById("error").style.display = "block"
            }else if (userIndex == -1) {
                e.preventDefault();
                document.getElementById("error").innerHTML ="Your email or password is incorect.";
                document.getElementById("error").style.display = "block";
            }else {
                document.getElementById("error").style.display = "none"
                // -------------Shopy Alert success---------------
                document.querySelector('#shopy-alert-overlay').classList.add('active');
                document.querySelector('#shopy-alert-success').classList.add('active');
                arr[userIndex].loginStatus = true;
                localStorage.setItem('User', JSON.stringify(arr));
                localStorage.setItem('IdProductsInWishlist', JSON.stringify(arr[userIndex].wishlist))
                localStorage.setItem('productsInCart', JSON.stringify(arr[userIndex].cart))
                setTimeout(() => {
                    location.href = '../index.html';
                }, 3000);
            }
    }else {
        e.preventDefault();
        document.getElementById("error").innerHTML ="Your email or password is incorect."
        document.getElementById("error").style.display = "block"
    }
})

// ------------------------------- Regestration Form ------------------------------- //
document.getElementById("RegisterNow").addEventListener("click",function(){
    document.getElementById("login").style.display = "none"
    document.getElementById("signup").style.display = "block"
    document.getElementById("reset").style.display = "none"
})

var signupBtn = document.getElementById("signupBtn");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var addr   = document.getElementById("addr");
var userReg = document.getElementById("userReg");
var passReg = document.getElementById("passReg");

signupBtn.addEventListener("click",function(e){
    e.preventDefault();
    if (userReg.value.match(/@\w+.\w+/ig) != null){

    }
})

signupBtn.addEventListener("click",function(e){
    let emailExist = false;
    if (arr.length != 0) {
        arr.forEach((el) => {
            if (userReg.value == el.RegUser) {
                document.getElementById("regError").innerHTML ="Email is already registered!"
                document.getElementById("regError").style.display = "block"
                emailExist = true;
            }
        })
    }
    if (fname.value == "" || lname.value == "" || addr.value == "" || userReg.value == "" || passReg.value == "") {
        e.preventDefault();
        document.getElementById("regError").innerHTML ="There are empty fields"
        document.getElementById("regError").style.display = "block"
    }else if(userReg.value.match(/@\w+.\w+/ig) == null) {
        e.preventDefault();
        document.getElementById("regError").innerHTML ="Email is invalid"
        document.getElementById("regError").style.display = "block"
    }else if (userReg.value.match(/@\w+.\w+/ig) != null && emailExist == true){
        e.preventDefault();
    }else if(passReg.value.length <8) {
        e.preventDefault();
        document.getElementById("regError").innerHTML ="Password is too short (minimum is 8 characters)"
        document.getElementById("regError").style.display = "block"
    }else {
        var obj ={
            "FirstName" : fname.value,
            "LastName" :lname.value,
            "RegUser" : userReg.value,
            "Address" :  [addr.value],
            "RegPassword" : passReg.value,
            "wishlist" : [],
            "cart" : [],
            "loginStatus" : true
        }
        arr.push(obj);
        let userIndex = arr.findIndex(el => el.loginStatus == true);
        if (userIndex != -1) {
            if (localStorage.IdProductsInWishlist != null) {
                arr[userIndex].wishlist = JSON.parse(localStorage.IdProductsInWishlist);
            }
            if (localStorage.productsInCart != null) {
                arr[userIndex].cart = JSON.parse(localStorage.productsInCart);
            }
        }
        localStorage.setItem("User",JSON.stringify(arr));
        history.back();
    }
})

userReg.addEventListener('blur', () => {
    if (userReg.value.match(/@\w+.\w+/ig) == null) {
        document.getElementById("regError").innerHTML ="Email is invalid"
        document.getElementById("regError").style.display = "block"
    }
}, true);
passReg.addEventListener('blur', () => {
    if(passReg.value.length <8) {
        document.getElementById("regError").innerHTML ="Password is too short (minimum is 8 characters)"
        document.getElementById("regError").style.display = "block"
    }
}, true)

// ------------------------------- Reset Password Form ------------------------------- //
document.getElementById("forget").addEventListener("click",function(){
    document.getElementById("login").style.display = "none"
    document.getElementById("signup").style.display = "none"
    document.getElementById("reset").style.display = "block"
})

document.getElementById("ResetBtn").addEventListener("click", function(e){
    let userEmail = document.querySelector('#reset-pass-email-field');
    let userIndex = arr.findIndex(el => el.RegUser == userEmail.value);
    newPass = document.getElementById("newPass").value;
    if (userEmail.value == "" ) {
        e.preventDefault();
        document.getElementById("resetError").innerHTML ="Please enter your email.";
        document.getElementById("resetError").style.display = "block"
    }else if (newPass.length <8){
        e.preventDefault();
        document.getElementById("resetError").innerHTML ="Password is too short (minimum is 8 characters)";
        document.getElementById("resetError").style.display = "block"
    }else if (userIndex == -1){
        e.preventDefault();
        document.getElementById("resetError").innerHTML ="Your email is not registered";
        document.getElementById("resetError").style.display = "block"
    }else {
        e.preventDefault();
        arr[userIndex].RegPassword = newPass;
        arr[userIndex].loginStatus = true;
        localStorage.setItem('User',JSON.stringify(arr));
        localStorage.setItem('IdProductsInWishlist', JSON.stringify(arr[userIndex].wishlist))
        localStorage.setItem('productsInCart', JSON.stringify(arr[userIndex].cart))
        document.querySelector('#shopy-alert-success #shopy-alert-msg').textContent = 'Password Reseted';
        document.querySelector('#shopy-alert-overlay').classList.add('active');
        document.querySelector('#shopy-alert-success').classList.add('active');
        setTimeout(() => {
            location.href = '../useraccount/useraccount.html';
        }, 3000);
    }
})