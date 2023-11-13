const contactMeForm = document.getElementById("contact-me-section");
const body = document.getElementById("body");
function showContactMeForm() {
    contactMeForm.classList.toggle("hidden");
    body.classList.toggle("not-scrollable");
}

export { showContactMeForm };