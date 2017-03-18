var c, ctx;
var WIDTH, HEIGHT;
var map,landmap;

$(function(){
	//init
	c = $("#canvas")[0];
	ctx = c.getContext("2d");
	c.width = window.innerWidth;
	c.height = window.innerHeight;
	var i = 300;
	map = new Map(Math.round(i * 2.3),i);
	landmap = new LandMap(Math.round(i * 2.3),i);
	landmap.draw();
	
});
