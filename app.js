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
//     let display = d3.select("#sample-metadata");
//    display.html("");
//    let bronxViolations = samples.filter(function(violation){
//     return violation.BORO =="Bronx"
// });
//   console.log(bronxViolations)
//   let bronxViolationCounts= getcounts(bronxViolations, "VIOLATION_DESC");
//   console.log("bronxviolationCounts", bronxViolationCounts)
//   console.log(Object.keys(bronxViolationCounts))
//   console.log(Object.values(bronxViolationCounts)); 
//   let bronxViolationResults = Object.keys(bronxViolationCounts).map(f=>({type:f, count:bronxViolationCounts[f]}))
//  console.log("bronxViolationResults",bronxViolationResults)
// // let sortedByCuisines = Object.keys(manhattanResults).sort((a, b) => b.count - a.count);
// // console.log("sortedbyCuisines", sortedByCuisines)
// let bronxViolationSortedByValues = Object.values(bronxViolationResults).sort((a, b) => b.count - a.count);
// console.log("bronxViolationsortedbyvalues", bronxViolationSortedByValues)
// // Slice the first 10 objects for plotting
// bronxViolationSlicedData = bronxViolationSortedByValues.slice(0, 5);
// console.log("bronxViolationSlicedData", bronxViolationSlicedData)
// bronxViolationDisplay=[]
//     for (var s = 0; s < bronxViolationSlicedData.length; s++) {
//         bronxViolationDisplay.push(bronxViolationSlicedData[s].type);
//     }
//     console.log("bronxdisplay", bronxViolationDisplay)
// //loop to get metadata info into the demographics box
// Object.entries(bronxViolationDisplay).forEach(([a,b])=>{
//   display.append("h5").text(`${a}:${b}`); 
// });
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
   

  
// let manhattanSamples = samples.filter(function(citation){
//   return citation.BORO =="Manhattan"
// });
// console.log("manhattanSamples", manhattanSamples)

// let manhattanCounts= getcounts(manhattanSamples, "CUISINE_DESCRIPTION");
// console.log("manhattanCounts", manhattanCounts)
// console.log(Object.keys(manhattanCounts))
//  let manhattanResults = Object.keys(manhattanCounts).map(f=>({type:f, count:manhattanCounts[f]}))
//  console.log("manhattanResults",manhattanResults)
// // let sortedByCuisines = Object.keys(manhattanResults).sort((a, b) => b.count - a.count);
// // console.log("sortedbyCuisines", sortedByCuisines)
// let sortedByValues = Object.values(manhattanResults).sort((a, b) => b.count - a.count);
// console.log("sortedbyvalues", sortedByValues)
// // Slice the first 10 objects for plotting
// slicedData = sortedByValues.slice(0, 10);

// // Reverse the array to accommodate Plotly's defaults
// reversedData = slicedData.reverse();
//   let trace1 = {
//     x: reversedData.map(object => object.count),
//     y: reversedData.map(object => object.type),
//     text: reversedData.map(object => object.type),
//     type: "bar",
//     orientation: "h",
//    };
//    let barchart = [trace1];
//    let labels = {
//      title: "Top Ten Most Popular Cuisines in Manhattan"
//    };
//  //reference id="bar" from html
//   Plotly.newPlot("topten", barchart, labels);

//   let queensSamples = samples.filter(function(citation){
//     return citation.BORO =="Queens"
//   });
//   console.log("QueensSamples", queensSamples)
  
//   let queensCounts= getcounts(queensSamples, "CUISINE_DESCRIPTION");
//   console.log("queensCounts", queensCounts)
//   console.log(Object.keys(queensCounts))
//    let queensResults = Object.keys(queensCounts).map(f=>({type:f, count:queensCounts[f]}))
//    console.log("queensResults", queensResults)
//   // let sortedByCuisines = Object.keys(manhattanResults).sort((a, b) => b.count - a.count);
//   // console.log("sortedbyCuisines", sortedByCuisines)
//   let queensSortedByValues = Object.values(queensResults).sort((a, b) => b.count - a.count);
//   console.log("queenssortedbyvalues", queensSortedByValues)
//   // Slice the first 10 objects for plotting
//   queensSlicedData = queensSortedByValues.slice(0, 10);
  
//   // Reverse the array to accommodate Plotly's defaults
//   queensReversedData = queensSlicedData.reverse();
//     let trace2 = {
//       x: queensReversedData.map(object => object.count),
//       y: queensReversedData.map(object => object.type),
//       text: queensReversedData.map(object => object.type),
//       type: "bar",
//       orientation: "h",
//      };
//      let barchart1 = [trace2];
//      let labels2 = {
//        title: "Top Ten Most Popular Cuisines in Queens"
//      };
//    //reference id="bar" from html
//     Plotly.newPlot("toptenqueens", barchart1, labels2);

//     let bronxSamples = samples.filter(function(citation){
//       return citation.BORO =="Bronx"
//     });
//     console.log("bronxSamples", bronxSamples)
    
//     let bronxCounts= getcounts(bronxSamples, "CUISINE_DESCRIPTION");
//     console.log("bronxCounts", bronxCounts)
//     console.log(Object.keys(bronxCounts))
//      let bronxResults = Object.keys(bronxCounts).map(f=>({type:f, count:bronxCounts[f]}))
//      console.log("bronxResults", bronxResults)
//     // let sortedByCuisines = Object.keys(manhattanResults).sort((a, b) => b.count - a.count);
//     // console.log("sortedbyCuisines", sortedByCuisines)
//     let bronxSortedByValues = Object.values(bronxResults).sort((a, b) => b.count - a.count);
//     console.log("bronxsortedbyvalues", bronxSortedByValues)
//     // Slice the first 10 objects for plotting
//     bronxSlicedData = bronxSortedByValues.slice(0, 10);
    
