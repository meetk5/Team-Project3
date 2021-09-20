//get static bar chart
d3.json("../Data/cleaned_db_Aug_31_new.json").then((data) => {
    // //get samples info from json file

    let samples = data.data;
    console.log("ID#", samples)

    // //filtering info to call samples info from json file
    let name = samples.filter(object => object.index)[0];
    console.log("#", name)
    let info = name["CUISINE_DESCRIPTION"]
    console.log("in", info)
    //reference the #sample-metadata from html to tell where the infomation goes
    let display = d3.select("#sample-metadata");
    display.html("");
    //loop to find all the different cuisines and count how many there are 
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

//create obj list to have 2 components, one called type and one called count
    let results = Object.keys(obj).map(e => ({ type: e, count: obj[e] }))
    console.log("results", results)
    //find all the different cuisines and put it in a list
    restaurantsTypes = []
    for (var i = 0; i < results.length; i++) {
        restaurantsTypes.push(results[i].type);
    }
    console.log("restTypes", restaurantsTypes)
    //count all the numbers of the different types of cuisines and add it to a list
    numbers = []
    for (var i = 0; i < results.length; i++) {
        numbers.push(results[i].count);
    }
    console.log("numbers", numbers)
    d3.json("../Data/cleaned_db_Aug_31_new.json").then((data) => {
        // //get samples info from json file

        let samples = data.data;
        console.log("ID#", samples)

        // //filtering info to call samples info from json file
        let name = samples.filter(object => object.index)[0];
        console.log("#", name)
        let info = name["CUISINE_DESCRIPTION"]
        console.log("in", info)
        let display = d3.select("#sample-metadata");
        display.html("");
        //loop to find all the different cuisines and count how many there are 
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
        console.log("obj", obj)

//using obj loop, place thhe cuisine and counts into two categories called type and count
        let results = Object.keys(obj).map(e => ({ type: e, count: obj[e] }))
        console.log("results", results)
        //get all the different types of cuisines into a list and get all the counts into a list
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
        //reference id="gauge" from html
        Plotly.newPlot("gauge", barchart, labels);
    })
})

function pieChart(boro) {
    d3.json("../Data/cleaned_db_Aug_31_new.json").then((data) => {
        // //get samples info from json file

        let samples = data.data;
        console.log("ID#", samples)
        const twoLabels = { data: samples.map(({ BORO, CUISINE_DESCRIPTION }) => ({ BORO, CUISINE_DESCRIPTION })) };
        console.log("twoLabels", twoLabels)

        // filter to get different boro's cuisines
        let boroSamples = samples.filter(function (citation) {
            return citation.BORO == boro
        });
        console.log(boroSamples)
        let boroCounts = getcounts(boroSamples, "CUISINE_DESCRIPTION");
        console.log("boroCounts", boroCounts)
        console.log(Object.keys(boroCounts))
        console.log(Object.values(boroCounts));
//plot pie charts for each boro
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
    // Sort the data by the most number of cuisines in each boro in descending (most to least)
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
        //reference id="borochart" from html
        Plotly.newPlot("borochart", barchart4, labels5);

        let display = d3.select("#sample-metadata");
        display.html("");
        //get the different violation descriptions for each boro and their counts
       let boroViolationCounts= getcounts(boroSamples, "VIOLATION_DESC");
       console.log("boroviolationCounts", boroViolationCounts)
       console.log(Object.keys(boroViolationCounts))
       console.log(Object.values(boroViolationCounts)); 
       //place the violations and counts into two categories called type and count
       let boroViolationResults = Object.keys(boroViolationCounts).map(f=>({type:f, count:boroViolationCounts[f]}))
      console.log("boroViolationResults",boroViolationResults)
     // Sort the data by the most number of violations in each boro in descending (most to least)
     let boroViolationSortedByValues = Object.values(boroViolationResults).sort((a, b) => b.count - a.count);
     console.log("boroViolationsortedbyvalues", boroViolationSortedByValues)
     // Slice the first 5 objects
     boroViolationSlicedData = boroViolationSortedByValues.slice(0, 5);
     console.log("boroViolationSlicedData", boroViolationSlicedData)
     //get a list of the 5 top violations
     boroViolationDisplay=[]
         for (var s = 0; s < boroViolationSlicedData.length; s++) {
             boroViolationDisplay.push(boroViolationSlicedData[s].type);
         }
         console.log("borodisplay", boroViolationDisplay)
     //loop to get violations info into the top violations in each boro box
     Object.entries(boroViolationDisplay).forEach(([,b])=>{
       display.append("h5").text(`${b}`); 
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

    

