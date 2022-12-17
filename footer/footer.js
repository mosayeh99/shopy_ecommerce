window.addEventListener('load', () => {
    let shopyFooter = `
    <section class="shopy-footer-section">
            <div class="footer-section mycontainer">
                <div class="about-section">
                    <img src="../assets/images/logo-white.png" alt="shopy">
                    <div class="shopy-about-address">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="10" r="3" />
                            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                        </svg>
                        <span>5TH Settlement, New Cairo, Egypt</span>
                    </div>
                    <div class="shopy-about-email">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                            <polyline points="3 7 12 13 21 7"></polyline>
                        </svg>
                        <span>service@shopy.com</span>
                    </div>
                    <div class="shopy-about-phone">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        </svg>
                        <span>+20 111 234 5678</span>
                    </div>
                </div>
                <form action="">
                    <div class="contact-section">
                        <h6>Contact with us</h6>
                        <div class="name-row">
                            <label>Name</label>
                            <input type="text" name="userName">
                        </div>
                        <div class="email-row">
                            <label>Email</label>
                            <input type="email" name="email">
                        </div>
                        <div class="msg-row">
                            <label>Message</label>
                            <textarea name="message" rows="1"></textarea>
                        </div>
                        <input type="submit" value="Send">
                    </div>
                </form>
                <div class="location-section">
                    <h6>Location</h6>
                    <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=256&amp;hl=en&amp;q=5th settlement new cairo egypt&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://mcpedls.com/">Minecraft Download</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:256px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:256px;}.gmap_iframe {height:256px!important;}</style></div>
                </div>
            </div>
        </section>
        <div class="bottom-bar">
            <p>Copyright &copy; <span class="getyear">2022</span> shopy All Rights Reserved</p>
        </div>
    `;
    document.querySelector('footer').innerHTML = shopyFooter;
});

