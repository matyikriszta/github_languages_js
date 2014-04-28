var getUserData = function(username) {
  $.get( "https://api.github.com/users/" + username + "/repos", function(data) {
    var languages = {}
    data.forEach(function(repo) {
      if (languages[repo.language]) {
        languages[repo.language] = languages[repo.language] + 1
      } else {
        languages[repo.language] = 1
      }
    });
    console.log(languages)
  });
}

$(document).ready(function(){
  $(document).on('keypress', '#username', function(e){
    if (e.which == 13) {
      var username = $(this).val();
      getUserData(username);
    }
  })
});

// $('#languages').append("<li>" + repo.language + "</li>");