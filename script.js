var getUserData = function(username) {
  $.get( "https://api.github.com/users/" + username + "/repos", function( data ) {
    // debugger
    data.forEach(function(repo) {
      $('#languages').append("<li>" + repo.language + "</li>");
    });
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