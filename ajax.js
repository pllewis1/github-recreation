$.getJSON('https://api.github.com/users/pllewis1').done(function(data) {
  console.log(data);
  profileObj = data;
  // profileObj.followers
   $(".F").prepend("<h3>" + profileObj.followers + "</h3>")
   $(".S").prepend("<h3>" + profileObj.followers + "</h3>")
   $(".G").prepend("<h3>" + profileObj.following + "</h3>")

});
$.getJSON('https://api.github.com/users/pllewis1/repos').done(function(data) {
  console.log(data);
  // console.log(event.name);
  reposObj = data;
  data.forEach(function(event){
    console.log(event.name);

    var container = $('<div class="repoman"> </div>');
    var header = $('<h4 class="entry">' + event.name + '</h4>');
    var time = $('<time>' + event.updated_at + '</time>');

    // $(.repo).append(container);
    // $(.repoman).append(header);
    $('.repo').append(time)
    $(".repo").append(container);
    $('.repo').append(header);
  });
  });

  // entries.forEach(function(entry){
  //   var article = $('<article class="entry"></article>');
  //   var header = $('<header>'+ entry.name +'</header>');
  //   var content = $('<p>'+ entry.message +'</p>');
  //   var time = $('<time>'+ entry.created +'</time>');
  //
  //   article.append(header);
  //   article.append(content);
  //   article.append(time);
  //
  //   log.prepend(article);
  //
  // });
// }


  //
  // entries.forEach(function(entry){
  //    var article = $('<article class="entry"></article>');
  //    var header = $('<header>'+ entry.name +'</header>');
  //    var content = $('<p>'+ entry.message +'</p>');
  //    var time = $('<time>'+ entry.created +'</time>');


// });
