// pickRandom = function(){
//   console.log('hi')
//     // Returns a random integer between 0 and 9
//     var random = Math.floor(Math.random() * 10); 
//     console.log('random = ' + random)
// };
// // window.onload = function() {
// // console.log("loaded");

// pickRandom();

// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

var app = express();

var PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
