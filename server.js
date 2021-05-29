const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const server = app.listen(port)
const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:5500",
    },
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
    console.log('express connection');
});

app.use('/client', express.static(__dirname + '/client'));

//TODO: make this a mapping for rooms later
let numUsers = 0;

const ROLES_INDIVIDUAL = ["Forensic Scientist", "Murderer", "Accomplice", "Witness"]
const ROLE_NORMAL = "Investigator"

var gameState = 0

function shuffleFisherYates(array) {
    let i = array.length;

    if (n > i)
        throw new RangeError("getRandom: more elements taken than available");


    while (i--) {
      const ri = Math.floor(Math.random() * (i + 1));
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
}

function assignRoles(array) {
    //shuffleFisherYates
    array = shuffleFisherYates(array);
    while (n--) {
        array[n].role = ROLES_INDIVIDUAL[n];
    }
    return array;
}



