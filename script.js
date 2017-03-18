var c, ctx;
var WIDTH, HEIGHT;
var map,landmap;
var coords = [];
$(function(){
	//init
	
	
	
	c = $("#canvas")[0];
	ctx = c.getContext("2d");
	c.width = window.innerWidth;
	c.height = window.innerHeight;
	var i = 100;
	
	

	
	landmap = new LandMap(Math.round(i * 2.3),i);
	map = new Map(Math.round(i * 2.3),i,landmap);
	
	
	addSpawnerLocation(43.107827, -8.376841);
	addSpawnerLocation(13.234328, 18.709635);
	landmap.draw();
	map.draw();
	
	
	setInterval(loop,1000/3);
});

function addSpawnerLocation(lat,lng){
	var coord = coordView(lat, lng);
	coord.x = Math.round(coord.x);
	coord.y = Math.round(coord.y);
	var size = (window.innerWidth ) / ((map.width + 1) * 1.5);
	coord.x = Math.round((2 * coord.x) / (3 * size));
	coord.y = Math.round(coord.y / (size * Math.sqrt(3)));
	coords.push(coord);
}

function loop(){
	
	
	
	// console.log(map.width);
	// console.log(map.width - coord.x);
	
	for(var i = 0; i < coords.length; i += !""){
		map.cells[coords[i].x][coords[i].y].alive = true;
		map.cells[coords[i].x][coords[i].y].color = "MediumSlateBlue";
		Spawner(map, "MediumSlateBlue", coords[i].x, coords[i].y);
	}
	
	Conway(map);
	
	for(var i = 0; i < coords.length; i += !""){
		map.cells[coords[i].x,coords[i].y].alive = true;
	}
	
	
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



