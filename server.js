// server.js
// this is where our magic begins

// using express and node to host our server on glitch
var express = require('express');
//var mongo = require('mongodb').MongoClient;
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// This line serves our static resources
app.use(express.static('public'));

// Main page routing
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


//var numConnections = 0;
var rooms = {}; //Stores data on all
var number = 0; //Tracks the lowest numbered room that was never occupied
var available = []; //Tracks available rooms that were once occupied
// Set up the socket functionality & room system
io.on('connection', function(socket){
  //numConnections += 1;
  //console.log('a user connected making the total: ' + numConnections);
  
  //Modify instantly when connected
  socket.emit("update-rooms", rooms);
  
  //Modify rooms when a user disconnects
  //Checks if the user is already in a room and behaves accordingly
  socket.on("disconnect", function() {
    //numConnections -= 1;
    if(socket.hasOwnProperty("room")) {
       socket.leave(socket.room);
       rooms[socket.room].occupants -= 1;
      if(rooms[socket.room].occupants == 0) {
        delete rooms[socket.room];
        if(available.length == 0) {
          available.push(Number(socket.room));
        } else {
          for(var i = 0; i < available.length; i++) {
            if(Number(socket.room) < available[i]) {
              available.splice(i,0,Number(socket.room));
              break;
            }
            else if(i == available.length-1) {
              available.push(Number(socket.room));
              break;
            }
          }
        }
      }
      delete socket.room;
      io.emit("update-rooms", rooms);
    }
    //console.log('a user disconnected making the total: ' + numConnections);
  });
    
  socket.on("new-room", function() {
    if(!socket.hasOwnProperty("room")){
      if(available.length == 0) {
        rooms[number] = {occupants: 1};
        socket.room = number.toString();
        socket.join(number.toString());
        number += 1;
        console.log("Joined room " + socket.room);
        io.emit("update-rooms", rooms);
      } else {
        rooms[available[0].toString()] = {occupants: 1};
        socket.room = available[0].toString();
        socket.join(available[0].toString());
        available = available.slice(1);
        console.log("Joined room " + socket.room);
        io.emit("update-rooms", rooms);
      }
    }
  }); 
});

//Set-up the server to listen to our port: 3000
http.listen(process.env.PORT)
console.log("Listening on port: " + process.env.PORT);