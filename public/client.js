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
    var keyArray = Object.keys(rooms);
    for(var i in keyArray) {
      var roomNumber = Number(keyArray[i]);
      var occupants = rooms[keyArray[i]].occupants;
      var update = "<div class='col-xs-8 col-xs-offset-2 room" + " room-" + roomNumber;
      update += "'>Room Number: " + roomNumber + ", Occupants: " + occupants + "</div>";
      $(update).insertBefore(".back-button-3");
    }
    //If the room-viewer is open, then make the rooms visible
    if($(".back-button-3").css("display") == "block") {
       $(".room").css("display", "inline-block");
       }
  });
});