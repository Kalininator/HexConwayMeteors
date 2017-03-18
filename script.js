var c, ctx;
var WIDTH, HEIGHT;
var map;

$(function(){
	//init
	c = $("#canvas")[0];
	ctx = c.getContext("2d");
	c.width = window.innerWidth;
	c.height = window.innerHeight;
	var i = 50;
	map = new Map(Math.round(i * 2.3),i);
	
	map.draw();
	
});
