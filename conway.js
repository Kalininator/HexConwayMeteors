function Conway(){
	
	var nCount = new Array[this.width];
	for(var i = 0; i < this.width; i++){
		nCount[i] = new Array[this.height];
	}
	for(var a = 0; x < width; x++){
		for(var b = 0; y < height; y++){
			var neighbourArr = checkNeighbour(a,b);
			nCount[a][b] = 0;
			for(var nC = 0; nC < 6; nC++){
				if(neighbourArr[nC].alive == true){
					nCount[a][b]++;
				}
			}
		}
	
	for(var a = 0; x < width; x++){
		for(var b = 0; y < height; y++){
			
			}
		}
}