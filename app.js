require('dotenv').config()
const Trello = require("./main");
var trello = new Trello(process.env.KEY, process.env.TOKEN);
var cardTitle = `Card Nueva ${new Date()}`;

console.log("Ejecutando!");

trello.addCard(cardTitle, "LaunchX Card Description", "IdList",
    function (error, trelloCard) {
        if (error) {
        console.log('Could not add card:', error);
        }
        else {
        console.log('Added card:', trelloCard);
        }
    }
);