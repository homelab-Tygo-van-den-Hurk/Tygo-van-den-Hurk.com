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

/**
 * Checks if escape is pressed and the form is not hidden. 
 * If this is the case then we hide it.
 */
document.addEventListener('keydown', (event) => {
    
    const keyPressed = event.key;
    const escapeKey = "Escape";
    if (keyPressed === escapeKey) {

        const contactMeForm = document.getElementById(contactMeSectionID);
        if (! contactMeForm.classList.contains(hideClass)) {
            contactMeForm.classList.add(hideClass);
            document.body.classList.remove(notScrollableClass);
        }
    }
});