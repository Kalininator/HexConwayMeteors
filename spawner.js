function Spawner(map, color, x, y){
	var xArr = [x-1, x, x-1, x+1, x, x+1];
	var yArr = [y-1, y-1, y, y, y+1, y+1];
	
	for(var i = 0; i < map.getRandomInt(0,7); i++){
		var a = map.getRandomInt(0,7)
		map.cells[xArr[a] >= 0 ? xArr[a] % map.width : map.width + xArr[a]][yArr[b] >= 0 ? yArr[b] % map.height : map.height + yArr[b]].alive = true;
		map.cells[xArr[a] >= 0 ? xArr[a] % map.width : map.width + xArr[a]][yArr[b] >= 0 ? yArr[b] % map.height : map.height + yArr[b]].color = this.color;
	}
}