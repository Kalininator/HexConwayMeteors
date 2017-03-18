function Cell(){
	this.colors = ["Crimson", "Gold", "LightSalmon", "MediumSlateBlue", "AliceBlue"];
	//this.color = this.colors[getRandomInt(0,4)];
	
	if(Math.random() < 0.3){
		this.alive = true;
		this.color = this.colors[getRandomInt(0,1)];
	} else{
		this.alive = false;
		this.color = "Black";
	}
	
	//this.alive = true;
}