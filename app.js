//let samples = data.data;

// let violation = data.sort((a, b) => b.ACTION - a.ACTION);

// slicedData = violation.slice(0, 10);

// reversedData = slicedData.reverse();

// let trace1 = {
//   x: reversedData.map(object => object.ACTION),
//   y: reversedData.map(object => object.RESTAURANT),
//   text: reversedData.map(object => object.RESTAURANT),
//   name: "Violation",
//   type: "bar",
//   orientation: "h"
// };

// let traceData = [trace1];

// let layout = {
//   title: "Violation gods search results",
//   margin: {
//     l: 100,
//     r: 100,
//     t: 100,
//     b: 100
//   }
// };
// Plotly.newPlot("bubble", traceData, layout);



//break point
//----------------------------------------------------------------------------------------


let dropDownCharacteristics = d3.select('#selDataset');
var cuisineType = ["Chinese", "American", "Greek"];
// initialize variables
let cuisineSelected;

 //plot bar and bubble charts
function plotting(nameID){
   d3.json("./Data/cleaned_db_Aug_31_new.json").then((data)=> {
// //get samples info from samples.json

     let samples = data.data;
     console.log("ID#",samples)
    
// //filtering info using names to call samples info from samples.json
    let name = samples.filter(object => object.index==nameID)[0];
    console.log("index#",name)
    let info = name["CUISINE_DESCRIPTION"]
    console.log("info", info)
    let display = d3.select("#sample-metadata");
   display.html("");
//loop to get metadata info into the demographics box
var obj = {};
samples.forEach(function(value){
//console.log(value)
if (obj[value["CUISINE_DESCRIPTION"]]) {
    obj[value["CUISINE_DESCRIPTION"]]++;
  }
  else {
    obj[value["CUISINE_DESCRIPTION"]] = 1;
  } 
})
console.log(obj)
let results = Object.keys(obj).map(e=>({type:e, count:obj[e]}))
console.log("results",results)
let barInfo = results.filter(ab=>ab.type)
let barLabels = barInfo[0]
console.log(barInfo)
 console.log("barLabels", barLabels)
//  let bc = results["type"];
//  function filterByKey(key){
//    return Object.create({[key]:bc[key]});
//  }
//  console.log(filterByKey(bc, key))
//  for(let i=0; i < results.length; i++)
// let x = barInfo["type"]
// console.log("x", x)
let xAxis = barLabels["type"];
console.log("type", xAxis)
let yAxis = barLabels["count"];
console.log(yAxis)
let aab = results.filter(ab=>ab.type)[0]["type"]
console.log("aab", aab)
// let typeRestaurants = [];
//  results.forEach(function(nums){
//   if (typeRestaurants[nums["type"]]) {
//     typeRestaurants[nums["type"]]++;
//   }
//   else {
//     typeRestaurants[nums["type"]] = 1;
//   } 
// }) 
// console.log(typeRestaurants)
//  })
   //plot bar graph
//    let trace1 = {
//     x: results.filter(ab=>ab.type)[0]["type"],
//     y: results.filter(ab=>ab.type)[0]["count"],
//     type: "bar",
//     orientation: "h",
//    };
//    let barchart = [trace1];
//    let labels = {
//      title: "Types of Restaurant in NYC"
//    };
//  //reference id="bar" from html
//   Plotly.newPlot("bubble", barchart, labels);

  
// var object = {};
// samples.forEach(function(numbers) {
  restaurantsTypes=[]
    for (var i = 0; i < results.length; i++) {
        restaurantsTypes.push(results[i].type);
    }
    console.log("restTypes", restaurantsTypes)
    let dropDown = d3. select("#selDataset");
            restaurantsTypes.forEach((c)=>{
            dropDown.append("option").text(c).property("value",c)
})
// let samplePlot = barInfo;
//       plotting(samplePlot);
//   console.log(object)  
// })
   
Object.entries(name).forEach(([a,b])=>{
    display.append("h5").text(`${a}:${b}`);



    
    
  });
});
}

// function init(){
 
 
// // //  // see dropdown
//   d3.json("./Data/cleaned_db_Aug.json").then((data) => {
//     let sampleNames = data.cuisine_description;
//     console.log(sampleNames);
// //     let names = sampleNames.filter(object => object.index);
// //     console.log("indexs#",names)
// //     let infos = names["CUISINE DESCRIPTION"]
// //     console.log("infos", infos)
    
