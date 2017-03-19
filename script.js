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
	var i = 200;
	
	

	
	landmap = new LandMap(Math.round(i * 2.3),i);
	map = new Map(Math.round(i * 2.3),i,landmap);
	
	
	addSpawnerLocation(35.539075, 139.580745);	// Tokyo
	addSpawnerLocation(40.755671, -73.982191);	// New york city
	addSpawnerLocation(-23.550443, -46.633423);	// Sao Paulo
	addSpawnerLocation(55.755881, 37.617143);	// Moscow 
	addSpawnerLocation(51.507341, -0.127671);	// London
	addSpawnerLocation(40.468118, 116.004065);	// Beijing
	addSpawnerLocation(24.714856, 46.674914);	// Riyadh 
	addSpawnerLocation(-31.589728, 142.840452);	// Adalade
	addSpawnerLocation(53.541925, -113.491206);	// Edmonton
	addSpawnerLocation(6.605115, 20.656842);	// Central African Republic
	
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
	
	//console.log("tick");
	
	// console.log(map.width);
	// console.log(map.width - coord.x);
	
	for(var i = 0; i < coords.length; i += !""){
		map.cells[coords[i].x][coords[i].y].alive = true;
		var c = map.cells[coords[i].x][coords[i].y].colors[getRandomInt(0,4)];
		//map.cells[coords[i].x][coords[i].y].color = c;
		Spawner(map, c, coords[i].x, coords[i].y);
	}
	
	map = Conway(map);
	
	for(var i = 0; i < coords.length; i += !""){
		map.cells[coords[i].x,coords[i].y].alive = true;
	}
	
	
	ctx.clearRect(0,0,c.width,c.height);
	//console.log("draw");
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



