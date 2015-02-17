$(function(){

  function redirectToHttp(){
    window.location.href = "http:" + window.location.href.substring(window.location.protocol.length);
  }

  if (window.location.protocol == "https:")
  {
    var switchToHttpButton = $('<button>');
    switchToHttpButton.text('This will only work on HTTP, not HTTPS - but why?')
    switchToHttpButton.click(redirectToHttp);
    $('#notice').append(switchToHttpButton);
  }

  $.ajax( {
    url:"http://www.astro-phys.com/api/de406/states?bodies=sun,mercury,venus,earthmoon,geomoon,mars,jupiter,uranus,neptune,pluto",
    type:"get"}).done(function(data){
      $('#answer').text(JSON.stringify(data.results,null,2));
    });
});

