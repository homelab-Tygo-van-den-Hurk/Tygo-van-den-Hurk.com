const contactMeSectionID = "contact-me-section";
const hideClass = "hidden";
const notScrollableClass = "not-scrollable";

/**
 * Toggles the visibility of the contact me section, 
 * and toggles the scrolability of the body.
 */
export function showContactMeForm() {
    const contactMeForm = document.getElementById(contactMeSectionID);
    contactMeForm.classList.toggle(hideClass);
    document.body.classList.toggle(notScrollableClass);
}
