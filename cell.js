function Cell(x,y){
	this.colors = ["Red", "Yellow", "Magenta", "Lime", "Aqua"];
	this.x = x;
	this.y = y;
	//this.color = this.colors[getRandomInt(0,4)];
	
	this.alive = false;
	
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