/**
 * A function that toggles the visibility of the contact me section, and toggles the scrolability of the body.
 */
export function showContactMeForm() {
    const contactMeForm = document.getElementById("contact-me-section");
    contactMeForm.classList.toggle("hidden");
    document.body.classList.toggle("not-scrollable");
}