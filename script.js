var c, ctx;
var canvas;
var WIDTH, HEIGHT;
var map,landmap,killgrid;
var coords = [];
var FPS = 3;
var scene, camera, renderer, globe;
$(function(){
	//init
	
	
	c = document.createElement('canvas');
	ctx = c.getContext("2d");
	c.width = window.innerWidth;
	c.height = window.innerHeight;
	var i = 100;
	
	

	
	landmap = new LandMap(Math.round(i * 2.3),i);
	map = new Map(Math.round(i * 2.3),i,landmap);
	killgrid = new Array(map.width);
	for(var i = 0; i < killgrid.length; i += !""){
		killgrid[i] = new Array(map.height);
		killgrid[i].fill(0);
	}
	
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
	addSpawnerLocation(-75.100459, 123.345904);	// Concordia Station
	
	landmap.draw();
	map.draw();
	
	c.addEventListener('click', function(evt) {
        var mousePos = getMousePos(c, evt);
		
		meteorStrike(mousePos.x,mousePos.y);
    }, false);
	
	var image = new Image();
	image.id = "pic"
	image.src = c.toDataURL();
	//document.getElementById('image-for-crop').appendChild(image);
	
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(45, c.width / c.height, 0.01, 1000);
	camera.position.z = 1.5;

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(c.width, c.height);
	scene.add(new THREE.AmbientLight(0x333333));

	var light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(5,3,5);
	scene.add(light);
	globe = new THREE.Mesh(
		  new THREE.SphereGeometry(0.5, 32, 32),
		  new THREE.MeshPhongMaterial({
			map: THREE.ImageUtils.loadTexture(c.toDataURL()),
			specular: new THREE.Color('grey')      })
	);
	scene.add(globe);
	render();
	setInterval(loop,1000/FPS);
});
function render() {
  renderer.render(scene, camera);
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

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
	
	
	for(var i = 0; i < coords.length; i += !""){
		Spawner(map, "White", coords[i].x, coords[i].y);
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
				ctx.fillStyle = "yellow";
				drawHex(size,x,y,1);
			}
			
		}
	}

	
	for(var i = 0; i < killgrid.length; i += !""){
		killgrid[i].fill(0);
	}
	var image = new Image();
	image.id = "pic"
	image.src = c.toDataURL();
	// $("#image-for-crop").empty();
	// document.getElementById('image-for-crop').appendChild(image);
	// window.setTimeout(loop,1000);
}

function coordView(lat,lng){
	var screenX = ((lng + 180) * (c.width  / 360));
	var screenY = (((lat * -1) + 90) * ((Math.sqrt(3) * ((c.width ) / ((map.width + 1) * 1.5)) * map.height)/ 180));
	
	screenX = screenX < 0? c.width + screenX : screenX % c.width;
	screenY = screenY < 0? c.height + screenY : screenY % c.height;
	
	return {x:Math.round(screenX),y:Math.round(screenY)};
}



