d3.json("./Data/cleaned_db_Aug_31_new.json").then((data) => {
    // //get samples info from samples.json

    let samples = data.data;
    console.log("ID#", samples)

    // //filtering info using names to call samples info from samples.json
    let name = samples.filter(object => object.index)[0];
    console.log("#", name)
    let info = name["CUISINE_DESCRIPTION"]
    console.log("in", info)
    let display = d3.select("#sample-metadata");
    display.html("");
    //loop to get metadata info into the demographics box
    var obj = {};
    samples.forEach(function (value) {
        //console.log(value)
        if (obj[value["CUISINE_DESCRIPTION"]]) {
            obj[value["CUISINE_DESCRIPTION"]]++;
        }
        else {
            obj[value["CUISINE_DESCRIPTION"]] = 1;
        }
    })
    console.log(obj)


    let results = Object.keys(obj).map(e => ({ type: e, count: obj[e] }))
    console.log("results", results)
    restaurantsTypes = []
    for (var i = 0; i < results.length; i++) {
        restaurantsTypes.push(results[i].type);
    }
    console.log("restTypes", restaurantsTypes)
    numbers = []
    for (var i = 0; i < results.length; i++) {
        numbers.push(results[i].count);
    }
    console.log("numbers", numbers)

    d3.json("./Data/cleaned_db_Aug_31_new.json").then((data) => {
        // //get samples info from samples.json

        let samples = data.data;
        console.log("ID#", samples)

        // //filtering info using names to call samples info from samples.json
        let name = samples.filter(object => object.index)[0];
        console.log("#", name)
        let info = name["CUISINE_DESCRIPTION"]
        console.log("in", info)
        let display = d3.select("#sample-metadata");
        display.html("");
        //loop to get metadata info into the demographics box
        var obj = {};
        samples.forEach(function (value) {
            //console.log(value)
            if (obj[value["CUISINE_DESCRIPTION"]]) {
                obj[value["CUISINE_DESCRIPTION"]]++;
            }
            else {
                obj[value["CUISINE_DESCRIPTION"]] = 1;
            }
        })
        console.log(obj)


        let results = Object.keys(obj).map(e => ({ type: e, count: obj[e] }))
        console.log("results", results)
        restaurantsTypes = []
        for (var i = 0; i < results.length; i++) {
            restaurantsTypes.push(results[i].type);
        }
        console.log("restTypes", restaurantsTypes)
        numbers = []
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
})

function pieChart(boro) {
    d3.json("./Data/cleaned_db_Aug_31_new.json").then((data) => {
        // //get samples info from samples.json

        let samples = data.data;
        console.log("ID#", samples)
        const twoLabels = { data: samples.map(({ BORO, CUISINE_DESCRIPTION }) => ({ BORO, CUISINE_DESCRIPTION })) };
        console.log("twoLabels", twoLabels)

        // mahattan cuisines
        let boroSamples = samples.filter(function (citation) {
            return citation.BORO == boro
        });
        console.log(boroSamples)
        let boroCounts = getcounts(boroSamples, "CUISINE_DESCRIPTION");
        console.log("boroCounts", boroCounts)
        console.log(Object.keys(boroCounts))
        console.log(Object.values(boroCounts));

        var pieChart = [{
            values: Object.values(boroCounts),
            labels: Object.keys(boroCounts),
            type: 'pie',
            name: boro + ' Cuisines',
            // marker: {
            //     colors: ultimateColors[2]
            // },
            domain: {
                row: 0,
                column: 0
            },
            hoverinfo: 'label+percent+name',
            textinfo: 'none',
            title: boro + ' Cuisines',
            "titlefont": { "size": 24 }
        }]
        var layout = {
            height: 1000,
            width: 1000,
            grid: { rows: 2, columns: 2 },
        };
        Plotly.newPlot('pie', pieChart, layout);

        let boroResults = Object.keys(boroCounts).map(f => ({ type: f, count: boroCounts[f] }))
        console.log("boroResults", boroResults)
        // let sortedByCuisines = Object.keys(manhattanResults).sort((a, b) => b.count - a.count);
        // console.log("sortedbyCuisines", sortedByCuisines)
        let boroSortedByValues = Object.values(boroResults).sort((a, b) => b.count - a.count);
        console.log("borosortedbyvalues", boroSortedByValues)
        // Slice the first 10 objects for plotting
        boroSlicedData = boroSortedByValues.slice(0, 10);

        // Reverse the array to accommodate Plotly's defaults
        boroReversedData = boroSlicedData.reverse();
        let trace5 = {
            x: boroReversedData.map(object => object.count),
            y: boroReversedData.map(object => object.type),
            text: boroReversedData.map(object => object.type),
            type: "bar",
            orientation: "h",
        };
        let barchart4 = [trace5];
        let labels5 = {
            title: "Top Ten Most Popular Cuisines in " + boro
        };
        //reference id="bar" from html
        Plotly.newPlot("borochart", barchart4, labels5);

        let display = d3.select("#sample-metadata");
        display.html("");
        
       let boroViolationCounts= getcounts(boroSamples, "VIOLATION_DESC");
       console.log("boroviolationCounts", boroViolationCounts)
       console.log(Object.keys(boroViolationCounts))
       console.log(Object.values(boroViolationCounts)); 
       let boroViolationResults = Object.keys(boroViolationCounts).map(f=>({type:f, count:boroViolationCounts[f]}))
      console.log("boroViolationResults",boroViolationResults)
     // let sortedByCuisines = Object.keys(manhattanResults).sort((a, b) => b.count - a.count);
     // console.log("sortedbyCuisines", sortedByCuisines)
     let boroViolationSortedByValues = Object.values(boroViolationResults).sort((a, b) => b.count - a.count);
     console.log("boroViolationsortedbyvalues", boroViolationSortedByValues)
     // Slice the first 10 objects for plotting
     boroViolationSlicedData = boroViolationSortedByValues.slice(0, 5);
     console.log("boroViolationSlicedData", boroViolationSlicedData)
     boroViolationDisplay=[]
         for (var s = 0; s < boroViolationSlicedData.length; s++) {
             boroViolationDisplay.push(boroViolationSlicedData[s].type);
         }
         console.log("borodisplay", boroViolationDisplay)
     //loop to get metadata info into the demographics box
     Object.entries(boroViolationDisplay).forEach(([a,b])=>{
       display.append("h5").text(`${a}:${b}`); 
     });
     
    });

}

//restaurants("Bakery")

//pieChart("Manhattan")
function getcounts(dataArray, myParam) {

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

    

