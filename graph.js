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
    //    let trace1 = {
    //     x: restaurantsTypes,
    //     y: numbers,
    //     type: "bar",
    //     orientation: "v",
    //    };
    //    let barchart = [trace1];
    //    let labels = {
    //      title: "Types of Restaurant in NYC"
    //    };
    //  //reference id="bar" from html
    //   Plotly.newPlot("gauge", barchart, labels);
    // })
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
// ---------------------------------------------------------------------------
//function plotMetric(city, food, stuff) {
// d3.json("./Data/cleaned_db_Aug_31_new.json").then((data) => {
//     // //get samples info from samples.json

//     let samples = data.data;
//     console.log("ID#", samples)
//     const twoLabels = { data: samples.map(({ BORO, CUISINE_DESCRIPTION }) => ({ BORO, CUISINE_DESCRIPTION })) };
//     console.log("twoLabels", twoLabels)

//     // mahattan cuisines
//     let manhattanSamples = samples.filter(function(citation){
//         return citation.BORO =="Manhattan"
//     });
//     console.log(manhattanSamples)
//     let manhattanCounts= getcounts(manhattanSamples, "CUISINE_DESCRIPTION");
//     console.log("manhattanCounts", manhattanCounts)
//     console.log(Object.keys(manhattanCounts))
//     console.log(Object.values(manhattanCounts));

//     //queens cuisines
//     let queensSamples = samples.filter(function(citation){
//         return citation.BORO =="Queens"
//     });
//     console.log(queensSamples)
//     let queensCounts= getcounts(queensSamples, "CUISINE_DESCRIPTION");
//     console.log("queensCounts", manhattanCounts)
//     console.log(Object.keys(queensCounts))
//     console.log(Object.values(queensCounts))

//     //Brooklyn cuisines
//     let brooklynSamples = samples.filter(function(citation){
//         return citation.BORO =="Brooklyn"
//     });
//     console.log(queensSamples)
//     let brooklynCounts= getcounts(brooklynSamples, "CUISINE_DESCRIPTION");
//     console.log("brooklynCounts", brooklynCounts)
//     console.log(Object.keys(brooklynCounts))
//     console.log(Object.values(brooklynCounts))

//      //Staten Island cuisines
//      let statenIslandSamples = samples.filter(function(citation){
//         return citation.BORO =="Staten Island"
//     });
//     console.log(statenIslandSamples)
//     let statenIslandCounts= getcounts(statenIslandSamples, "CUISINE_DESCRIPTION");
//     console.log("statenIslandCounts", statenIslandCounts)
//     console.log(Object.keys(statenIslandCounts))
//     console.log(Object.values(statenIslandCounts))

//     //Bronx cuisines
//     let bronxSamples = samples.filter(function(citation){
//         return citation.BORO =="Bronx"
//     });
//     console.log(bronxSamples)
//     let bronxCounts= getcounts(bronxSamples, "CUISINE_DESCRIPTION");
//     console.log("bronxCounts", bronxCounts)
//     console.log(Object.keys(bronxCounts))
//     console.log(Object.values(bronxCounts)); 

//     let bronxViolations = samples.filter(function(violation){
//         return violation.BORO =="Bronx"
//     });
//     console.log(bronxViolations)
//     let bronxViolationCounts= getcounts(bronxViolations, "VIOLATION_DESC");
//     console.log("bronxviolationCounts", bronxViolationCounts)
//     console.log(Object.keys(bronxViolationCounts))
//     console.log(Object.values(bronxViolationCounts)); 

//     var pieChart = [{
//             values: Object.values(bronxCounts),
//             labels: Object.keys(bronxCounts),
//             type: 'pie',
//             name: 'Bronx Cuisines',
//             // marker: {
//             //     colors: ultimateColors[2]
//             // },
//             domain: {
//                 row: 0,
//                 column: 0
//             },
//             hoverinfo: 'label+percent+name',
//             textinfo: 'none',
//             title: 'Bronx Cuisines',
//             "titlefont": {"size":24}
//         }, {
//             values: Object.values(statenIslandCounts),
//             labels: Object.keys(statenIslandCounts),
//             type: 'pie',
//             name: 'Staten Island Cuisines',
//             // marker: {
//             //     colors: ultimateColors[2]
//             // },
//             domain: {
//                 row: 1,
//                 column: 0
//             },
//             hoverinfo: 'label+percent+name',
//             textinfo: 'none',
//             title: 'Staten Island Cuisines',
//             "titlefont": {"size":24}
//         }, {
//             values: Object.values(queensCounts),
//             labels: Object.keys(queensCounts),
//             type: 'pie',
//             name: 'Queens Cuisines',
//             // marker: {
//             //     colors: ultimateColors[2]
//             // },
//             domain: {
//                 row: 0,
//                 column: 1
//             },
//             hoverinfo: 'label+percent+name',
//             textinfo: 'none',
//             title: 'Queens Cuisines',
//             "titlefont": {"size":24}
//         }, {
//             values: Object.values(manhattanCounts),
//             labels: Object.keys(manhattanCounts),
//             type: 'pie',
//             name: 'Manhattan Cuisines',
//             // marker: {
//             //     colors: ultimateColors[2]
//             // },
//             domain: {
//                 x: [0.52,1],
//                 y: [0, 0.48]
//             },
//             hoverinfo: 'label+percent+name',
//             textinfo: 'none',
//             title: 'Manhattan Cuisines',
//             "titlefont": {"size":24}
//         },

//         ];

//         var layout = {
//             height: 500,
//             width: 1000,
//             grid: {rows: 2, columns: 2}
//           };

//         Plotly.newPlot('bubble', pieChart, layout);
//      var secondPie=[{
//         values: Object.values(brooklynCounts),
//         labels: Object.keys(brooklynCounts),
//         type: 'pie',
//         name: 'Brooklyn Cuisines',
//         // marker: {
//         //     colors: ultimateColors[2]
//         // },
//         domain: {
//             row: 0,
//             column: 0
//         },
//         hoverinfo: 'label+percent+name',
//         textinfo: 'none',
//         title: 'Brooklyn Cuisines',
//         "titlefont": {"size":24}
//     }, 
//     ];

//     var layout = {
//         height: 500,
//         width: 1000,
//         grid: { rows: 2, columns: 2 },
//     };

//     Plotly.newPlot('pie', secondPie, layout);

// });
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
            height: 500,
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
    });

}

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
    //console.log("boro", finalArray)
    //     let numBoros = Object.keys(finalArray).map(e => ({ boro: e, count: finalArray[e] }));
    //     console.log("numboro", numBoros);
    //     boroTypes = []
    //     for (var i = 0; i < numBoros.length; i++) {
    //         boroTypes.push(numBoros[i].boro);
    //     }
    //     console.log("boroTypes", boroTypes)
    //     let boroCount = {};
    //     for (var i = 0; i < boroTypes.length; i++) {
    //         boroCount[boroTypes[i]] = 1 + (boroCount[boroTypes[i]] || 0);
    //     }
    //     console.log(Object.keys(boroCount))
    //     let boroCu = Object.keys(boroCount).map(function (key) {
    //         return boroCount[key];
    //     })
    //     console.log("boroCu", boroCu)
}

    // 

