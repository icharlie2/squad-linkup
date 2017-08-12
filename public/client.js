//create socket
var socket = io();

$(document).ready(()=>{
  //Make a new room and store it on server
  $(".make-room").on("click", function(event) {
    socket.emit("new-room");
  });
  
  //Update all rooms
  socket.on("update-rooms", function(rooms){
    //Clear rooms
    $(".room").remove();
    
    //Generate html for all rooms
    for(var number in Object.keys(rooms)) {
      var roomNumber = number;
      var occupants = rooms[number].occupants;
      var update = "<div class='col-xs-8 col-xs-offset-2 room" + " room-" + roomNumber;
      update += "'>Room Number: " + roomNumber + ", Occupants: " + occupants + "</div>";
      $(update).insertBefore(".back-button-3");
    }
  });
});
/*  

var name = document.getElementById('name');
var output = document.getElementById('output');

//Emit events to server
btn.addEventListener('click', function(){
  socket.emit('clicked',{
    uName: name.value
  });
});


//Listen for events
socket.on('respond', function(data){
  output.innerHTML += '<p><strong>' + data.uName + '</strong> ' + 'IS HERE! </p>';
});*/

