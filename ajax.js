$.getJSON('https://api.github.com/users/pllewis1').done(function(data) {
  console.log(data);
  profileObj = data;
   $(".F").html("<h3>" + profileObj.followers + '<br> <span class="blue">followers </span></h3>');
   $(".S").html("<h3>" + profileObj.followers + '<br> <span class="blue">starred </span> </h3>');
   $(".G").html("<h3>" + profileObj.following + '<br> <span class="blue"> following </span> </h3>');
   $(".image_container").append("<img src=" + profileObj.avatar_url + ">");
   $(".image_container:last-of-type").append("<h1>"+ profileObj.name + "</h1>")

   $("h1").append("<h2>"+ profileObj.login + "</h2>")

});
$.getJSON('https://api.github.com/users/pllewis1/repos').done(function(data) {
  console.log(data);

  data.forEach(function(event){
    console.log(event.name);

    var container = $('<div class="repoman"> </div>');
    var header = $('<h4 class="entry"> <a href="#">' + event.name + '</a> <span>'  + event.language + '</span>' + '<span class="octicon octicon-star">' + event.stargazers_count + '</span>' + '<span class="octicon octicon-git-branch">'+ event.forks + '</span>'
  +'</h4>');
    var time = $('<time>' + event.updated_at + '</time>');


    $(".repo").append(container);
    $('.repo').append(header);
    $('.repo').append(time);



    });
  });
