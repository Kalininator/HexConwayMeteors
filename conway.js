function Conway(map){
	
	var newmap = new Map(map.width,map.height,map.landmap);
	// for(var i = 0; i < map.width; i += !""){
		// for(var j = 0; j < map.height; j += !""){
			// newmap.cells[i][j].color = map.cells[i][j].color;
		// }
	// }
	
	// var INTERVALA = 2;
	// var INTERVALB = 3;
	
	// var nCount = new Array(map.width);
	// for(var i = 0; i < map.width; i++){
		// nCount[i] = new Array(map.height);
	// }
	for(var a = 0; a < map.width; a++){
		for(var b = 0; b < map.height; b++){
			var neighbourArr = checkNeighbour(a,b);
			var nCount = 0; //alive neighbour count
			for(var nC = 0; nC < 6; nC++){ //count alive neighbors
				if(neighbourArr[nC].alive == true){
					nCount++;
					// newmap.cells[a][b].color = map.neighbourArr[nC].color;
					// newmap.cells[a][b].color = map.cells[a][b].colors[getRandomInt(0,4)]; //random color for new
					
				}
			}
			
			// var newval = map.cells[a][b].alive;
			
			
			if((nCount == 2) && map.landmap.cells[a][b] == 1){ // don't forget to add land qualifier
				newmap.cells[a][b].alive = true;
				// var cCount = new Array(map.cells[a][b].length).fill(0);
				// for(var i = 0; i < map.cells[a][b].length; i ++){
					// for(var j = 0; j < neighbourArr.length; j ++){
						// if(neighbourArr[j].color == map.cells[a][b].colors[i]){
							// cCount[i] += !"";
						// }
					// }
				// }
				// var bestColor = {index:0,count:0};
				// for(var i = 0; i < cCount.length; i += !""){
					// if(cCount[i] > bestColor.count){
						// bestColor.index = i;
						// bestColor.count = cCount[i];
					// }
				// }
				// if(bestColor.index != 0){
					// newmap.cells[a][b].color = newmap.cells[a][b].colors[bestColor.index];
				// }
			}else {
				newmap.cells[a][b].alive = false;
			}	
			
			// if(nCount < INTERVALA){
				// newval = false;
			// }else if(map.cells[a][b].alive && nCount <=INTERVALB && nCount >= INTERVALA){
				// newval = true;
			// }else if(map.cells[a][b].alive && nCount > INTERVALB){
				// newval = false;
			// }else if(nCount ==INTERVALB && map.landmap.cells[a][b]){
				// newval = true;//need a new colour
				// var cCount = new Array(map.cells[a][b].length).fill(0);
				// for(var i = 0; i < map.cells[a][b].length; i ++){
					// for(var j = 0; j < neighbourArr.length; j ++){
						// if(neighbourArr[j].color == map.cells[a][b].colors[i]){
							// cCount[i] += !"";
						// }
					// }
				// }
				// var bestColor = {index:0,count:0};
				// for(var i = 0; i < cCount.length; i += !""){
					// if(cCount[i] > bestColor.count){
						// bestColor.index = i;
						// bestColor.count = cCount[i];
					// }
				// }
				// newmap.cells[a][b].color = newmap.cells[a][b].colors[bestColor.index];
			// }
			
			// newmap.cells[a][b].alive = newval;
			
		}
	}
	return newmap;
}