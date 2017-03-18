function Conway(map){
	
	var nCount = new Array[this.width];
	for(var i = 0; i < this.width; i++){
		nCount[i] = new Array[this.height];
	}
	for(var a = 0; x < width; x++){
		for(var b = 0; y < height; y++){
			var map.neighbourArr = checkNeighbour(a,b);
			nCount[a][b] = 0;
			for(var nC = 0; nC < 6; nC++){
				if(map.neighbourArr[nC].alive == true){
					nCount[a][b]++;
					map.cells[a][b].color = map.neighbourArr[nC].color;
				}
			}
		}
	}
	for(var a = 0; x < width; x++){
		for(var b = 0; y < height; y++){
			if((nCount[a][b] == 2 || nCount[a][b] == 3) && map.landmap.cells[a][b] == 1){ // don't forget to add land qualifier
				map.cells[a][b].alive = true;
			}else {
				map.cells[a][b].alive = false;
			}	
		}
	}
}