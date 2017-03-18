var c, ctx;
var WIDTH, HEIGHT;
var map,landmap;

$(function(){
	//init
	c = $("#canvas")[0];
	ctx = c.getContext("2d");
	c.width = window.innerWidth;
	c.height = window.innerHeight;
	var i = 200;
	
	landmap = new LandMap(Math.round(i * 2.3),i);
	map = new Map(Math.round(i * 2.3),i,landmap);
	landmap.draw();
	map.draw();
	
	
	setInterval(loop,1000/3);
});

function loop(){
	var coord = coordView(39.733375, -104.988225);
	map.cells[coord.x, coord.y].alive = true;
	map.cells[coord.x, coord.y].color = "MediumSlateBlue";
	Spawner(map, "MediumSlateBlue", coord.x, coord.y)
	Conway(map);
	ctx.clearRect(0,0,c.width,c.height);
	landmap.draw();
	map.draw();
}



function coordView(lat,lng){
	var screenX = ((lng + 180) * (c.width  / 360));
	var screenY = (((lat * -1) + 90) * ((Math.sqrt(3) * ((window.innerWidth ) / ((map.width + 1) * 1.5)) * map.height)/ 180));
	// ctx.beginPath();
	// ctx.arc(screenX,screenY,20,0,2*Math.PI);
	// ctx.fill();
	return {x:screenX,y:screenY};
}


