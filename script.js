var c, ctx;

var map,landmap,killgrid;
var coords = [];
var coordsC = []
var FPS = 1.5;
var gridwidth, gridheight;
var hexsize;
var currentYear = 1900;
var tick = 0;
var tickMaxMeteor = 5;

$(function(){
	//init
	
	
	$("#bottom").width = window.innerWidth;
	$("#bottom").height = 200;
	$("#main").width = window.innerWidth;
	$("#main").height = window.innerHeight - 200;
	var i = 100;
	c = $("#canvas")[0];
	ctx = c.getContext("2d");
	c.width = window.innerWidth;
	c.height = window.innerHeight - 200;
	
	
	
	
	landmap = new LandMap(Math.round(i * 2.3),i);
	map = new Map(Math.round(i * 2.3),i,landmap);
	
	if(c.width > 2 * c.height){
		//too wide
		hexsize = c.height / ((map.height + 1) * Math.sqrt(3));
	}else{
		//too high
		hexsize = (2 * c.width) / (3 * map.width + 1);
	}
	
	gridheight = hexsize * Math.sqrt(3) * (map.height + 1);
	gridwidth = hexsize * 1.5 * map.width;
	
	killgrid = new Array(map.width);
	for(var i = 0; i < killgrid.length; i += !""){
		killgrid[i] = new Array(map.height);
		killgrid[i].fill(0);
	}
	
	addSpawnerLocation(35.539075, 139.580745);	// Tokyo
	coordsC.push("White");
	addSpawnerLocation(40.755671, -73.982191);	// New york city
	coordsC.push("Aqua");
	addSpawnerLocation(40.421363, -74.931097);	// New york city
	coordsC.push("Aqua");
	addSpawnerLocation(-23.550443, -46.633423);	// Sao Paulo
	coordsC.push("Lime");
	addSpawnerLocation(55.755881, 37.617143);	// Moscow 
	coordsC.push("Red");
	addSpawnerLocation(51.507341, -0.127671);	// London
	coordsC.push("DeepSkyBlue");
	addSpawnerLocation(40.468118, 116.004065);	// Beijing
	coordsC.push("Purple");
	addSpawnerLocation(24.714856, 46.674914);	// Riyadh 
	coordsC.push("Linen");
	addSpawnerLocation(-31.589728, 142.840452);	// Adalade
	coordsC.push("Darkblue");
	addSpawnerLocation(53.541925, -113.491206);	// Edmonton
	coordsC.push("Firebrick");
	addSpawnerLocation(-13.524056, 28.154287);	// zambia
	coordsC.push("DarkOrange");
	addSpawnerLocation(-75.100459, 123.345904);	// Concordia Station
	coordsC.push("White");
	addSpawnerLocation(27.197235, 2.483790);	// Algeria
	coordsC.push("Lime");
	addSpawnerLocation(17.373867, 78.482229);	// Hyderia
	coordsC.push("Darkblue");
	addSpawnerLocation(2.572483, -71.964158);	// Colombia
	coordsC.push("Purple");
	addSpawnerLocation(68.086395, -44.155433);	// Colombia
	coordsC.push("White");
	
	
	landmap.draw();
	map.draw();
	
	for(var i = 0; i < coords.length; i += !""){
		//Spawner(map, "White", coords[i].x, coords[i].y);
		//console.log(coordsC[i]);
		Spawner(map, coordsC[i], coords[i].x, coords[i].y);
	}
	
	c.addEventListener('click', function(evt) {
        var mousePos = getMousePos(c, evt);
		
		meteorStrike(mousePos.x,mousePos.y);
    }, false);
	
	setInterval(loop,1000/FPS);
});

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function meteors(){
	getMeteors($("#memebox")[0].value);
}

function addSpawnerLocation(lat,lng){
	var coord = coordView(lat, lng);
	coord.x = Math.round(coord.x);
	coord.y = Math.round(coord.y);
	var size = hexsize;
	coord.x = Math.round((2 * coord.x) / (3 * size));
	coord.y = Math.round(coord.y / (size * Math.sqrt(3)));
	// console.log(coord);
	coords.push(coord);
}

function loop(){
	$("#currentYearBox")[0].innerHTML = "Current Year: " + currentYear;
	if(tick == tickMaxMeteor){
		getMeteors(currentYear);
		currentYear++;
		tick = 0;
	}else{
		tick ++;
	}
	
	
	for(var i = 0; i < coords.length; i += !""){
		//Spawner(map, "White", coords[i].x, coords[i].y);
		//console.log(coordsC[i]);
		Spawner(map, coordsC[i], coords[i].x, coords[i].y);
	}
	
	map = Conway(map);
	ctx.clearRect(0,0,c.width,c.height);
	landmap.draw();
	
	map.draw();	
	var size = (window.innerWidth ) / ((map.width + 1) * 1.5);
	for(var i = 0; i < map.width; i ++){
		for(var j = 0; j < map.height; j ++){
			var x, y;
			if(i % 2 == 0){
				y = j * (size * Math.sqrt(3)) ;
			}else{
				y = j * (size * Math.sqrt(3))  + (size * Math.sqrt(3) * 0.5);
			}
			
			x = i * (size * 1.5);
			y += size;
			x += size;
			if(killgrid[i][j]){
				ctx.fillStyle = "rgba(228, 153, 47, 1)";
				drawHex(size,x,y,1);
			}
			
		}
	}

	
	for(var i = 0; i < killgrid.length; i += !""){
		killgrid[i].fill(0);
	}
	
	
	
	// window.setTimeout(loop,1000);
}

function coordView(lat,lng){
	// var width = (c.width) / ((this.width + 1) * 1.5) * map.width * 1.5;
	var screenX = Math.round((lng + 180) * (gridwidth  / 360));
	var screenY = Math.round(((lat * -1) + 90) * (gridheight/ 180));
	
	screenX = screenX < 0? gridwidth + screenX : screenX % gridwidth;
	screenY = screenY < 0? gridheight + screenY : screenY % gridheight;
	// killgrid[Math.round(screenX)][Math.round(screenY)] = 1;
	return {x:Math.round(screenX),y:Math.round(screenY)};
}

