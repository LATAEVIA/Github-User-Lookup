var apiKey = require('./../.env').apiKey;

exports.GitHub = function() {
};

exports.GitHub.prototype.getRepoInfo = function(ghUsername, displayRepoInfo, displayErrorMessage){
  $.get('https://api.github.com/users/' + ghUsername + '/repos').then(function(response) {
    for (var i = 0; i < response.length; i += 1) {
      displayRepoInfo(response[i].name, response[i].description, response[i].created_at);
    }
  }).fail(function(error){
    displayErrorMessage(ghUsername);
    console.log(error.responseJSON.message);
  });//customize
};

exports.GitHub.prototype.getGeneralUserInfo = function(ghUsername, displayGeneralInfo, displayErrorMessage){
  $.get('https://api.github.com/users/' + ghUsername + '?access_token=' + apiKey).then(function(response) {
    displayGeneralInfo(ghUsername, response.created_at, response.name, response.avatar_url, response.email, response.followers, response.public_repos);
  }).fail(function(error){
    displayErrorMessage(ghUsername);
    console.log(error.responseJSON.message);
  });
};
