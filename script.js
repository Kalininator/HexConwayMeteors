var c, ctx;
var WIDTH, HEIGHT;
var map;

$(function(){
	//init
	c = $("#canvas")[0];
	ctx = c.getContext("2d");
	c.width = window.innerWidth;
	c.height = window.innerHeight;
	
	map = new Map(150,150);
	
	map.draw();
	
});
