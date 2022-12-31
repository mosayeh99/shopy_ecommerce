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
            el.Address.forEach((ele) => {
                userAddress.textContent += ele;
            })
        }
    })
}

logoutBtn.addEventListener('click', () => {
    userInfoArray.forEach((el) => {
        if (el.loginStatus == true) {
            el.loginStatus = false;
            localStorage.setItem('User', JSON.stringify(userInfoArray));
            location.href = '../index.html';
        }
    })
})