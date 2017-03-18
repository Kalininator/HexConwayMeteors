function Map(width, height){
	this.cells = new Array(width);
	this.nCount = new Array(width);
	this.width = width;
	this.height = height;
	for(var i = 0; i < width; i ++){
		this.cells[i] = new Array(height);
		this.nCount[i] = new Array(height);
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
				//ctx.fillStyle = "rgb(" + this.cells[i][j].r + "," + this.cells[i][j].g + "," + this.cells[i][j].b + ")"
				if(this.cells[i][j].alive == true){
					ctx.fillStyle = this.cells[i][j].color;
				} else{
					ctx.fillStyle = "Black";
				}
				
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

function checkNeighbour(x1, y1){
	var adjacent = new Array[6];
	var counter = 0;
	
	for(var a = x1-1; a <= x1+1; a++){
		for(var b = y1-1; b <= y1+1; b++){
			if(!(a == x1-1 && b == y1+1)||!(a == x1 && y1 == b)||!(a == x1+1 && b == y1-1)){
				adjacent[counter] = this.cells[this.width%a][this.height%b];
				counter++;
			}
		}
	}
	
	return adjacent;
}

function Conway(){
	
	var nCount = new Array[this.width];
	for(var i = 0; i < this.width; i++){
		nCount[i] = new Array[this.height];
	}
	for(var a = 0; x < width; x++){
		for(var b = 0; y < height; y++){
			var neighbourArr = checkNeighbour(a,b);
			nCount[a][b] = 0;
			for(var nC = 0; nC < 6; nC++){
				if(neighbourArr[nC].alive == true){
					nCount[a][b]++;
				}
			}
		}
	
	for(var a = 0; x < width; x++){
		for(var b = 0; y < height; y++){
			
			}
		}
}