var Github = require('./../js/github.js').GitHub;

$(document).ready(function() {
var currentGithubObject = new Github();
//used click vs submit so page won't refresh
  $('#ghUsernameClick').click(function() {
    
    var ghUsername = $('#ghUsernameInput').val();
    $('#github-user').text(ghUsername);
    debugger;
    $('#ghUsernameInput').val("");
    debugger;
    currentGithubObject.getGeneralUserInfo(ghUsername);
  });

});
//
// var Github = require('./../js/github.js').GitHub;
//
// var currentGithubObject = new Github();
// currentGithubObject.getGeneralUserInfo();
