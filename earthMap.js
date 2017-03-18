function generateEarthMap(height){
	var map = new Map(Math.round(height * 2.3),height);
	
	var imgcanvas = document.createElement('canvas');
	var imgctx = imgcanvas.getContext("2d");
	var img = document.getElementById("earthimg");
	imgcanvas.width = img.width;
	imgcanvas.height = img.height;
	img.src="earth-map.gif";
	imgctx.drawImage(img,0,0);
	
	var data = imgctx.getImageData(0, 0, img.width, img.height);
	
	
	for(var i = 0; i < map.width; i ++){
		for(var j = 0; j < map.height; j ++){
			
			var xscale = img.width / map.width;
			var yscale = img.height / map.height;
			
			var pixel = getPixelRGB(data,Math.round(i*xscale),Math.round(j*yscale),img.width,img.height);
			if(pixel.b == 255){
				map.cells[i][j].color = map.cells[i][j].colors[0];
			}else{
				map.cells[i][j].color = map.cells[i][j].colors[1];
			}
		}
	}
	return map;
}
function getPixelRGB(data,x,y,width,height){
	var red = data.data[((width * y) + x) * 4];
	var green = data.data[((width * y) + x) * 4 + 1];
	var blue = data.data[((width * y) + x) * 4 + 2];
	var alpha = data.data[((width * y) + x) * 4 + 3];
	return {r:red,g:green,b:blue,a:alpha};
}