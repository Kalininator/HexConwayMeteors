function Cell(x,y,c, bol){
	this.colors = ["aqua", "white", "Lime", "Red", "DeepSkyBlue", "Purple", "Linen", "Darkblue", "Firebrick", "DarkOrange", "White"];
	this.x = x;
	this.y = y;
	//this.color = this.colors[getRandomInt(0,4)];
	this.color = this.colors[c];
	this.alive = bol;
	
	/*
	if(Math.random() < 0.2){
		this.alive = true;
		this.color = this.colors[getRandomInt(0,4)];
	} else{
		this.alive = false;
		this.color = "Black";
	}
	*/
	
	//this.alive = true;
}