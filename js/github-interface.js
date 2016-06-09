var Github = require('./../js/github.js').GitHub;

var displayRepoInfo = function(repoName, repoDescription, dateCreated) {
  $('#repoNameAndDescription').append(
    "<div class="panel panel-default">" +
      "<div class="panel-heading" >" +
        "<h3 class="panel-title">" + repoName + "<br>" + moment(dateCreated).format('dddd, MMMM Do YYYY, h:mm:ss a') +
        "</h3>" +
      "</div>" +
      "<div class="panel-body">" +
        repoDescription +
      "</div>" +
    "</div>");
};



var displayGeneralInfo = function(username, acct_creation, full_name, avatar_url, email, followers, public_repos, repos_url) {
  $('#userNameAndDescription').html(username + "<br>" + acct_creation + "<br>" + full_name + "<br>" + avatar_url + "<br>" + email + "<br>" + followers + "<br>" + public_repos + "<br>" + repos_url);
};
//repo_url?

var displayErrorMessage = function(ghUsername) {
  $('#userNameAndDescription').text("Username " + ghUsername + " could not be found. Please check spelling and try looking up again");
};



$(document).ready(function() {
var currentGithubObject = new Github();
var currentGithubObject2 = new Github();
//used click vs submit so page won't refresh
  $('#ghUsernameClick').click(function() {
    var ghUsername = $('#ghUsernameInput').val();
    $('#github-user').text(ghUsername).show();
    $('#ghUsernameInput').val("");    currentGithubObject.getGeneralUserInfo(ghUsername, displayGeneralInfo, displayErrorMessage);
    currentGithubObject2.getRepoInfo(ghUsername, displayRepoInfo, displayErrorMessage);
  });

});
