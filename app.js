function mymetadata(sample) {
    d3.json("restaurant_grades.json").then((data) => {
  //get metadata information from samples.json
     let restaurants = data.restaurants
     console.log(restaurants);
     console.log(data)
  //pulling metadata objects out of array
    let myarray = restaurants.filter(sampleobject => sampleobject.BORO==sample);
    let result = myarray[0];
    console.log(myarray);
    console.log(result);
  // //reference from index.html "sample-metadata"
    let display = d3.select("#sunburst");
    display.html("");
  // //loop to get metadata info into the demographics box
    Object.entries(result).forEach(([a,b])=>{
      display.append("h5").text(`${a}:${b}`);
  });
});
}