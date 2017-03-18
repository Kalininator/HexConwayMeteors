function LandMap(width,height){
	this.cells = new Array(width);
	this.width = width;
	this.height = height;
	
	
	var imgcanvas = document.createElement('canvas');
	var imgctx = imgcanvas.getContext("2d");
	var img = document.getElementById("earthimg");
	imgcanvas.width = img.width;
	imgcanvas.height = img.height;
	img.src="earth-map.gif";
	imgctx.drawImage(img,0,0);
	
	var data = imgctx.getImageData(0, 0, img.width, img.height);
	
	for(var i = 0; i < width; i ++){
		this.cells[i] = new Array(height);
		for(var j = 0; j < height; j ++){
			
			var xscale = img.width / width;
			var yscale = img.height / height;
			
			var pixel = getPixelRGB(data,Math.round(i*xscale),Math.round(j*yscale),img.width,img.height);
			if(pixel.b == 255){
				this.cells[i][j] = 0; 
			}else{
				this.cells[i][j] = 1;
			}
		}
	}
	console.log(this.cells);
}
LandMap.prototype = {
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
				if(this.cells[i][j] == true){
					ctx.fillStyle = "Green";
				} else{
					ctx.fillStyle = "Blue";
				}
				
				drawHex(size,x,y);
			}
		}
	}
};

function getPixelRGB(data,x,y,width,height){
	var red = data.data[((width * y) + x) * 4];
	var green = data.data[((width * y) + x) * 4 + 1];
	var blue = data.data[((width * y) + x) * 4 + 2];
	var alpha = data.data[((width * y) + x) * 4 + 3];
	return {r:red,g:green,b:blue,a:alpha};
}

function drawHex(size,x,y){
	ctx.beginPath();
	ctx.moveTo (x +  size, y);          
	for (var i = 1; i <= 6;i ++) {
		ctx.lineTo (x + size * Math.cos(i * 2 * Math.PI / 6), y + size * Math.sin(i * 2 * Math.PI / 6));
	}
	ctx.lineWidth = 1;
	ctx.fill();
}