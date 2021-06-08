var { crime_location,  death_cause, murder_scene_cards, evidence_cards, means_cards } = require("./cards.js")

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
let current_scene_cards_index = 0;

//const ROLES_INDIVIDUAL = ["Forensic Scientist", "Murderer", "Accomplice", "Witness"]
const ROLES_INDIVIDUAL = ["Forensic Scientist", "Murderer"]
const ROLE_NORMAL = "Investigator"

var locationCardIndex = -1
var gameState = 0

function shuffleFisherYates(array) {
    let i = array.length;
    while (i--) {
      const ri = Math.floor(Math.random() * (i + 1));
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
}

function assignRoles(array) {
    n=ROLES_INDIVIDUAL.length
    if(n>array.length){
        throw new RangeError("getRandom: more elements taken than available");
    }
    array = shuffleFisherYates(array);
    while (n--) {
        array[n].role = ROLES_INDIVIDUAL[n];
    }
    return array;
}

function assignCards(users){
    evidence_cards = shuffleFisherYates(evidence_cards);
    means_cards = shuffleFisherYates(means_cards)
    no_means_cards = 4; 
    no_evidence_cards = 4;
    let no_users = users.length;
    user_cards = []
    for (var i = 0; i < no_users; i++) {
        user_cards.push({
            userID: users[i].userID,
            username: users[i].username,
            user_means_cards: means_cards.slice(no_means_cards*i, no_means_cards*(i+1)),
            user_evidence_cards: evidence_cards.slice(no_means_cards*i, no_means_cards*(i+1)),
        });

    }
    return user_cards;
}

function getSceneCards(){
    if(current_scene_cards_index==0){
        murder_scene_cards = shuffleFisherYates(murder_scene_cards);
        current_scene_cards = murder_scene_cards.slice(0,3);
        current_scene_cards_index = 3;
    }

    return current_scene_cards;

}


//The 'connection' is a reserved event name in socket.io
//For whenever a connection is established between the server and a client
io.on('connection', (socket) => {
	
    //Displaying a message on the terminal
    console.log('a user connected');


    socket.on('add user', (username) => {
        // we store the username in the socket session for this client
        socket.username = username;
        ++numUsers;
        addedUser = true;

        console.log(username + ' connected');


        socket.emit('login', {
            numUsers: numUsers
        });
        // echo globally (all clients) that a person has connected
        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers: numUsers
        });


        users = [];
        for (let [id, socket] of io.of("/").sockets) {
            users.push({
              userID: id,
              username: socket.username,
              role: ROLE_NORMAL,
            });
        }
        socket.emit("users", users);


    });




    socket.on('startGameMsg', data => {
        if(numUsers>6 || numUsers<3 ){
            return;
        }

        console.log(data);
        users = assignRoles(users);
        io.emit('users', users);
    });

    socket.on('setLocationCard', locationCardNo => {
        locationCardIndex = locationCardNo;
        scene_cards = getSceneCards()
        io.emit('initial_scene_cards' , {cl:crime_location[locationCardIndex], dc:death_cause, sc:scene_cards})
        cards = assignCards(users);
        io.emit('users_cards', cards);
        io.emit('startGametoClient', users);
    });




    /*
    //Sending a message to the client
    socket.emit('serverToClient', "Hello, client!");
    //Receiving a message from the client and putting it on the terminal
    socket.on('clientToServer', data => {
        console.log(data);
    })
    //When the client sends a message via the 'clientToClient' event
    //The server forwards it to all the other clients that are connected
    socket.on('clientToClient', data => {
        socket.broadcast.emit('serverToClient', data);
    })
    */



    // when the user disconnects.. perform this
    socket.on('disconnect', () => {
        if (numUsers) {
            --numUsers;

            // echo globally that this client has left
            console.log(socket.username + ' disconnected');

            socket.broadcast.emit('user left', {
            username: socket.username,
            numUsers: numUsers
            });
        }   
    });



    
});