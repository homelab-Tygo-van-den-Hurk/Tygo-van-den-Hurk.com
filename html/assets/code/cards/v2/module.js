/**
 * Prints a list of {@code Cards} into the a {@code div} with the id {@code cards}.
 * 
 * @pre {@code
 *   TODO write the Pre-Condition...
 * }
 * @param {Cards[]} cards a list of cards to print in the document
 * @post {@code
 *   TODO write the Post-Condition...
 * }
 */
export function printCards(cards) {
    const functionName = "printCards()"

    /* Checking Pre-Conditions */ {
        for (const card of cards) {

            if (!(card instanceof Card)) {
                throw new Error(functionName + ".pre violated, " +
                    "an object was provided that wasn\'t a card. " +
                    "Object was of type \"" + (typeof card) + "\"."
                );
            }
            
            /* Checking the Card-Title */ {
                if (!(typeof card.title === "String")) {
                    throw new Error(functionName + ".pre violated, " +
                        "card.title was not of type String. This is not allowed."
                    );
                }
                if (card.title == null) {
                    throw new Error(functionName + ".pre violated, " +
                        "card.title was null. This is not allowed."
                    );
                }
                if (card.title === "") {
                    throw new Error(functionName + ".pre violated, " +
                        "card.title is an empty String. This is not allowed."
                    );
                }
            }

            /* Checking the Card-text */ {
                if (!(typeof card.text === "String")) {
                    throw new Error(functionName + ".pre violated, " +
                        "card.text was not of type String. This is not allowed."
                    );
                }
                if (card.text == null) {
                    throw new Error(functionName + ".pre violated, " +
                        "card.text was null. This is not allowed."
                    );
                }
                if (card.text === "") {
                    throw new Error(functionName + ".pre violated, " +
                        "card.text is an empty String. This is not allowed."
                    );
                }
            }
            
            /* Checking the Card-imagePath */ {
                if (!(typeof card.imagePath === "String")) {
                    throw new Error(functionName + ".pre violated, " +
                        "card.imagePath was not of type String. This is not allowed."
                    );
                }
                if (card.imagePath == null) {
                    throw new Error(functionName + ".pre violated, " +
                        "card.imagePath was null. This is not allowed."
                    );
                }
                if (card.imagePath === "") {
                    throw new Error(functionName + ".pre violated, " +
                        "card.imagePath is an empty String. This is not allowed."
                    );
                }
            }
            
            /* Checking the Card-imageAlt */ {
                if (!(typeof card.imageAlt === "String")) {
                    throw new Error(functionName + ".pre violated, " +
                        "card.imageAlt was not of type String. This is not allowed."
                    );
                }
                if (card.imageAlt == null) {
                    throw new Error(functionName + ".pre violated, " +
                        "card.imageAlt was null. This is not allowed."
                    );
                }
                if (card.imageAlt === "") {
                    throw new Error(functionName + ".pre violated, " +
                        "card.imageAlt is an empty String. This is not allowed."
                    );
                }
            }
        }
    }

    /* Processing Cards */ {
        for (const card of cards) {
            document.write( // Copy from contents.html until we find a way to fetch this instead.
            `
            <p> A card was printed here </p>
            `);
        }
    }
}

/**
 * Creates a new Card object.
 * 
 * @pre {@code 
 *   typeof title === "String" && !(title === "")
 *   typeof text === "String" && !(text === "")
 *   typeof imagePath === "String" && !(imagePath === "")
 *   typeof imageAlt === "String" && !(imageAlt === "")
 * }
 * @param {String} title The title the card will have.
 * @param {String} text The text in the card
 * @param {String} imagePath The path to the image file to be shown in the card.
 * @param {String} imageAlt The description of the image.
 * @returns a new Card object.
 * @post {@code 
 *   \result.title === title &&
 *   \result.text === text &&
 *   \result.imagePath === imagePath
 *   \result.imageAlt === imageAlt &&
 * }
 */
export function Card(title, text, imagePath, imageAlt) {
    /* Checking Pre-Conditions */ {

        if (!(typeof title === "String")) {throw new Error;}
        if (title === "") {throw new Error;}

        if (!(typeof text === "String")) {throw new Error;}
        if (text === "String") {throw new Error;}
        
        if (!(typeof imagePath === "String")) {throw new Error;}
        if (typeof imagePath === "") {throw new Error;}
        
        if (!(typeof imageAlt === "String")) {throw new Error;}
        if (imageAlt === "") {throw new Error;}
    }

    /* Creating a Card*/ {
        return {
            title: title || "Card Title",
            text: text || `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Officia sapiente, illo nobis deserunt ipsa perspiciatis qui ea, suscipit 
                ipsum tempore nihil illum velit earum? Quae ducimus totam velit.`,
            imagePath: imagePath || "/assets/images/paterns/Inn.svg",
            imageAlt: imageAlt || "no discription was provided"
        };
    }
}