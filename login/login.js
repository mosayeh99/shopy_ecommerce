
function stopFormsubmit (e){
    e.preventDefault() 
}
// localStorage.clear()


// document.getElementById("regform").addEventListener("click",function(event){
//       event.preventDefault() 
// })

console.log (JSON.parse(localStorage.getItem("User"))[0].RegPassword)
console.log (JSON.parse(localStorage.getItem("User"))[0].RegUser)
// delete JSON.parse(localStorage.getItem("User"))[0]["RegPassword"]
// console.log (JSON.parse(localStorage.getItem("User"))[0])
// ------------------Password Showing ---------------------
var passlog = document.getElementById('passLog') ;
var showlog = document.getElementById('showLog') ;

showlog.addEventListener('click' , function(){
    
    if(passlog.type === "password"){
            passlog.type= "text";
        }
        else{
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
        }
        else{
            newPass.type = "password" ;
        }
    }) ;
    
    // ------------------------------- Login Form ------------------------------- //


    document.getElementById("logform").addEventListener('click',function(){
        
    
        var userLog = document.getElementById("userLog").value;
        var passLog = document.getElementById("passLog").value;
        var userReg= (JSON.parse(localStorage.getItem("User"))[0].RegUser) ;
        var passReg= (JSON.parse(localStorage.getItem("User"))[0].RegPassword) ;
        // var error = document.getElementById("error").innerHTML ;
    
        if (userLog === userReg && passLog === passReg){
            Swal.fire({
                icon: 'success',
                title: 'Successfully Login',
                text: 'Wish you a good Shopping ',
                footer: `<a href="../index.html">  Home Page  /</a>
                         <a href="../checkout/checkout.html"> Checkout  /</a>
                         <a href="./login.html">  LogOut  </a>`
              })
            document.getElementById("logBtn").style.pointerEvents ="auto"
            document.getElementById("logform").style.display ="none"
        }
        // document.getElementById("passLog").addEventListener("keydown",function(){

             if (userLog === userReg && passLog !== passReg){
                document.getElementById("error").innerHTML ="Incorrect Password"
                document.getElementById("error").style.display = "block"
                // document.getElementById("error").style.backgroundColor = "#ffb6c1"
                // document.getElementById("error").style.border = "0.5px solid red"
            }
        else if (!(userLog !== userReg) || !(passLog !== passReg)){
            
            document.getElementById("error").innerHTML ="Retry Or Register Now"
            if (userLog !== userReg && passLog ==! passReg ){
                document.getElementById("error").innerHTML ="If you don't have Account , please Register ."}
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
        signupBtn.addEventListener("click",function(){
            
            
            var fname = document.getElementById("fname").value;
            var lname = document.getElementById("lname").value;
            var addr   = document.getElementById("addr").value ;
            var userReg = document.getElementById("userReg").value;
            var passReg = document.getElementById("passReg").value;

            var regform = document.getElementById("regform")
            console.log(regform)
            
            let arr = []

        if (isNaN (userReg) && passReg.length >=8){
            document.getElementById("signupBtn").style.pointerEvents ="auto"
            var obj ={
                "Address" : addr ,
                "RegPassword" : passReg ,
                "RegUser" : userReg ,
                "Last-Name" :lname ,
                "First-Name" : fname 
            }

            arr.push(obj)
            localStorage.setItem("User",JSON.stringify(arr))

            // localStorage.setItem("RegUser",userReg);
            // localStorage.setItem("RegPassword",passReg);
            // localStorage.setItem("First-Name",fname);
            // localStorage.setItem("Last-Name",lname);
            // localStorage.setItem("Address",addr);
            
            document.getElementById("regError").innerHTML =""
            document.getElementById("regError").style.display = "none"
            
        }
        if(!isNaN (userReg) && passReg.length <8 ) {
            // regform.removeAttribute(action) ;
            // console.log(regform)
            document.getElementById("regError").innerHTML ="Email is invalid <br>Password is too short (minimum is 8 characters) "
            document.getElementById("regError").style.display = "block"

            }
            else if(!isNaN (userReg)) {
                document.getElementById("regError").innerHTML ="Email is invalid"
            }
            else if(passReg.length <8 ) {
                document.getElementById("regError").innerHTML ="Password is too short (minimum is 8 characters)"
            }
        })
    
    
    // ------------------------------- Reset Pass Form ------------------------------- //
        document.getElementById("return").addEventListener("click",function() {

            document.getElementById("login").style.display = "block"
            document.getElementById("signup").style.display = "none"
            document.getElementById("reset").style.display = "none"
           })
    
    document.getElementById("forget").addEventListener("click",function(){
        
        document.getElementById("login").style.display = "none"
        document.getElementById("signup").style.display = "none"
        document.getElementById("reset").style.display = "block"

        // localStorage.setItem("User",JSON.parse())
        // localStorage.setItem("User",JSON.stringify(arr))
        
       let arr =JSON.parse(localStorage.getItem("User"))
        let oldPass =arr[0].RegPassword
        localStorage.removeItem("oldPass")
        console.log(oldPass)
        // console.log(JSON.parse(localStorage.getItem("User"))[0].RegPassword)
        document.getElementById("ResetBtn").addEventListener("click", function(){
            newPass = document.getElementById("newPass").value 
            console.log(newPass)
            
            
            if(newPass.length >=8){
               console.log(JSON.parse(localStorage.getItem("User")[0]).RegPassword) = newPass
                
            }
            
            else if (newPass.length <8){
                document.getElementById("resetError").innerHtml ="Uncorrect Password"
            }
            
            
        })

        
    })
    

