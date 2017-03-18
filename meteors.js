function getMeteors(year){
	
	$.ajax({
    url: "https://data.nasa.gov/resource/y77d-th95.json?year=" + year + "-01-01T00:00:00.000",
    type: "GET",
    data: {
      "$limit" : 100,
      "$$app_token" : "Fp2W83e1k4P0NbAB12BVfjtfv"
    }
	}).done(function(data) {
	  alert("Retrieved " + data.length + " records from the dataset!");
	  
	  for(var i = 0; i < data.length; i += true){
		  //console.log(data[i].reclat + "," + data[i].reclong);
		  coordView(data[i].reclat,data[i].reclong);
	  }
	  
	  //console.log(data);
	});
	
}