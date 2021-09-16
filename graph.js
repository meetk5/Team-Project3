d3.json("./Data/cleaned_db_Aug_31_new.json").then((data)=> {
    // //get samples info from samples.json
    
         let samples = data.data;
         console.log("ID#",samples)
        
    // //filtering info using names to call samples info from samples.json
        let name = samples.filter(object => object.index)[0];
        console.log("#",name)
        let info = name["CUISINE_DESCRIPTION"]
        console.log("in", info)
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
    restaurantsTypes=[]
    for (var i = 0; i < results.length; i++) {
        restaurantsTypes.push(results[i].type);
    }
    console.log("restTypes", restaurantsTypes)
    numbers=[]
    for (var i = 0; i < results.length; i++) {
        numbers.push(results[i].count);
    }
    console.log("numbers", numbers)
    // let restCount ={};
    // for (var i = 0; i <results.legnth; i++){
    //     restCount[restaurantsTypes[i]] = 1 + (restCount[restaurantsTypes[i]]||0);
    // }
    // console.log(Object.keys("restCount", restCount))
  
    
       //plot bar graph
       let trace1 = {
        x: restaurantsTypes,
        y: numbers,
        type: "bar",
        orientation: "v",
       };
       let barchart = [trace1];
       let labels = {
         title: "Types of Restaurant in NYC"
       };
     //reference id="bar" from html
      Plotly.newPlot("gauge", barchart, labels);
    })
d3.json("./Data/cleaned_db_Aug_31_new.json").then((data)=> {
    // //get samples info from samples.json
    
         let samples = data.data;
         console.log("ID#",samples)
        
    // //filtering info using names to call samples info from samples.json
        let name = samples.filter(object => object.index)[0];
        console.log("#",name)
        let info = name["CUISINE_DESCRIPTION"]
        console.log("in", info)
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
    restaurantsTypes=[]
    for (var i = 0; i < results.length; i++) {
        restaurantsTypes.push(results[i].type);
    }
    console.log("restTypes", restaurantsTypes)
    numbers=[]
    for (var i = 0; i < results.length; i++) {
        numbers.push(results[i].count);
    }
    console.log("numbers", numbers)
    // let restCount ={};
    // for (var i = 0; i <results.legnth; i++){
    //     restCount[restaurantsTypes[i]] = 1 + (restCount[restaurantsTypes[i]]||0);
    // }
    // console.log(Object.keys("restCount", restCount))
  
    
       //plot bar graph
       let trace1 = {
        x: restaurantsTypes,
        y: numbers,
        type: "bar",
        orientation: "v",
       };
       let barchart = [trace1];
       let labels = {
         title: "Types of Restaurant in NYC"
       };
     //reference id="bar" from html
      Plotly.newPlot("bubble", barchart, labels);
// ---------------------------------------------------------------------------
const twoLabels = { data: samples.map(({BORO , CUISINE_DESCRIPTION}) => ({BORO, CUISINE_DESCRIPTION})) };    
console.log("twoLabels", twoLabels)
var boro = {};
    samples.forEach(function(boroNames){
    //console.log(value)
    if (boro[boroNames["BORO"]]) {
        boro[boroNames["BORO"]]++;
    }
    else {
        boro[boroNames["BORO"]] = 1;
    } 
    })
    console.log("boro", boro)
    let numBoros = Object.keys(boro).map(e=>({boro:e, count:boro[e]}));
    console.log("numboro",numBoros);
    boroTypes=[]
    for (var i = 0; i < numBoros.length; i++) {
        boroTypes.push(numBoros[i].boro);
    }
    console.log("boroTypes", boroTypes)
    let boroCount ={};
    for (var i = 0; i <boroTypes.length; i++) {
        boroCount[boroTypes[i]] = 1+ (boroCount[boroTypes[i]] || 0);
    }
    console.log(Object.keys(boroCount))
    let boroCu = Object.keys(boroCount).map(function (key){
        return boroCount[key];
    })
    console.log("boroCu", boroCu)
    // var pieChart = [{
    //     values: numbers,
    //     labels: restaurantsTypes,
    //     type: 'pie',
    //     name: 'Dog Gender',
    //     marker: {
    //         colors: ultimateColors[2]
    //     },
    //     domain: {
    //         row: 0,
    //         column: 0
    //     },
    //     hoverinfo: 'none',
    //     textinfo: 'label+percent+name',
    //     title: 'Dog Gender',
    //     "titlefont": {"size":24}
    // }, {
    //     values: cat_values.sort(),
    //     labels: Object.keys(cat_counts_dict).sort(),
    //     type: 'pie',
    //     name: 'Cat Gender',
    //     marker: {
    //         colors: ultimateColors[2]
    //     },
    //     domain: {
    //         row: 0,
    //         column: 1
    //     },
    //     hoverinfo: 'none',
    //     textinfo: 'label+percent+name',
    //     title: 'Cat Gender',
    //     "titlefont": {"size":24}
    // }];

    // var layout = {
    //     height: 500,
    //     width: 1000,
    //     grid: { rows: 1, columns: 2 },
    // };

    // Plotly.newPlot('pet_sexes_pie', data, layout);

        })

