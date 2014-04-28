var getUserData = function(username) {
  $.get( "https://api.github.com/users/" + username + "/repos", function(data) {
    $('#languages').empty();
    var languages = {}
    data.forEach(function(repo) {
      if (languages[repo.language]) {
        languages[repo.language] = languages[repo.language] + 1
      } else {
        languages[repo.language] = 1
      }
    });
    var arr = Object.keys(languages).map(function ( key ) { 
      return languages[key]; 
    });
    var max = Math.max.apply(null, arr);
    Object.prototype.getKeyByValue = function(value) {
    for( var prop in this ) {
      if( this.hasOwnProperty( prop ) ) {
        if( this[ prop ] === value )
          return prop;
        }
      }
    }
    var mostUsed = languages.getKeyByValue( max );
    $('#languages').append("<h2>Hi <span>" + username + "</span>, your most used language is <span>" + mostUsed + "</span>.</h2>");
  });
}

$(document).ready(function(){
  $(document).on('keypress', '#username', function(e){
    if (e.which == 13) {
      var username = $(this).val();
      $('#username').val("");
      getUserData(username);
    }
  })
});