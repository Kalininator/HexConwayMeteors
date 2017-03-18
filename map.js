function Map(width, height){
	this.cells = new Array(width);
	for(var i = 0; i < width; i ++){
		this.cells[i] = new Array(height);
		for(var j = 0; j < height; j ++){
			this.cells[i][j] = new Cell(getRandomInt(0,255),getRandomInt(0,255),getRandomInt(0,255));
		}
	}
}
Map.prototype = {
	draw: function(){
		for(var i = 0; i < 20; i ++){
			for(var j = 0; j < 20; j ++){
				var x, y;
				if(i % 2 == 0){
					x = i * 30 + 20;
					y = j * 35 + 20;
				}else{
					x = i * 30 + 20;
					y = j * 35 + 37;
				}
				
				ctx.fillStyle = "rgb(" + this.cells[i][j].r + "," + this.cells[i][j].g + "," + this.cells[i][j].b + ")"
				drawHex(20,x,y);
			}
		}
	}
};

function drawHex(size,x,y){
	ctx.beginPath();
	ctx.moveTo (x +  size * Math.cos(0), y +  size *  Math.sin(0));          
	for (var i = 1; i <= 6;i ++) {
		ctx.lineTo (x + size * Math.cos(i * 2 * Math.PI / 6), y + size * Math.sin(i * 2 * Math.PI / 6));
	}
	ctx.lineWidth = 1;
	ctx.fill();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}