var Github = require('./../js/github.js').GitHub;

var displayGeneralInfo = function(username, acct_creation, full_name, avatar_url, email, followers, public_repos, repos_url) {
  $('#userNameAndDescription').html(username + "<br>" + acct_creation + "<br>" + full_name + "<br>" + avatar_url + "<br>" + email + "<br>" + followers + "<br>" + public_repos + "<br>" + repos_url);
};
//repo_url?

var displayErrorMessage = function(ghUsername) {
  $('#userNameAndDescription').text("Username " + ghUsername + " could not be found. Please check spelling and try looking up again");
};

$(document).ready(function() {
var currentGithubObject = new Github();
//used click vs submit so page won't refresh
  $('#ghUsernameClick').click(function() {
    var ghUsername = $('#ghUsernameInput').val();
    $('#github-user').text(ghUsername);
    $('#ghUsernameInput').val("");    currentGithubObject.getGeneralUserInfo(ghUsername, displayGeneralInfo, displayErrorMessage);
  });

});
//
// var Github = require('./../js/github.js').GitHub;
// exports.apiKey = "469b240047d186bc5eeedf7bbaa6e113e2ca2fc9";
// var currentGithubObject = new Github();
// currentGithubObject.getGeneralUserInfo();
