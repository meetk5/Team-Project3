

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