export function showContactMeForm() {
    const contactMeForm = document.getElementById("contact-me-section");
    const body = document.getElementById("body");
    contactMeForm.classList.toggle("hidden");
    body.classList.toggle("not-scrollable");
}