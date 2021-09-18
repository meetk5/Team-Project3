
function createMarkers() {    
  d3.json("../data/cleanDb_Aug_31cuisines.json").then(function (data) {
  //console.log(data)      
    //let restaurants=data;
    let restaurantMarkers=[];
    let restaurants=Object.values(data)
    //console.log(restaurants)         

      for (var i = 0; i < restaurants.length; i++) {    
        let restaurant=restaurants[i];
        //console.log(restaurants)
        
        let restaurantMarker =L.marker([restaurant.Latitude, restaurant.Longitude])
          .bindPopup("<h3>Restaurant:" + restaurant.RESTAURANT + "<h3><h3>Cuisines:" + restaurant.CUISINE_DESCRIPTION + "<h3><h3>Phone:" + restaurant.PHONE + "</h3>");
        restaurantMarkers.push(restaurantMarker);   
        //console.log(restaurantMarkers)   
      }; 
    // console.log(restaurantMarkers)  
    createMap(L.layerGroup(restaurantMarkers)); 

  });
};         

function createMap(restaurantLocations) {

    // Create the tile layer that will be the background of our map
    var streetmap = L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>"',
      maxZoom: 18,
    });
  
    var baseMaps = {
      "Street Map": streetmap
    };
    
    // Create an overlayMaps object to hold the restaurantLocations layer
    var overlayMaps = {
      "Restaurant Finder": restaurantLocations
    };
    
      // Create the map object with options
    var map = L.map("map-id", {
      center: [40.73, -74.0059],
      zoom: 12,
      layers: [streetmap, restaurantLocations]
    
    });
    
      // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(map);
};
createMarkers();