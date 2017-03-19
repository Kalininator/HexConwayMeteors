function Conway(map){
	
	var newmap = new Map(map.width,map.height,map.landmap);
	
	for(var a = 0; a < map.width; a++){
		for(var b = 0; b < map.height; b++){
			// console.log(map.landmap.cells[a][b]);
			if(map.landmap.cells[a][b] == 0){
				continue;
			}
			var neighbourArr = checkNeighbour(a,b);
			var nColors = [];
			var nCount = 0; //alive neighbour count
			
			for(var nC = 0; nC < 6; nC++){ //count alive neighbors
				if(neighbourArr[nC].alive == true){
					nCount++;
					//console.log(neighbourArr[nC].color);
					if(typeof neighbourArr[nC].color != 'undefined'){
						nColors.push(neighbourArr[nC].color);
						// console.log(neighbourArr[nC].color);
					}
					
				}
			}
			//console.log("hi");
			var tally = []
			
			for(var t = 0; t < nColors.length; t++){
				tally.push(0);
				for(var u = 0; u < nColors.length; u++){
					if(nColors[t] == nColors[u]){
						tally[t]++;
					} 
				}
			}
			var max = 0;
			if(killgrid[a][b]){
				newmap.cells[a][b].alive = false;
			}else{
				if((nCount ==2) && map.landmap.cells[a][b] == 1){
					newmap.cells[a][b].alive = true;
					//console.log(newmap.cells[a][b].color + " before");
					for(var t = 0; t < nColors.length; t++){
						
						if(tally[t] > max){
							max = tally[t];
							newmap.cells[a][b].color = nColors[t];
							//map.cells[a][b].color = nColors[t];
							//console.log(newmap.cells[a][b].color);
						}
					}
					//console.log(newmap.cells[a][b].color + " after");
					newmap.cells[a][b].alive = true;
				}else {
					newmap.cells[a][b].alive = false;
				}
			}
			
				
		}
	}
	return newmap;
}