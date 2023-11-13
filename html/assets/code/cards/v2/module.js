// Example
// const exampleCardArrayJSON = [
//     {
//       title: "Card 1 Title",
//       message: "Card 1 Message",
//       location: "Card 1 Location"
//     },
//     {
//       title: "Card 2 Title",
//       message: "Card 2 Message",
//       location: "Card 2 Location"
//     },
//     {
//       title: "Card 3 Title",
//       message: "Card 3 Message",
//       location: "Card 3 Location"
//     }
// ];

export function cardFactory(cardArrayJSON) {
    let cards = [];
    cardArrayJSON.forEach(card => {
        console.log(card.title, card.message, card.location);
    });
}

export function documentPrintCardsFrom(cardArrayJSON) {

}