//     // Reverse the array to accommodate Plotly's defaults
//     bronxReversedData = bronxSlicedData.reverse();
//       let trace3 = {
//         x: bronxReversedData.map(object => object.count),
//         y: bronxReversedData.map(object => object.type),
//         text: bronxReversedData.map(object => object.type),
//         type: "bar",
//         orientation: "h",
//        };
//        let barchart2 = [trace3];
//        let labels3 = {
//          title: "Top Ten Most Popular Cuisines in the Bronx"
//        };
//      //reference id="bar" from html
//       Plotly.newPlot("toptenbronx", barchart2, labels3);

//       let brooklynSamples = samples.filter(function(citation){
//         return citation.BORO =="Brooklyn"
//       });
//       console.log("brooklynSamples", brooklynSamples)
      
//       let brooklynCounts= getcounts(brooklynSamples, "CUISINE_DESCRIPTION");
//       console.log("brooklynCounts", brooklynCounts)
//       console.log(Object.keys(brooklynCounts))
//        let brooklynResults = Object.keys(brooklynCounts).map(f=>({type:f, count:brooklynCounts[f]}))
//        console.log("brooklynResults", brooklynResults)
//       // let sortedByCuisines = Object.keys(manhattanResults).sort((a, b) => b.count - a.count);
//       // console.log("sortedbyCuisines", sortedByCuisines)
//       let brooklynSortedByValues = Object.values(brooklynResults).sort((a, b) => b.count - a.count);
//       console.log("brooklynsortedbyvalues", brooklynSortedByValues)
//       // Slice the first 10 objects for plotting
//       brooklynSlicedData = brooklynSortedByValues.slice(0, 10);
      
//       // Reverse the array to accommodate Plotly's defaults
//       brooklynReversedData = brooklynSlicedData.reverse();
//         let trace4 = {
//           x: brooklynReversedData.map(object => object.count),
//           y: brooklynReversedData.map(object => object.type),
//           text: brooklynReversedData.map(object => object.type),
//           type: "bar",
//           orientation: "h",
//          };
//          let barchart3 = [trace4];
//          let labels4 = {
//            title: "Top Ten Most Popular Cuisines in the Brooklyn"
//          };
//        //reference id="bar" from html
//         Plotly.newPlot("toptenbrooklyn", barchart3, labels4);
//         let statenIslandSamples = samples.filter(function(citation){
//           return citation.BORO =="Staten Island"
//         });
//         console.log("brooklynSamples", brooklynSamples)
        
//         let statenIslandCounts= getcounts(statenIslandSamples, "CUISINE_DESCRIPTION");
//         console.log("statenIslandCounts", statenIslandCounts)
//         console.log(Object.keys(statenIslandCounts))
//          let statenIslandResults = Object.keys(statenIslandCounts).map(f=>({type:f, count:statenIslandCounts[f]}))
//          console.log("statenIslandResults", statenIslandResults)
//         // let sortedByCuisines = Object.keys(manhattanResults).sort((a, b) => b.count - a.count);
//         // console.log("sortedbyCuisines", sortedByCuisines)
//         let statenIslandSortedByValues = Object.values(statenIslandResults).sort((a, b) => b.count - a.count);
//         console.log("statenIslandsortedbyvalues", statenIslandSortedByValues)
//         // Slice the first 10 objects for plotting
//         statenIslandSlicedData = statenIslandSortedByValues.slice(0, 10);
        
//         // Reverse the array to accommodate Plotly's defaults
//         statenIslandReversedData = statenIslandSlicedData.reverse();
//           let trace5 = {
//             x: statenIslandReversedData.map(object => object.count),
//             y: statenIslandReversedData.map(object => object.type),
//             text: statenIslandReversedData.map(object => object.type),
//             type: "bar",
//             orientation: "h",
//            };
//            let barchart4 = [trace5];
//            let labels5 = {
//              title: "Top Ten Most Popular Cuisines in the Staten Island"
//            };
//          //reference id="bar" from html
//           Plotly.newPlot("toptenstatenisland", barchart4, labels5);
});
};

//plotting(0);


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
    var obj = {};
sampleNames.forEach(function(value){
//console.log(value)
if (obj[value["CUISINE_DESCRIPTION"]]) {
    obj[value["CUISINE_DESCRIPTION"]]++;
  }
  else {
    obj[value["CUISINE_DESCRIPTION"]] = 1;
  } 
});
    let results = Object.keys(obj).map(e=>({type:e, count:obj[e]}))
    cities=[]
    for (var j = 0; j < boroInfo.length; j++) {
      cities.push(boroInfo[j].boro);
  }
  restaurantsTypes=[]
    for (var i = 0; i < results.length; i++) {
        restaurantsTypes.push(results[i].type);
    }
    cities.shift()
     console.log("cities",cities)
//parse data to get info wanted (names array)
   //get reference from select data append to options
      let dropDown = d3. select("#selDataset");
              cities.forEach((c)=>{
              dropDown.append("option").text(c).property("value",c)
  });
  let dropDown2 = d3. select("#selDataset2");
  restaurantsTypes.forEach((o)=>{
  dropDown2.append("option").text(o).property("value",o)
})
    
    
     //see mymetadata and plotting for the first sample
     //let samplePlot = cities[0];
     pieChart("Manhattan");
     

});
};
 function optionChanged(boro) {
   pieChart(boro);
 
 };

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