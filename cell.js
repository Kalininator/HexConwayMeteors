function Cell(r,g,b){
	this.colors = ["Crimson", "Gold", "LightSalmon", "MediumSlateBlue", "AliceBlue"];
	this.color = colors[Math.random(0, 4)];
	this.alive = true;
}