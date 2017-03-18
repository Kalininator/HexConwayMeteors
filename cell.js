function Cell(r,g,b){
	this.colors = ["Crimson", "Gold", "LightSalmon", "MediumSlateBlue", "AliceBlue"];
	this.color = this.colors[getRandomInt(0,4)];
	this.alive = true;
}