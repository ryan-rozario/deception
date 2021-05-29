
//Establishing a connection with the server on port 5500y
const socket = io('http://localhost:3000');

//Grabbing the button element by the ID
const startBtn = document.getElementById('startGame');
const loginBtn = document.getElementById('login');

var userName = ""
var role = "Investigator"

var gameState = 0; 

/*
//Callback function fires on the event called 'serverToClient'
socket.on('serverToClient', (data) => {
    alert(data);
})

//Client sends a message at the moment it got connected with the server
socket.emit('clientToServer', "Hello, server!");
*/


socket.on('startGametoClient', (player_data) => {
    gameState = 1
    console.log(player_data)
})

socket.on("users", (users) => {
    users.forEach((user) => {
      user.self = user.userID === socket.id;
    });
    // put the current user first, and then sort by username
    this.users = users.sort((a, b) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.username < b.username) return -1;
      return a.username > b.username ? 1 : 0;
    });
    role = users[0].role
    console.log(users)
});



//Event listener on the button element: sends a message to the server when clicked
startBtn.addEventListener('click', () => {
    socket.emit('startGameMsg', "The Game has started");
})

loginBtn.addEventListener('click', () => {
    userName = document.getElementById('username').value
    if(userName){
        socket.emit('add user', userName);
        document.getElementById("login-container").remove();
    }
})