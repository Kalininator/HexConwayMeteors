var c, ctx;
var WIDTH, HEIGHT;

$(function(){
	//init
	c = $("#canvas")[0];
	ctx = c.getContext("2d");
	c.width = window.innerWidth;
	c.height = window.innerHeight;
	
	ctx.fillRect(20,20,20,20);
});