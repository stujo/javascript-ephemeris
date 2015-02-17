$(function(){
  var p = $.ajax( {
    url:"http://www.astro-phys.com/api/de406/states?bodies=sun,mercury,venus,earthmoon,geomoon,mars,jupiter,uranus,neptune,pluto",
    type:"get"});

  p.done(function(data){
      $('#answer').text(JSON.stringify(data.results,null,2));
    });
});

