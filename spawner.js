function Spawner(map, color, x, y){
	// console.log(color);
	// var xArr = [x-1, x, x-1, x+1, x, x+1];
	// var yArr = [y-1, y-1, y, y, y+1, y+1];
	// var rand = getRandomInt(0,5);
	// for(var i = 0; i < rand; i++){
		// var a = getRandomInt(0,5)
		// var ax = xArr[a] >= 0 ? xArr[a] % map.width : map.width + xArr[a];
		// var ay = yArr[a] >= 0 ? yArr[a] % map.height : map.height + yArr[a];
		// console.log(ax + "," + ay);
		// map.cells[ax][ay].alive = true;
		// map.cells[ax][ay].color = color;
		// console.log(map.cells[ax][ay].color);
	// }
	var neighbours = checkNeighbour(x,y);
	//console.log(color);

	for(var i = 0; i < neighbours.length; i += !""){
		if(Math.random() < 0.5){
			map.cells[neighbours[i].x][neighbours[i].y].alive = true;
			// console.log(color);
			map.cells[neighbours[i].x][neighbours[i].y].color = color;
			
			//console.log(map.cells[neighbours[i].x][neighbours[i].y].color);
		}
	}
	
}