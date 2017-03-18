function Map(width, height){
	this.cells = new Array(width);
	this.width = width;
	this.height = height;
	for(var i = 0; i < width; i ++){
		this.cells[i] = new Array(height);
		for(var j = 0; j < height; j ++){
			this.cells[i][j] = new Cell(getRandomInt(0,255),getRandomInt(0,255),getRandomInt(0,255));
		}
	}
}
Map.prototype = {
	draw: function(){
		for(var i = 0; i < this.width; i ++){
			for(var j = 0; j < this.height; j ++){
				var x, y;
				var size = 5;
				if(i % 2 == 0){
					y = j * (size * Math.sqrt(3)) ;
				}else{
					y = j * (size * Math.sqrt(3))  + (size * Math.sqrt(3) * 0.5);
				}
				
				x = i * (size * 1.5);
				y += size;
				x += size;
				ctx.fillStyle = "rgb(" + this.cells[i][j].r + "," + this.cells[i][j].g + "," + this.cells[i][j].b + ")"
				drawHex(size,x,y);
			}
		}
	}
};

function drawHex(size,x,y){
	ctx.beginPath();
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
	var adjacent[6];
	var counter = 0;
	
	for(var a = x-1; a <= x+1; a++){
		for(var b = y-1; b <= y+1; b++){
			if(!(a == x-1 &&b = y+1)||!(a == x && y == b)||!(a == x+1 && b == y-1)){
				adjacent[counter] = this.cells[this.width%a][this.height%b];
				counter++;
			}
		}
	}
	
	return adjacent;
}