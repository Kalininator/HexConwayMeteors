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
		
		var size = (window.innerWidth ) / ((this.width + 1) * 1.5);
		
		for(var i = 0; i < this.width; i ++){
			for(var j = 0; j < this.height; j ++){
				var x, y;
				if(i % 2 == 0){
					y = j * (size * Math.sqrt(3)) ;
				}else{
					y = j * (size * Math.sqrt(3))  + (size * Math.sqrt(3) * 0.5);
				}
				
				x = i * (size * 1.5);
				y += size;
				x += size;
				//ctx.fillStyle = "rgb(" + this.cells[i][j].r + "," + this.cells[i][j].g + "," + this.cells[i][j].b + ")"
				if(this.cells[i][j].alive && this.landmap.cells[i][j]){
					// ctx.fillStyle = this.cells[i][j].color;
					ctx.fillStyle = "white";
					drawHex(size,x,y,0.7);
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

function checkNeighbour(x1, y1){
	var adjacent = new Array(6);
	var counter = 0;
	
	for(var a = x1-1; a <= x1+1; a++){
		for(var b = y1-1; b <= y1+1; b++){
			if(!(a == x1-1 && b == y1+1)||!(a == x1 && y1 == b)||!(a == x1+1 && b == y1-1)){
				//console.log(a + "," + (map.width));
				//console.log(a%(map.width));
				//console.log(a >= 0 ? a % map.width : map.width + a);
				adjacent[counter] = map.cells[a >= 0 ? a % map.width : map.width + a][b >= 0 ? b % map.height : map.height + b];
				counter++;
			}
		}
	}
	
	return adjacent;
}

