function generateEarthMap(height){
	var map = new Map(Math.round(height * 2.3),height);
	
	// var imgcanvas = document.createElement('canvas');
	// var imgctx = imgcanvas.getContext("2d");
	// var img = document.getElementById("earthimg");
	// imgcanvas.width = img.width;
	// imgcanvas.height = img.height;
	// img.src="earth-map.gif";
	// imgctx.drawImage(img,0,0);
	
	// var data = imgctx.getImageData(0, 0, img.width, img.height);
	
	var img = document.createElement("img");
	img.src="earth-map.gif";
	var data = img.getImageData(0,0,img.width,img.height);
	
	var x = 200;
	var y = 20;
	var red = data.data[((img.width * y) + x) * 4];
	var green = data.data[((img.width * y) + x) * 4 + 1];
	var blue = data.data[((img.width * y) + x) * 4 + 2];
	var alpha = data.data[((img.width * y) + x) * 4 + 3];
	console.log(red + "," + green + "," + blue);
	
	console.log(data);
}