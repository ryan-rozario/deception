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

