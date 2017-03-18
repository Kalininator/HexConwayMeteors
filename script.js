var c, ctx;
var WIDTH, HEIGHT;
var map,landmap;

$(function(){
	//init
	c = $("#canvas")[0];
	ctx = c.getContext("2d");
	c.width = window.innerWidth;
	c.height = window.innerHeight;
	var i = 100;
	
	landmap = new LandMap(Math.round(i * 2.3),i);
	map = new Map(Math.round(i * 2.3),i,landmap);
	landmap.draw();
	map.draw();
	
	$("#canvas").click(function(){
		Conway(map);
		ctx.clearRect(0,0,c.width,c.height);
		landmap.draw();
		map.draw();
	});
});

function coordView(lat,lng){
	var screenX = ((lng + 180) * (c.width  / 360));
	var screenY = (((lat * -1) + 90) * ((Math.sqrt(3) * ((window.innerWidth ) / ((map.width + 1) * 1.5)) * map.height)/ 180));
	ctx.beginPath();
	ctx.arc(screenX,screenY,20,0,2*Math.PI);
	ctx.fill();
	console.log(screenX + "," + screenY);
}


