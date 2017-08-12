$(document).ready(() => {
  
  //jQuery to navigate through the menu.
  $(".how-to-button").on("click", function(e) {
    $(".btn").css("display", "none");
    $(".how-to-info").css("display", "inline-block");
    $(".back-button-1").css("display", "inline-block");
  });
  
  $(".back-button-1").on("click", function(e) {
    $(".btn").css("display", "none");
    $(".how-to-info").css("display", "none");
    $(".how-to-button").css("display", "inline-block");
    $(".play-button").css("display", "inline-block");
  });
  
  $(".play-button").on("click", function(e) {
    $(".btn").css("display", "none");
    $(".join-room").css("display", "inline-block");
    $(".make-room").css("display", "inline-block");
    $(".back-button-2").css("display", "inline-block");
  });
  
  $(".back-button-2").on("click", function(e) {
    $(".btn").css("display", "none");
    $(".how-to-button").css("display", "inline-block");
    $(".play-button").css("display", "inline-block");
  });
  
  $(".join-room").on("click", function(e) {
    $(".btn").css("display", "none");
    $(".room").css("display", "inline-block");
    $(".back-button-3").css("display", "inline-block");
  });
  
  $(".back-button-3").on("click", function(e) {
    $(".btn").css("display", "none");
    $(".room").css("display", "none");
    $(".join-room").css("display", "inline-block");
    $(".make-room").css("display", "inline-block");
    $(".back-button-2").css("display", "inline-block");
  });
});