window.onload = function() {// this makes it so that the java scribt only loads after the element have loaded.

    console.log("Window Loaded");

    /*
     *
     * - - - - - this section is for the contact me form  - - - - - 
     *                 ( to let it open and close )
     * 
     */
    //
    /*
     * this section is about opening the contact form
     */

    //things that we will influence with the action listeners
    const contact_me__form = document.getElementById("contact_me__section");
    const body = document.getElementById("body");

    // buttons:
    const contact_me_button_0 = document.getElementById("title_button");
    const contact_me_button_1 = document.getElementById("Intressed__button");

    // event listeners:
    contact_me_button_0.addEventListener("click", () => {

        // lets the user know that the button click was registerd
        console.log("contact form button pushed:         confirmed;");

        show_contact_me_form();

        console.log("\n");
    });
    contact_me_button_1.addEventListener("click", () => {

        // lets the user know that the button click was registerd
        console.log("contact form button pushed:         confirmed;");

        show_contact_me_form();

        console.log("\n");
    });

    // show contact me form function:
    function show_contact_me_form() {

        // lets the user know that the function will exicute
        console.log("now executing function:              show_contact_me_form();");

        // shows form, hides scrolbar in body
        contact_me__form.classList.toggle("show_and_hide");
        body.classList.toggle("body__scrolbar");


        // lets the user know that the function has been executed without errors
        console.log("done executing function:             show_contact_me_form();");
    }


    /*
     * this section is about closing the contact form
     */

    // buttons:
    const contact_me_button_close_0 = document.getElementById("contact_me__close_button");
    const contact_me_button_submit_0 = document.getElementById("contact_me__form__submit_button_id");

    // event listeners:
    contact_me_button_close_0.addEventListener("click", () => {

        // lets the user know that the button click was registerd
        console.log("contact form close button pushed:   confirmed;");

        hide_contact_me_form();

        console.log("\n");
    });

    // show contact me form function:
    function hide_contact_me_form() {
        
        // lets the user know that the function will exicute
        console.log("now executing function:              hide_contact_me_form();");

        // hides form, shows scrolbar in body
        contact_me__form.classList.toggle("show_and_hide");
        body.classList.toggle("body__scrolbar");

        // lets the user know that the function has been executed without errors
        console.log("done executing function:             hide_contact_me_form();");
    }

    /*
     *
     * - - - - - this section is for the contact me form  - - - - - 
     *                   ( to let it submit data )
     * 
     */

    /*
     * this section is about posting the contact form
     */

    //things that we will need for the posting of data
    const form = document.getElementById("form");
    const log = document.getElementById("log");
    const form_submit_button = document.getElementById("form_submit");

    // event listeners:
    form.addEventListener("submit", () => {

        // lets the user know that the button click was registerd
        console.log("contact form submit button pushed:  confirmed;");

        post_contact_me_form();
        hide_contact_me_form();

        console.log("\n");
    });/*
    form_submit_button.addEventListener("click", () => {

        // lets the user know that the button click was registerd
        console.log("contact form submit button pushed:  confirmed   (debug log);");
        console.log("\n");
    });*/

    const post_contact_me_form = function(event){

        // lets the user know that the function will exicute
        console.log("now executing function:              post_contact_me_form();");

        event.preventDefault();

        // submits data        
        let data = {
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }

        fetch("https://www.tygo-van-den-hurk.com/contact-form", {
            method: PUT,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log("succuess", data)
        })
        .catch((error) => {
            console.log("Error: ", error)
        });


        // lets the user know that the function has been executed
        console.log("done executing function:             post_contact_me_form();");
    }

    // shows on the console that the java script loaded correctly
    console.log("Status loading Java Script:          loaded correctly");
    console.log("\n");
}