/// <reference path="./libraries/p5.global-mode.d.ts" />

var data = {};
var bounds = {};

// Put any asynchronous data loading in preload to complete before "setup" is run
function preload() {
	data = loadJSON('bern.geojson');
  }
function setup () {
	createCanvas( 800, 600);

	console.log(data);
	frameRate(30);

	//loop through features to get minLatitude, maxLatitude, minLongitute, maxLongitute
	for(var i=0; i<features.length; i++){
		var f = features[i];
		var coordinatesArray = f.geometry.coordinates;
		for(var j=0; j<coordinatesArray.length; j++){
			var aContour = coordinatesArray[j];
			var coords = aContour[0];
			console.log('coords');
			console.log(coords);
			for(var k=0; k<coords.length; j++){
				var lonlat = coords[k];
				
			}
		}
	}

	noLoop();
}

function draw () {

	background(200);

	var features = data.features;

	//loop through features
	for(var i=0; i<features.length; i++){
		var f = features[i];
		var coordinatesArray = f.geometry.coordinates;
		for(var j=0; j<coordinatesArray.length; j++){
			var aContour = coordinatesArray[j];
			var coords = aContour[0];
			console.log('coords');
			console.log(coords);
			for(var k=0; k<coords.length; j++){
				var lonlat = coords[k];

			}
		}
	}


}


//calculates minimum and maximum latitude / longitude values from a geojson object
function getBounds(geojson){

	var bnd = {
		minLat: Number.MAX_VALUE,
		maxLat: Number.MIN_VALUE,
		minLon: Number.MAX_VALUE,
		maxLon: Number.MIN_VALUE
	};

	var features = data.features;

	//loop through features
	for(var i=0; i<features.length; i++){
		var f = features[i];
		var coordinatesArray = f.geometry.coordinates;
		for(var j=0; j<coordinatesArray.length; j++){
			var aContour = coordinatesArray[j];
			var coords = aContour[0];
			console.log('coords');
			console.log(coords);
			for(var k=0; k<coords.length; j++){
				var lonlat = coords[k];
				var lon = lonlat[0];
				var lat = lonlat[1];
				if(lat < bnd.minLat){
					bnd.minLat = lat;
				}
				else if(lat > bnd.maxLat){
					bnd.maxLat = lat;
				}
				if(lon < bnd.minLon){
					bnd.minLon = lon;
				}
				else if(lon > bnd.maxLon){
					bnd.maxLon = lon;
				}
			}
		}
	}
}



