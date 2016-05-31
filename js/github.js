var apiKey = require('./../.env').apiKey;

exports.GitHub = function() {
};

exports.GitHub.prototype.getGeneralUserInfo = function(ghUsername, displayGeneralInfo, displayErrorMessage){
  $.get('https://api.github.com/users/' + ghUsername + '?access_token=' + apiKey).then(function(response) {
    displayGitHubInfo(ghusername, response.created_at, response.name, response.avatar_url, response.email, response.followers, response.public_repos, response.repos_url.full_name);
  }).fail(function(error){
    displayErrorMessage(ghUsername);
    console.log(error.responseJSON.message);
  });
};


// exports.GitHub.prototype.getGeneralUserInfo = function(ghUsername){
//   $.get('https://api.github.com/users/' + ghUsername + '?access_token=' + apiKey).then(function(response) {
//     console.log(response);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };
//////////////////
// var apiKey = require('./../.env').apiKey;
//
// exports.GitHub = function() {
// };
//
// exports.GitHub.prototype.getGeneralUserInfo = function(){
//   $.get('https://api.github.com/users/lataevia?access_token=' + apiKey).then(function(response){
//     console.log(response);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };
