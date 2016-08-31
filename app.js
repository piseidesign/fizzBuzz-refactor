$(document).ready(function () {
  $(document).keydown(function(e){
    // Take the value of the input
    var numInput = $("#numInput").val();
    // Select all p element to clear for new input
    var clearAll = $("main p");

    // Same as e.keyCode == 13(enter)
    if (e.which == 13) {
      // Prevent from initial input clearing
      e.preventDefault();
      // Clear for new input
      clearAll.remove();
      // All Conditions runs only when enter key is press
      for (i = 1; i <= numInput; i++) {
        if (i%3 == 0 && i%5 == 0) {
          insertText("FizzBuzz");
        } else if (i%3 == 0){
          insertText("Fizz");
        } else if (i%5 == 0) {
          insertText("Buzz");
        } else {
          insertText(i);
        }
      }
    }
  })
});

// Set for callback
function insertText(text) {
  $('main').append("<p>" + text + "</p>");
}
