var Github = require('./../js/github.js').Github;

var displayRepos = function(nameData, descriptionData) {
  $('#repoNameAndDescription').text(nameData + "<br>" + descriptionData);
}

$(document).ready(function() {
  var currentGithubObject = new Github();
    currentGithubObject.getRepos();
});
// 469b240047d186bc5eeedf7bbaa6e113e2ca2fc9
