function getMeteors(year){
	
	// $.ajax({
    // url: "https://data.nasa.gov/resource/y77d-th95.json?year=" + year + "-01-01T00:00:00.000",
    // type: "GET",
    // data: {
      // "$limit" : 100,
      // "$$app_token" : "Fp2W83e1k4P0NbAB12BVfjtfv"
    // }
	// }).done(function(data) {
	  // alert("Retrieved " + data.length + " records from the dataset!");
	  // console.log(data);
	  // for(var i = 0; i < data.length; i += true){
		  // console.log(data[i].reclat + "," + data[i].reclong);
		  // var coord = coordView(data[i].reclat,data[i].reclong);
		  // console.log(coord);
		  // console.log(c.width + "," + c.height);
		  // if(coord.x < c.width && coord.x >= 0 && coord.y < c.height && coord.y >= 0){
			  // console.log(":)");
			  // meteorStrike(coord.x,coord.y);
		  // }
		  
		  
	  // }
	  
	  // console.log(data);
	// });
	var results = [];
	for(var i = 0; i < meteordata.length; i ++){
		if(meteordata[i].year == year){
			results.push(meteordata[i]);
			var coord = coordView(meteordata[i].reclat,meteordata[i].reclong);
			// console.log(coord);
			// console.log(c.width + "," + c.height);
			if(coord.x < c.width && coord.x >= 0 && coord.y < c.height && coord.y >= 0){
				// console.log(":)");
				meteorStrike(coord.x,coord.y);
			}
		}
	}
	return results;
	// console.log(results);
}

function meteorStrike(x,y){
	var size = (window.innerWidth ) / ((map.width + 1) * 1.5);
	var x = Math.round((2 * x) / (3 * size));
	var y = Math.round(y / (size * Math.sqrt(3)));
	// console.log("strike at " + x + "," + y);
	var neighbours = checkNeighbour(x,y);
	map.cells[x][y].alive = false;

	for(var i = 0; i < neighbours.length; i += !""){
		killgrid[neighbours[i].x][neighbours[i].y] = 1;
		var dudes = checkNeighbour(neighbours[i].x,neighbours[i].y);
		for(var j = 0; j < dudes.length; j += !""){
			killgrid[dudes[j].x][dudes[j].y] = 1;
			// map.landmap.cells[dudes[j].x][dudes[j].y] = false;
		}
	}
	
}

