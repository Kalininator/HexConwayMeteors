function Map(width, height,landmap){
	this.cells = new Array(width);
	this.nCount = new Array(width);
	this.width = width;
	this.landmap = landmap;
	this.height = height;
	for(var i = 0; i < width; i ++){
		this.cells[i] = new Array(height);
		this.nCount[i] = new Array(height);
		for(var j = 0; j < height; j ++){
			this.cells[i][j] = new Cell(i,j);
		}
	}
	
}
Map.prototype = {
	draw: function(){
		
		
		for(var i = 0; i < this.width; i ++){
			for(var j = 0; j < this.height; j ++){
				var x, y;
				if(i % 2 == 0){
					y = j * (hexsize * Math.sqrt(3)) ;
				}else{
					y = j * (hexsize * Math.sqrt(3))  + (hexsize * Math.sqrt(3) * 0.5);
				}
				
				x = i * (hexsize * 1.5);
				y += hexsize;
				x += hexsize;
				//ctx.fillStyle = "rgb(" + this.cells[i][j].r + "," + this.cells[i][j].g + "," + this.cells[i][j].b + ")"
				if(this.cells[i][j].alive && this.landmap.cells[i][j]){
					// ctx.fillStyle = this.cells[i][j].color;
					ctx.fillStyle = "white";
					drawHex(hexsize,x,y,0.7);
				}
				
			}
		}
	}
};

function drawHex(size,x,y,i){
	ctx.beginPath();
	size = size * i;
	
	ctx.moveTo (x +  size, y);          
	for (var i = 1; i <= 6;i ++) {
		ctx.lineTo (x + size * Math.cos(i * 2 * Math.PI / 6), y + size * Math.sin(i * 2 * Math.PI / 6));
	}
	ctx.lineWidth = 1;
	ctx.fill();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function checkNeighbour(x, y){

	var adjacent = [];
	adjacent.push(map.cells[x][(y - 1) < 0? map.height + (y - 1) : (y - 1) % map.height]);
	adjacent.push(map.cells[x][(y + 1) % map.height]);
	adjacent.push(map.cells[(x-1) < 0? map.width + (x-1) : (x-1) % map.width][y]);
	adjacent.push(map.cells[(x+1) % map.width][y]);
	
	if(x % 2 == 0){
		adjacent.push(map.cells[(x-1) < 0? map.width + (x-1) : (x-1) % map.width][(y - 1) < 0? map.height + (y - 1) : (y - 1) % map.height]);
		adjacent.push(map.cells[(x+1) % map.width][(y - 1) < 0? map.height + (y - 1) : (y - 1) % map.height]);
	}else{
		adjacent.push(map.cells[(x-1) < 0? map.width + (x-1) : (x-1) % map.width][(y + 1) % map.height]);
		adjacent.push(map.cells[(x+1) % map.width][(y + 1) % map.height]);
	}
	return adjacent;	
}


