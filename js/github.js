var apiKey = require('./../.env').apiKey;

exports.Github = function(){
}

exports.Github.prototype.getRepos = function(nameFunction, descriptionFunction){
  $.get('https://api.github.com/users/LATAEVIA?access_token=' + apiKey).then(function(response){
    console.log(response);
    nameFunction("LATAEVIA", response.main.name);
    descriptionFunction("LATAEVIA", response.main.description);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
//
// var apiKey = require('./../.env').apiKey;
//
// exports.Weather = function(){
// }
//
//
// exports.Weather.prototype.getWeather = function(city, displayFunction) {
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
//     debugger;
//
//     displayFunction(city, response.main.humidity);
//   }).fail(function(error) {
//     $('.showWeather').text(error.responseJSON.message);
//   });
// }
// ----------
// var Weather = require('./../js/weather.js').Weather;
//
// var displayHumidity = function(city, humidityData) {
//   $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
// }
//
// $(document).ready(function() {
//   var currentWeatherObject = new Weather();
//   $('#weatherLocation').click(function() {
//     var city = $('#location').val();
//     $('#location').val("");
//     currentWeatherObject.getWeather(city, displayHumidity);
//   });
// });
// exports.apiKey = "";
