var apiKey = require('./../.env').apiKey;

exports.GitHub = function() {
};

exports.GitHub.prototype.getGeneralUserInfo = function(){
  $.get('https://api.github.com/users/lataevia?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
