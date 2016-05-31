var Github = require('./../js/github.js').GitHub;

$(document).ready(function() {
var currentGithubObject = new Github();
//used click vs submit so page won't refresh
  $('#ghUsernameSubmit').click(function() {
    var ghUsername = $('#ghUsernameInput').val();
    $('#ghUsernameInput').val("");
    $('#github-user').text(ghUsername);
    currentGithubObject.getGeneralUserInfo(ghUsername);
  });

});
