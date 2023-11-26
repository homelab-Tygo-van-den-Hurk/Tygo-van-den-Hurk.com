/** This is what the HTML elements attribute must be called for it to be found. */
export const fileInclusionAttributeName = "replace-this-element-with-file";
/** The config file must be located in the folder that the document is in. The name must start with this prefix */
export const configurationFileNamePrefix = "config-";
/** The config file must be located in the folder that the document is in. The name must end with this suffix */
export const configurationFileNameSufix = ".conf.json";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Dealing with fetching the configuration-file ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/** Fetches the config file and returns it as a json-object unless an error occured. */
function FetchConfigurationFile(configurationFile) {
    return fetch(configurationFile)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch(error => {
            const errorCode = error.response.status;
            if (errorCode != 404) {
                return textBasedOnErrorCode(errorCode, configurationFile);
            } else { return null; }
        });
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Dealing with fetching the requested content ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/** When a response was given gives the content if it was ok, otherwise throws an error. */
function checkResponse(response) {
    if (! response.ok) {
        throw new Error("Network response was not ok", response);
    }
    return response.text();
}

/** Changes some  */
function manipulateDocumentBasedOnConfig(config) {

    const thereIsReplacingTextSection = (config.replaceInnerHTMLText && Array.isArray(config.replaceInnerHTMLText));
    if (thereIsReplacingTextSection) {
        
        config.replaceInnerHTMLText.forEach( item => {
            
            const elementToTweak = document.getElementById(item.id);
            if (elementToTweak) {
                elementToTweak.innerHTML = item.text;
                elementToTweak.removeAttribute("id");
            }
        });
    }
}

/** Imports the text/HTML into the document and then makes some changes bases on the config file. */
function importContent(element, text, configurationFile) {

    element.replaceWith(text);

    /* Dealing with the configuration file*/ {
        if (configurationFile != null) {
            FetchConfigurationFile()
                .then(manipulateDocumentBasedOnConfig)
                .catch(error => {
                    // element.replaceWith(error)
                    console.error(
                        "Error during fetch operation for a file with configuration contents. " +
                        error
                    );
                });
        }
    }

    includeHTML(); // Recursive call
}

/** 
 * deals with errors that occure during the fetch of the contents of the requested file.
 * 
 * @param {Error} error - the error that occured.
 * @param {HTMLElement} element - the element we were trying to replace.
 * @param {String} requestedFilePath - the path to the file which contents we were trying to get.
 */
function onError(error, element, requestedFilePath) {
    
    console.error(
        "Error during fetch operation for a file with website contents. " + 
        error
    );
    
    const errorCode = error.response.status;
    /* when no specific code can be found give the default response */ {
        const noErrorResponseOrCode = ! (error.response && errorCode);
        if (noErrorResponseOrCode) {
            element.innerHTML = (
                "There was a problem loading \"" + requestedFilePath + "\", " +
                "so unfortunately nothing can be shown.");
            return;
        }
    }
    
    element.innerHTML = textBasedOnErrorCode(errorCode, requestedFilePath);
}

/** 
 * Returns the text that is appropriate for a give response code. 
 * 
 * @returns {String} the message to display
 */
function textBasedOnErrorCode(errorCode, requestedFilePath) {
    var message;
    switch (errorCode) {
        case 204:
            message = (
                "This section was requested from the server, " +
                "the request was succesfull, " +
                "however there was no content to be given back");
            break;
        case 401:
        case 403:
            message = (
                "It appears you don't have access to the content that requested. " +
                "If you've discovered this onto a page please get in touch. ");
            break;
        case 404:
            message = (
                "Unfortunately nothing can be shown as the content to show was not found. " +
                "If you've discovered this onto a page please get in touch. " +
                "The server was looking for \""+requestedFilePath+"\", but couldn\'t find it.");
            break;
        case 500:
            message = (
                "An internal Server Error occured. Please try again at a later moment in time.");
            break;
        default:
            message = (
                "An error with code "+errorCode+" occurred while loading \""+requestedFilePath+"\"." +
                "Sorry for the inconvience. Try again later, or contact me if the problem presists. ");
    }
    return message;
}

/** 
 * for a given file and given element, tries to replace the element with the requested-file's-contents.
 * 
 * @param {HTMLElement} element - the element to replace with the contents.
 * @param {string} requestedFilePath - the path to the file to extract the contents of.
 */
function fetchAndImportContent(element, requestedFilePath) {
    
    const fileName = requestedFilePath.split("/").pop();
    const configurationFile = (
        configurationFileNamePrefix + fileName + configurationFileNameSufix
    );

    // When the file path is located, we can try and load it and place it in the document.
    fetch(requestedFilePath)
        .then(checkResponse)
        .then(text => importContent(element, text, configurationFile))
        .catch(error => onError(error, element, requestedFile));
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~ Main-Function to import the content of files into the document ~~~~~~~~~~~~~~~~~~~~~~~~~//

/**
 * Loads the contents from a file into the document.
 * 
 * How to use this module:
 * write a HTML element with the attribute {@link #fileInclusionAttributeName}.
 * and a path to a file. This function will then go over this 
 */
export function includeHTML() {
    var elements = document.querySelectorAll("[" + fileInclusionAttributeName + "]");
    elements.forEach(function (element) {
        var requestedFilePath = element.getAttribute(fileInclusionAttributeName);
        if (requestedFilePath) { // if a path to a file was given we'll try to import it
            fetchAndImportContent(element, requestedFilePath);
        }
    });
}
