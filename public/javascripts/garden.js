/*
*
*/
let seedlingIcon = "🌱";
let plantIcon = "🌿";
let sunIcon = "☀️";
let moonIcon = "🌙";

let date = new Date();
let time = date.getHours();

var day;
var night;

if(time < 21 && time > 5) {
  day = true;
  night = false;
} else {
  day = false;
  night = true;
}

/*
*
*/
$(document).ready(function() {
  var clock = $("#clock");
  var sky = $("#sky");
  var land = $("#land");
  var almanac = $("#almanac");

  almanac.css("visibility", "hidden");

  function updateFields() {
    //new plant Object
    $("#plot5").html(seedlingIcon);
  }

  function updateLand() {
    if(day) {
      land.css("background-color", "#512033");
      land.css("color", "#000");
    } else if (night) {
      land.css("background-color", "#313033");
      land.css("color", "#fff");
    }
  }

  function updateSky() {
    if(day) {
      sky.css("background-color", "#fff");
      sky.css("color", "#000");
    } else if (night) {
      sky.css("background-color", "#000");
      sky.css("color", "#fff");
    }
  }

  function updateClock() {
    if(day) {
      clock.html(sunIcon);
    } else if (night) {
      clock.html(moonIcon);
    }
  }

/*
*
*/
  updateClock();
  updateSky();

  updateLand();
  updateFields();
});
