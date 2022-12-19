window.addEventListener('load', () => {
    // -----------------------Footer plus icon to show & hide content-------------------------
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('footer-plus-icon')) {
            e.target.lastElementChild.classList.toggle('opened');
            e.target.parentElement.nextElementSibling.classList.toggle('active');
            if (e.target.classList.contains('contact-plus-icon')) {
                setTimeout(() => {
                    document.querySelector('footer .contact-filed').focus();
                }, 100);
            }
        }
    })

    // ------------------------Contact form input--------------------------
    document.addEventListener('focus', (e) => {
        if (e.target.classList.contains('contact-filed')) {
            e.target.previousElementSibling.style.cssText = 'top:0px; color:white';
        }
    }, true);

    document.addEventListener('blur', (e) => {
        if (e.target.classList.contains('contact-filed')) {
            if (e.target.value == "") {
                e.target.previousElementSibling.style.cssText = 'top:20px; color:#777';
            }
        }
    }, true);

    // ------------------------Set copyrights year-------------------------
    let copyrightYear = document.querySelector('footer .bottom-bar .getyear');
    copyrightYear.textContent = new Date().getFullYear();
});