// //     //parse data to get info wanted (names array)
// //    //get reference from select data append to options
// //     let dropDown = d3. select("#selDataset");
// //     infos.forEach((c)=>{
// //       dropDown.append("option").text(c).property("value",c)
// //     })
// //    //  see mymetadata and plotting for the first sample
//      let samplePlot = sampleNames[0];
//      plotting(samplePlot);
// //     // mymetadata(samplePlot);

// });
// };
// // function optionChanged(view) {
//   // plotting(view);
// //   //mymetadata(view);

// // };

// init()


plotting(1);

//break point
//------------------------------------------------------------------------

// function init(){
//     d3.json("./Data/cleaned_db_Aug_new.json").then((data) => {
//         let sampleNames = data.data;
//         console.log(sampleNames)
//         // let names = sampleNames.filter(object => object.index==cuisines)[0];
//         // console.log(names)
//         // let infos = names["CUISINE DESCRIPTION"]
//         //parse data to get info wanted (names array)
//        //get reference from select data append to options
//         let dropDown = d3. select("#selDataset");
//         cuisineType.forEach((c)=>{
//           dropDown.append("option").text(c).property("value",c)
//         })
//         //  //see mymetadata and plotting for the first sample
//         //  let samplePlot = sampleNames[0];
//         //  plotting(samplePlot);
//         //  mymetadata(samplePlot);
    
//     });
//     };
//     function optionChanged(view) {
//         plotting(view);
//         dropDown(view);
      
//       };
//       init()
    // let otu_ids = name.DBA;
    // let cuisine = data.CUISINE_DESCRIPTION;
    // console.log("cuisine", cuisine)
  //  let numCuisine = samples.CUISINE_DESCRIPTION.count(); 
//  //plot bar graph
//     let trace1 = {
//      x: cuisine,
//      y:  numCuisine,
//      type: "bar",
//      orientation: "h",
//     };
//     let barchart = [trace1];
//     let labels = {
//       title: "Types of Restaurants in NYC"
//     };
//   //reference id="bar" from html
//    Plotly.newPlot("bubble", barchart, labels);
//  });
// }

 
 //
  

  
 
// //plot bar and bubble charts
//function plotting(){
//   d3.json("./Data/cleaned_db_Aug.json").then((data) => {
// //get samples info from samples.json
//     const samples = data.Restaurant;
//     console.log(samples)
    
//   });
//}
//plotting()
//function test(myJSON){
    //   let samples = JSON.parse("./Data/cleaned_db_Aug.json");
    //   let data = data.Restaurant;
    //   myArray = JSON.parse(Restaurant);
    //   console.log(data);
    //   console.log(myArray)
      //  $(jQuery.parseJSON(JSON.stringify(Restaurant))).each(function(){
      //    var name = this.RESTAURANT
      //    var description =this.CUISINE_DESCRIPTION
      //    console.log(name)
      //    console.log(description)
     // }

    //test(myJSON)
// let restaurants = data["CUISINE DESCRIPTION"];
// let info = collect(restaurants);
// let total = info.count();
// console.log(total)
// let restaurants = data.sort((a, b) => b["CUISINE DESCRIPTION"] - a["CUISINE DESCRIPTION"]);
// slicedData = restaurants.slice(0, 10);
// // Reverse the array to accommodate Plotly's defaults
// reversedData = slicedData.reverse();

// // Trace1 for the Greek Data
// let trace1 = {
//   x: reversedData.map(object => object["CUISINE DESCRIPTION"]),
//   y: reversedData.map(object => object["RESTAURANT"]),
//   text: reversedData.map(object => object["RESTAURANT"]),
//   name: "Restaurants",
//   type: "bar",
//   orientation: "h"
// };

// // Data array
// // `data` has already been defined, so we must choose a new name here:
// let traceData = [trace1];

// // Apply a title to the layout
// let layout = {
//   title: "Greek gods search results",
//   margin: {
//     l: 100,
//     r: 100,
//     t: 100,
//     b: 100
//   }
// };

// // Render the plot to the div tag with id "plot"
// // Note that we use `traceData` here, not `data`
// Plotly.newPlot("bubble", traceData, layout);

// d3.json("./Data/cleaned_db_Aug.json").then(function(data) {
//     let restaurants = Object.values(data.restaurant);
//     console.log("Restaurants", restaurants)
// })