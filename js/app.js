//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//Hide spoiler
$(".spoiler span").hide();
//Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");
//When button pressed
$("button").click(function(){
  //Show spoiler next to the button clicked
  $(this).prev().show();
  //Get rid of button
  $(this).remove();
});
