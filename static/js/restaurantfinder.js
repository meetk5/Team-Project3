
function createMarkers() {
  d3.json("/cuisines").then(function (data) {
    //console.log(data)      
    //let restaurants=data;
    let restaurantMarkers = [];
    let restaurants = Object.values(data)
    //console.log(restaurants)  

    for (var i = 0; i < restaurants.length; i++) {
      let restaurant = restaurants[i];
      //console.log(restaurants)

      let restaurantMarker = L.marker([restaurant.latitude, restaurant.longitude])
        .bindPopup("<h3>Restaurant: " + restaurant.restaurant + "<h3><h3>Cuisines: " + restaurant.cuisine_description + "<h3><h3>Boro: " + restaurant.boro + "<h3><h3>Phone: " + restaurant.phone + "</h3>");
      restaurantMarkers.push(restaurantMarker);
      console.log(restaurantMarker)   
    };
    //console.log(restaurantMarkers)
    createBorough(L.layerGroup(restaurantMarkers));

  });
};


function createBorough(previous) {
  // Use this link to get the GeoJSON data.
  var link = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/nyc.geojson";

  // The function that will determine the color of a neighborhood based on the borough that it belongs to
  function chooseColor(borough) {
    if (borough == "Brooklyn") return "yellow";
    else if (borough == "Bronx") return "red";
    else if (borough == "Manhattan") return "orange";
    else if (borough == "Queens") return "green";
    else if (borough == "Staten Island") return "purple";
    else return "black";
  }

  // Getting our GeoJSON data
  d3.json(link).then(function (data1) {
    // Creating a GeoJSON layer with the retrieved data
    var boro = L.geoJson(data1, {
      style: function (feature) {
        return {
          color: "white",
          fillColor: chooseColor(feature.properties.borough),
          fillOpacity: 0.5,
          weight: 1.5
        };
      }
    });
    console.log(boro)
    createMap(boro, previous);
  });

}


function createMap(boro, restaurantLocations) {

  // Create the tile layer that will be the background of our map
  var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>"',
    maxZoom: 18,
  });

  var baseMaps = {
    "Street Map": streetmap
  };

  // Create an overlayMaps object to hold the restaurantLocations layer
  var overlayMaps = {
    "Restaurant Finder": restaurantLocations,
    "Borough": boro
  };

  // Create the map object with options
  var map = L.map("map-id", {
    center: [40.73, -74.0059],
    zoom: 11,
    layers: [streetmap, boro, restaurantLocations]

  });
console.log("line84")
  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps).addTo(map);
  console.log("line87")
  //boro.addTo(map)
}


createMarkers();

//------------
function search_restaurants() {
  d3.json("/cuisines").then((data) => {
  let sampleNames = [];
    for (var i = 0; i < data.length; i++) {
      sampleNames.push(Object.values(data)[i]);
  }
    var boroNames = {};
    sampleNames.forEach(function(typeBoro){
    //console.log(value)
    //loop to find same boros, if not same boro, add to object, if same add to count
    if (boroNames[typeBoro["restaurant"]]) {
        boroNames[typeBoro["restaurant"]]++;
      }
      else {
        boroNames[typeBoro["restaurant"]] = 1;
      } 
    })

    //Trying to creat a searchbar for restaurant finder page
    let results = Object.keys(boroNames).map(e => ({ type: e, count: boroNames[e] }))
    console.log("results", results)
    //find all the different cuisines and put it in a list
    restaurantsTypes = []
    for (var i = 0; i < results.length; i++) {
        restaurantsTypes.push(results[i].type);
  let input = results.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = results.getElementsByClassName('type');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
  
  }
})

  }
function getcounts(dataArray, myParam){
    
  var finalArray = {};
  dataArray.forEach(function (boroNames) {
      //console.log(value)
      if (finalArray[boroNames[myParam]]) {
          finalArray[boroNames[myParam]]++;
      }
      else {
          finalArray[boroNames[myParam]] = 1;
      }
  });
  return finalArray;

}
