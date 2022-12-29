window.addEventListener('load', () => {
    // -----------------------Footer plus icon to show & hide content-------------------------
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('footer-plus-icon')) {
            e.target.lastElementChild.classList.toggle('opened');
            e.target.parentElement.nextElementSibling.classList.toggle('active');
        }
    })

    // ------------------------Contact form input--------------------------
    document.addEventListener('focus', (e) => {
        if (e.target.classList.contains('contact-field')) {
            e.target.previousElementSibling.style.cssText = 'top:0px; color:white';
        }
    }, true);
    document.addEventListener('blur', (e) => {
        if (e.target.classList.contains('contact-field')) {
            if (e.target.value == "") {
                e.target.previousElementSibling.style.cssText = 'top:20px; color:#777';
            }
        }
    }, true);

    // -----------------validation contact menu-----------------------------
    let contactNameField = document.querySelector('.contact-section .contact-content .contact-name-field');
    let contactEmailField = document.querySelector('.contact-section .contact-content .contact-email-field');
    let contactMsgField = document.querySelector('.contact-section .contact-content .contact-msg-field');
    let contactSubmitBtn = document.querySelector('.contact-section .contact-content input[type="submit"]');
    contactSubmitBtn.addEventListener('click', (e) => {
        if (contactNameField.value == "") {
            contactNameField.nextElementSibling.style.display = 'block';
            e.preventDefault();
        }else if (contactEmailField.value == ""){
            contactEmailField.nextElementSibling.style.display = 'block';
            e.preventDefault();
        }else if (contactMsgField.value == ""){
            contactMsgField.nextElementSibling.style.display = 'block';
            e.preventDefault();
        }else if (/[^a-z]/ig.test(contactNameField.value)) {
            contactNameField.nextElementSibling.nextElementSibling.style.display = 'block';
            e.preventDefault();
        }else if (contactEmailField.value.match(/@\w+.\w+/ig) == null) {
            contactEmailField.nextElementSibling.nextElementSibling.style.display = 'block';
            e.preventDefault();
        }
    })

    contactNameField.addEventListener('keyup', () => {
        if (contactNameField.value != "") {
            contactNameField.nextElementSibling.style.display = 'none';
        }
        if (/[^a-z]/ig.test(contactNameField.value)) {
            contactNameField.nextElementSibling.nextElementSibling.style.display = 'block';
        }else {
            contactNameField.nextElementSibling.nextElementSibling.style.display = 'none';
        }
    })
    contactEmailField.addEventListener('keyup', () => {
        if (contactEmailField.value != "") {
            contactEmailField.nextElementSibling.style.display = 'none';
        }
    })
    contactEmailField.addEventListener('blur', () => {
        if (contactEmailField.value.match(/@\w+.\w+/ig) == null) {
            contactEmailField.nextElementSibling.nextElementSibling.style.display = 'block';
        }else {
            contactEmailField.nextElementSibling.nextElementSibling.style.display = 'none';
        }
    }, true)
    contactMsgField.addEventListener('keyup', () => {
        if (contactMsgField.value != "") {
            contactMsgField.nextElementSibling.style.display = 'none';
        }
    })

    // ------------------------Set copyrights year-------------------------
    let copyrightYear = document.querySelector('footer .bottom-bar .getyear');
    copyrightYear.textContent = new Date().getFullYear();
});