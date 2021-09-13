//console.log(restaurants)

// function mymetadata(sample) {
//     d3.json("restaurant_grades.json").then((data) => {
//   //get metadata information from samples.json
//      let restaurants = data.restaurants
//      console.log(restaurants);
//      console.log(data)
//   //pulling metadata objects out of array
//     let myarray = restaurants.filter(sampleobject => sampleobject.CUISINE_DESCRIPTION==sample);
//     let result = myarray[0];
//     console.log(myarray);
//     console.log(result);
//   // //reference from index.html "sample-metadata"
//     let display = d3.select("#sunburst");
//     display.html("");
//   // //loop to get metadata info into the demographics box
//     Object.entries(result).forEach(([a,b])=>{
//       display.append("h5").text(`${a}:${b}`);
//   });
// });
// }

// //plot bar and bubble charts
function plotting(nameID){
  d3.json("restaurants.json").then((data) => {
//get samples info from samples.json
    let samples = data.DBA;
    let cuisine= data.CUISINE_DESCRIPTION
    console.log("ID#",samples)
//filtering info using names to call samples info from samples.json
    let name = data.filter(object => object.CAMIS==nameID)[0];
    // console.log(name)
    //let otu_ids = name.DBA;
    //let otu_labels = name.GRADE;
    //let sample_values = name.CUISINE_DESCRIPTION; 
 //plot bar graph
    let trace1 = {
     x: data.DBA,
     y:  data.CUISINE_DESCRIPTION,
     type: "bar",
     orientation: "h",
    };
    let barchart = [trace1];
    let labels = {
      title: "Restaurants in NYC"
    };
  //reference id="bar" from html
   Plotly.newPlot("bubble", barchart, labels);
  });
}
  plotting(30075445);
 
