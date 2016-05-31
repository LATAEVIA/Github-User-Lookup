var apiKey = require('./../.env').apiKey;

exports.GitHub = function() {
};

exports.GitHub.prototype.getGeneralUserInfo = function(ghUsername){
  $.get('https://api.github.com/users/' + ghUsername + '?access_token=' + apiKey).then(function(response) {
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
