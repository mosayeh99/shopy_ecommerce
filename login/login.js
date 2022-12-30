

// localStorage.clear()

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
    


        if (userLog === userReg && passLog === passReg){
            Swal.fire({
                icon: 'success',
                title: 'Successfully Login',
                text: 'Wish you a good Shopping ',
                footer: `<a href="../index.html">  Home Page  /</a>
                         <a href="../checkout/checkout.html"> Checkout  /</a>
                         <a href="./login.html">  LogOut  </a>`
                        })
                        document.getElementById("error").style.display = "none"
                    document.getElementById("logform").style.display ="none"
        }
   
        document.getElementById("passLog").addEventListener('blur', function(){
         if ((userLog !== userReg && passLog !== passReg)){
            
            document.getElementById("error").innerHTML ="Wrong e-mail <br> Retry Or Register Now"
            
            document.getElementById("error").style.display = "block"
        }

        else if ((userLog === userReg && passLog !== passReg )){
            document.getElementById("error").innerHTML ="Incorrect Password"
            document.getElementById("error").style.display = "block"
        }
        })

        // document.getElementById("passLog").addEventListener('blur', function(){
        //     if (userLog === userReg && passLog !== passReg){
                
        //         document.getElementById("error").innerHTML ="Incorrect Password"
        //         document.getElementById("error").style.display = "block"
        //     }})
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
            
            let arr = []

        if (isNaN (userReg) && passReg.length >=8){
            document.getElementById("signupBtn").style.pointerEvents ="auto"
            var obj ={
                "Address" :  [addr] ,
                "RegPassword" : passReg ,
                "RegUser" : userReg ,
                "LastName" :lname ,
                "FirstName" : fname ,
                "login" : true 
            }
            arr.push(obj)

            localStorage.setItem("User",JSON.stringify(arr)) 

            document.getElementById("regError").innerHTML =""
            document.getElementById("regError").style.display = "none"
            
        }
        else if(!isNaN (userReg) && passReg.length <8 ) {

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
    
    

    // ------------------------------- Reset Password Form ------------------------------- //
        document.getElementById("return").addEventListener("click",function() {

            document.getElementById("login").style.display = "block"
            document.getElementById("signup").style.display = "none"
            document.getElementById("reset").style.display = "none"
           })
    
    document.getElementById("forget").addEventListener("click",function(){
        
        document.getElementById("login").style.display = "none"
        document.getElementById("signup").style.display = "none"
        document.getElementById("reset").style.display = "block"

        document.getElementById("ResetBtn").addEventListener("click", function(){
            newPass = document.getElementById("newPass").value 
            let arr =JSON.parse(localStorage.getItem("User"))
            var fname = arr[0].FirstName ;
            var lname = arr[0].LastName ;
            var addr   = arr[0].Address  ;
            var userReg = arr[0].RegUser ;
            
            if(newPass.length >=8){        
            arr[0].RegPassword = newPass ;

            localStorage.setItem('User',JSON.stringify(arr)) ;
            var obj ={
                "Address" :  [addr] ,
                "RegPassword" : newPass ,
                "RegUser" : userReg ,
                "LastName" :lname ,
                "FirstName" : fname ,
                "login" : true 
            }
            arr.push(obj)   
            }
            
            else if (newPass.length <8){
                document.getElementById("resetError").innerHtml ="Uncorrect Password"
            }
            
            
        })

    })

    let arr =JSON.parse(localStorage.getItem("User"))

    while (arr.login === true)
    {

    document.getElementById("logform").style.display = "none";

    }


   console.log(arr[0].login)
