export const contactMeSectionID = "contact-me-section";
export const hideClass = "hidden";
export const notScrollableClass = "not-scrollable";

/**
 * Toggles the visibility of the contact me section, 
 * and toggles the scrolability of the body.
 */
export function toggleContactMeForm() {
    const contactMeForm = document.getElementById(contactMeSectionID);
    contactMeForm.classList.toggle(hideClass);
    document.body.classList.toggle(notScrollableClass);
}
