function Conway(map){
	
	var nCount = new Array(map.width);
	for(var i = 0; i < map.width; i++){
		nCount[i] = new Array(map.height);
	}
	for(var a = 0; a < map.width; a++){
		for(var b = 0; b < map.height; b++){
			map.neighbourArr = checkNeighbour(a,b);
			nCount[a][b] = 0;
			for(var nC = 0; nC < 6; nC++){
				if(map.neighbourArr[nC].alive == true){
					nCount[a][b]++;
					map.cells[a][b].color = map.neighbourArr[nC].color;
				}
			}
		}
	}
	for(var a = 0; a < map.width; a++){
		for(var b = 0; b < map.height; b++){
			if((nCount[a][b] == 2 || nCount[a][b] == 3) && map.landmap.cells[a][b] == 1){ // don't forget to add land qualifier
				map.cells[a][b].alive = true;
			}else {
				map.cells[a][b].alive = false;
			}	
		}
	}
}