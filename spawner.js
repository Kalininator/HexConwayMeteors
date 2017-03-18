function Spawner(map, color, x, y){
	var xArr = [x-1, x, x-1, x+1, x, x+1];
	var yArr = [y-1, y-1, y, y, y+1, y+1];
	for(var i = 0; i < getRandomInt(0,7); i++){
		var a = getRandomInt(0,7)
		map.cells[xArr[a] >= 0 ? xArr[a] % map.width : map.width + xArr[a]][yArr[a] >= 0 ? yArr[a] % map.height : map.height + yArr[a]].alive = true;
		map.cells[xArr[a] >= 0 ? xArr[a] % map.width : map.width + xArr[a]][yArr[a] >= 0 ? yArr[a] % map.height : map.height + yArr[a]].color = this.color;
	}
}