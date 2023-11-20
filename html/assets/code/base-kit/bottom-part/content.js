document.write( // Copy froom contents.html until we find a way to fetch this instead.
`
<style type="text/css" scoped>@import url(/assets/code/base-kit/bottom-part/content.css);</style>
<!-- override the background image of 'bottom-section' for every page-->
<section id="bottom-section">
    <div id="bottom-container">
        <h2 id="bottom-h2">Interessed?</h2>
        <p id="bottom-p">Get in touch with me directly or Sent a DM, Snap or PM by clicking one of the buttons below.</p>
        <button type="button" class="shadow rounded" id="bottom-button">Let&rsquo;s talk!</button>
        <div id="bottom-list-of-socials"><!-- display 5 at a time max is done via css-->
            <a href="https://facebook.com/profile.php?id=100011384536668" id="bottom-list-of-socials-facebook-icon">
                <img alt="facebook icon" src="/assets/images/icons/socials/facebook-white.svg"> <!-- class="dark-mode"> -->
                <!-- <img alt="facebook icon" src="/assets/images/icons/socials/facebook-black.svg" class="light-mode"> -->
            </a>
            <a href="https://www.instagram.com/tygo.van.den.hurk/" id="bottom-list-of-socials-instagram-icon">
                <img alt="instagram icon" src="/assets/images/icons/socials/instagram-white.svg"> <!-- class="dark-mode"> -->
                <!-- <img alt="instagram icon" src="/assets/images/icons/socials/instagram-black.svg" class="light-mode"> -->
            </a>
            <a href="https://t.snapchat.com/fWkBlmdb" id="bottom-list-of-socials-snapchat-icon">
                <img alt="snapchat icon" src="/assets/images/icons/socials/snapchat-white.svg"> <!-- class="dark-mode"> -->
                <!-- <img alt="snapchat icon" src="/assets/images/icons/socials/snapchat-black.svg" class="light-mode"> -->
            </a>
            <a href="https://www.linkedin.com/in/tygo-van-den-hurk" id="bottom-list-of-socials-linkedin-icon">
                <img alt="linkedin icon" src="/assets/images/icons/socials/linkedin-white.svg"> <!-- class="dark-mode"> -->
                <!-- <img alt="linkedin icon" src="/assets/images/icons/socials/linkedin-black.svg" class="light-mode"> -->
            </a>
            <a href="/error-pages/404.html" id="bottom-list-of-socials-whatsapp-icon">
                <img alt="whatsapp icon" src="/assets/images/icons/socials/whatsapp-white.svg"> <!-- class="dark-mode"> -->
                <!-- <img alt="whatsapp icon" src="/assets/images/icons/socials/whatsapp-black.svg" class="light-mode"> -->
            </a>
            <a href="/error-pages/404.html" id="bottom-list-of-socials-email-icon">
                <img alt="email icon" src="/assets/images/icons/socials/email-white.svg"> <!-- class="dark-mode"> -->
                <!-- <img alt="email icon" src="/assets/images/icons/socials/email-black.svg" class="light-mode"> -->
            </a>
        </div>
    </div>
    <script type="module" src="/assets/code/base-kit/contact-form/module.js"></script>
    <script type="module">
        const id = "bottom-button"
        import { showContactMeForm } from '/assets/code/base-kit/contact-form/module.js';
        const button = document.getElementById(id);
        button.addEventListener('click', showContactMeForm);
    </script>
</section>
`);