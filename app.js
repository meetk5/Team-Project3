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
    let info = name.CUISINE_DESCRIPTION
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
});

console.log(obj)

let results = Object.keys(obj).map(e=>({type:e, count:obj[e]}))
console.log("results",results)
let barInfo = results.filter(ab=>ab.type)
let barLabels = barInfo[0]
//console.log(barInfo)
 console.log("barLabels", barLabels)

 
//  let bc = results["type"];
//  function filterByKey(key){
//    return Object.create({[key]:bc[key]});
//  }
//  console.log(filterByKey(bc, key))
//  for(let i=0; i < results.length; i++)
// let x = barInfo["type"]
// console.log("x", x)
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

  
// var object = {};
// samples.forEach(function(numbers) {
  restaurantsTypes=[]
    for (var i = 0; i < results.length; i++) {
        restaurantsTypes.push(results[i].type);
    }
    console.log("restTypes", restaurantsTypes);
    numbers = []
    for (var i = 0; i < results.length; i++) {
        numbers.push(results[i].count);
    }
    console.log("numbers", numbers);
// let samplePlot = barInfo;
//       plotting(samplePlot);
//   console.log(object)  
// })
   
Object.entries(name).forEach(([a,b])=>{
    display.append("h5").text(`${a}:${b}`);
    
  });
  
let manhattanSamples = samples.filter(function(citation){
  return citation.BORO =="Manhattan"
});
console.log("manhattanSamples", manhattanSamples)

let manhattanCounts= getcounts(manhattanSamples, "CUISINE_DESCRIPTION");
console.log("manhattanCounts", manhattanCounts)
console.log(Object.keys(manhattanCounts))
 let manhattanResults = Object.keys(manhattanCounts).map(f=>({type:f, count:manhattanCounts[f]}))
 console.log("manhattanResults",manhattanResults)
// let sortedByCuisines = Object.keys(manhattanResults).sort((a, b) => b.count - a.count);
// console.log("sortedbyCuisines", sortedByCuisines)
let sortedByValues = Object.values(manhattanResults).sort((a, b) => b.count - a.count);
console.log("sortedbyvalues", sortedByValues)
// Slice the first 10 objects for plotting
slicedData = sortedByValues.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
reversedData = slicedData.reverse();
  let trace1 = {
    x: reversedData.map(object => object.count),
    y: reversedData.map(object => object.type),
    text: reversedData.map(object => object.type),
    type: "bar",
    orientation: "h",
   };
   let barchart = [trace1];
   let labels = {
     title: "Top Ten Most Popular Cuisines in each Boro"
   };
 //reference id="bar" from html
  Plotly.newPlot("topten", barchart, labels);
});
};

plotting(0);


function init(){
 
 
// //  // see dropdown
  d3.json("./Data/cleaned_db_Aug_31_new.json").then((data) => {
    let sampleNames = data.data;
    var boroNames = {};
    sampleNames.forEach(function(typeBoro){
    //console.log(value)
    if (boroNames[typeBoro["BORO"]]) {
        boroNames[typeBoro["BORO"]]++;
      }
      else {
        boroNames[typeBoro["BORO"]] = 1;
      } 
    })

    console.log("boroNames", boroNames)
    let boroInfo = Object.keys(boroNames).map(e=>({boro:e, count:boroNames[e]}))
    console.log("boroInfo", boroInfo)

    cities=[]
    for (var j = 0; j < boroInfo.length; j++) {
      cities.push(boroInfo[j].boro);
  }
     
//parse data to get info wanted (names array)
   //get reference from select data append to options
      let dropDown = d3. select("#selDataset");
              cities.forEach((c)=>{
              dropDown.append("option").text(c).property("value",c)
  })
    
    
     //see mymetadata and plotting for the first sample
     let samplePlot = cities[0];
     plotting(samplePlot);
     

});
};
// function optionChanged(view) {
//   plotting(view);
 
// };

init()

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