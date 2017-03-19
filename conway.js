function Conway(map){
	
	var newmap = new Map(map.width,map.height,map.landmap);
	
	for(var a = 0; a < map.width; a++){
		for(var b = 0; b < map.height; b++){
			var neighbourArr = checkNeighbour(a,b);
			var nCount = 0; //alive neighbour count
			for(var nC = 0; nC < 6; nC++){ //count alive neighbors
				if(neighbourArr[nC].alive == true){
					nCount++;
				}
			}
			
			if(killgrid[a][b]){
				newmap.cells[a][b].alive = false;
			}else{
				if((nCount ==2) && map.landmap.cells[a][b] == 1){ // don't forget to add land qualifier
					newmap.cells[a][b].alive = true;
				}else {
					newmap.cells[a][b].alive = false;
				}
			}
			
				
		}
	}
	return newmap;
}