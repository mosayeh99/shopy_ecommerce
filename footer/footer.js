window.addEventListener('load', () => {
    // ------------------------Footer plus icon in small screen-------------------------
    let aboutPlusIcon = document.querySelector('footer .about-plus-icon');
    let contactPlusIcon = document.querySelector('footer .contact-plus-icon');
    let locationPlusIcon = document.querySelector('footer .location-plus-icon');
    
    aboutPlusIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        aboutPlusIcon.lastElementChild.classList.toggle('opened');
        aboutPlusIcon.parentElement.nextElementSibling.classList.toggle('active');
    })

    contactPlusIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        contactPlusIcon.lastElementChild.classList.toggle('opened');
        contactPlusIcon.parentElement.nextElementSibling.classList.toggle('active');
    })

    locationPlusIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        locationPlusIcon.lastElementChild.classList.toggle('opened');
        locationPlusIcon.parentElement.nextElementSibling.classList.toggle('active');
    })

    // ------------------------Set copyrights year-------------------------
    let copyrightYear = document.querySelector('footer .bottom-bar .getyear');
    copyrightYear.textContent = new Date().getFullYear();
});