
//Establishing a connection with the server on port 5500y
const socket = io('http://localhost:3000');

//Grabbing the button element by the ID
const startBtn = document.getElementById('startGame');
const loginBtn = document.getElementById('login');

var userName = ""
var role = "Investigator";

var gameState = 0;


//send the location card number to server
function selectLocationCard(cardNum){
  console.log(cardNum);
  socket.emit('setLocationCard', cardNum);
}

/*
//Callback function fires on the event called 'serverToClient'
socket.on('serverToClient', (data) => {
    alert(data);
})

//Client sends a message at the moment it got connected with the server
socket.emit('clientToServer', "Hello, server!");
*/

//start the game message from the server to client
socket.on('startGametoClient', (player_data) => {
    gameState = 1;
    console.log(player_data);
})

//recieves user information from the server
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
    if(role=="Forensic Scientist"){
      document.getElementById('location-select-container').classList.remove('d-none');
    }
    document.getElementById("role").innerHTML=role;
    console.log(users)
});


socket.on("users_cards", (users_cards) => {
    users_cards.forEach((user) => {
      user.self = user.userID === socket.id;
    });
    // put the current user first, and then sort by username
    this.users_cards = users_cards.sort((a, b) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.username < b.username) return -1;
      return a.username > b.username ? 1 : 0;
    });
    console.log(users_cards)
});


socket.on("initial_scene_cards", (data) => {

  document.getElementById('location-select-container').classList.add('d-none');
  document.getElementById('scene-cards').classList.remove('d-none');



  crime_location = data.cl
  death_cause = data.dc
  scene_cards = data.sc
  console.log((crime_location, death_cause, scene_cards));

  listElement = document.getElementById('crime-location-list');
  listElement.innerHTML=""
  //listElement.innerHTML = "<h3>Location of Crime</h3>"
  for(i = 0; i < crime_location.length; ++i) {
    listItem = document.createElement('p');
    listItem.classList.add("card-text")
    listItem.innerHTML =crime_location[i];
    listElement.appendChild(listItem);
  }

  listElement = document.getElementById('death-cause-list');
  listElement.innerHTML=""
  //listElement.innerHTML = "<h3>Cause of Death</h3>"
  for(i = 0; i < death_cause.length; ++i) {
    listItem = document.createElement('p');
    listItem.classList.add("card-text")
    listItem.innerHTML =death_cause[i];
    listElement.appendChild(listItem);
  }

  current_scene_cards = scene_cards[0];
  document.getElementById('scene-card-list-1-title').innerHTML = Object.keys(current_scene_cards)[0];
  listElement = document.getElementById('scene-card-list-1');
  listElement.innerHTML=""
  //listElement.innerHTML = "<h3>"+Object.keys(current_scene_cards)[0]+"</h3>"
  for(i = 0; i < Object.values(current_scene_cards)[0].length; ++i) {
    listItem = document.createElement('p');
    listItem.classList.add("card-text")
    listItem.innerHTML =Object.values(current_scene_cards)[0][i];
    listElement.appendChild(listItem);
  }

  current_scene_cards = scene_cards[1];
  document.getElementById('scene-card-list-2-title').innerHTML = Object.keys(current_scene_cards)[0];
  listElement = document.getElementById('scene-card-list-2');
  listElement.innerHTML=""
  //listElement.innerHTML = "<h3>"+Object.keys(current_scene_cards)[0]+"</h3>"
  for(i = 0; i < Object.values(current_scene_cards)[0].length; ++i) {
    listItem = document.createElement('p');
    listItem.classList.add("card-text")
    listItem.innerHTML =Object.values(current_scene_cards)[0][i];
    listElement.appendChild(listItem);
  }

  current_scene_cards = scene_cards[2];
  document.getElementById('scene-card-list-3-title').innerHTML = Object.keys(current_scene_cards)[0];
  listElement = document.getElementById('scene-card-list-3');
  listElement.innerHTML=""
  //listElement.innerHTML = "<h3>"+Object.keys(current_scene_cards)[0]+"</h3>"
  for(i = 0; i < Object.values(current_scene_cards)[0].length; ++i) {
    listItem = document.createElement('p');
    listItem.classList.add("card-text")
    listItem.innerHTML = Object.values(current_scene_cards)[0][i];
    listElement.appendChild(listItem);
  }


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