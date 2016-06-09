var Github = require('./../js/github.js').GitHub;

var displayGeneralInfo = function(username, acct_creation, full_name, avatar_url, email, followers, public_repos, repos_url) {
  $('#userNameAndDescription').html(
    "<div>" +
    "<img id='halfsize' src=\"" + avatar_url + "\" >" + "<br>" +
    "Username: " + username + "<br>" +
    "Account Creation: " + moment(acct_creation).format('dddd, MMMM Do YYYY, h:mm:ss a') + "<br>" +
    "Full Name: " + full_name + "<br>" +
    "Number of Followers: " + followers + "<br>" +
    "Number of Public Repos: " + public_repos + "<br>" +
    "</div>" )
};

var displayRepoInfo = function(repoName, repoDescription, dateCreated) {
  $('#repoNameAndDescription').append(
    "<div class='panel panel-default'>" +
      "<div class='panel-heading' >" +
        "<h3 class='panel-title'>" + "Repository Name: " + repoName + "<br>" + "Creation Date: " + moment(dateCreated).format('dddd, MMMM Do YYYY, h:mm:ss a') +
        "</h3>" +
      "</div>" +
      "<div class='panel-body'>" +
        repoDescription +
      "</div>" +
    "</div>");
};

var displayErrorMessage = function(ghUsername) {
  $('#userNameAndDescription').html("<h1>" + "Username " + ghUsername + " could not be found. Please check spelling and try looking up again" + "</h1>" );
};

$(document).ready(function() {
var currentGithubObject = new Github();

  //if user presses enter key
  $('#github-lookup').submit(function(event) {
    event.preventDefault();
    var ghUsername = $('#ghUsernameInput').val();
    $('.github-user').text(ghUsername);
    $('.showOnClick').removeClass('hidden');
    $('#ghUsernameInput').val("");
    currentGithubObject.getRepoInfo(ghUsername, displayRepoInfo, displayErrorMessage);
    currentGithubObject.getGeneralUserInfo(ghUsername, displayGeneralInfo, displayErrorMessage);
  });
  //if user clicks 'Lookup'
  $('#ghUsernameClick').click(function(event) {
    var ghUsername = $('#ghUsernameInput').val();
    $('.github-user').text(ghUsername);
    $('.showOnClick').removeClass('hidden');
    $('#ghUsernameInput').val("");
    currentGithubObject.getRepoInfo(ghUsername, displayRepoInfo, displayErrorMessage);
    currentGithubObject.getGeneralUserInfo(ghUsername, displayGeneralInfo, displayErrorMessage);
  });

});
