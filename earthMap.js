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
	
	
	console.log(getPixelRGB(data,20,200,img.width,img.height));
	
	
	
	console.log(data);
}
function getPixelRGB(data,x,y,width,height){
	var red = data.data[((width * y) + x) * 4];
	var green = data.data[((width * y) + x) * 4 + 1];
	var blue = data.data[((width * y) + x) * 4 + 2];
	var alpha = data.data[((width * y) + x) * 4 + 3];
	return {r:red,g:green,b:blue,a:alpha};
}