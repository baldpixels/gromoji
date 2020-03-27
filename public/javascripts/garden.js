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
  var plot = $(".plot");
  var almanac = $("#almanac");
  var catalog = $("#catalog")

  function hideCatalog() {
    catalog.css("visibility", "hidden");
  }

  function showCatalog() {
    catalog.css("visibility", "visible");
  }

  function updateFields() {
    //new plant Object
    for(i=1; i<10; i++) {
      $("#plot" + i).html(seedlingIcon);
    }
  }

  function updateLand() {
    if(day) {
      land.css("background-color", "#644e25");
      plot.css("background-color", "#47381a");
      land.css("color", "#000");
    } else if (night) {
      land.css("background-color", "#2b2119");
      plot.css("background-color", "#1c160b");
      land.css("color", "#fff");
    }
  }

  function updateSky() {
    if(day) {
      sky.css("background-color", "#5cb8e1");
      sky.css("color", "#000");
    } else if (night) {
      sky.css("background-color", "#071b24");
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
