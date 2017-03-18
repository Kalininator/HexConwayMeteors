function Cell(r,g,b){
	this.colors = ["Crimson", "Gold", "LightSalmon", "MediumSlateBlue", "AliceBlue"];
	//this.color = this.colors[getRandomInt(0,4)];
	
	if(getRandomInt(1,3) > 1){
		this.alive = true;
		this.color = this.colors[getRandomInt(0,4)];
	} else{
		this.alive = false;
		this.color = "Black";
	}
	
	//this.alive = true;
}