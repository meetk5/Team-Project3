// set the dimensions and margins of the graph
// var margin = { top: 100, right: 0, bottom: 0, left: 0 },
//     width = 460 - margin.left - margin.right,
//     height = 460 - margin.top - margin.bottom,
//     innerRadius = 90,
//     outerRadius = Math.min(width, height) / 2;   // the outerRadius goes from the middle of the SVG area to the border

// // append the svg object
// var svg = d3.select("#circular")
//     .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform", "translate(" + (width / 2 + margin.left) + "," + (height / 2 + margin.top) + ")");

d3.json("../Data/violations.json").then(function (data) {

    console.log(Object.keys(data).length);
    // console.log(Object.values(data));

    // let restaurants = [];
    // let violationCode = [];
    // let violationDesc = [];
    // let criticalFlag = [];
    // let borodata = [];
    // let restaurantdata = [];

    // for (i = 0; i < 1000; i++) {
    //     restaurantdata.push(Object.values(data)[i]);
    // };

    // borodata.push(restaurantdata.filter(function (element) {
    //     return element.BORO === "Manhattan";
    // }));
    // console.log(borodata[0]);

    // let borolen = borodata[0].length;

    // for (j = 0; j < borolen; j++) {
    //     restaurants.push(borodata[0][j]["DBA"]);
    //     violationDesc.push(borodata[0][j]["VIOLATION DESCRIPTION"]);
    //     violationCode.push(borodata[0][j]["VIOLATION CODE"]);
    //     criticalFlag.push(borodata[0][j]["CRITICAL FLAG"]);
    // };

    // console.log("Restaurants", restaurants);
    // console.log("Violation Desc", violationDesc);
    // // console.log("Violation Codes", violationCode);
    // // console.log("Critical Flag", criticalFlag);

    // function unique(param) {
    //     let unique = [... new Set(param)];
    //     console.log("Unique", unique);
    //     return unique;
    // }

    // function count(param) {
    //     let dict = {};

    //     uniqueValues = unique(param);

    //     uniqueValues.forEach(function (element) {
    //         for (j = 0; (j < param.length); j++) {
    //             if (element == param[j]) {
    //                 if (dict[element]) {
    //                     dict[element]++;
    //                 }
    //                 else {
    //                     dict[element] = 1;
    //                 }
    //             }
    //         }
    //     });
    //     console.log(dict);
    //     return dict;
    // }

    // function sort(param) {
    //     var sortable = [];

    //     let dict = count(param);

    //     for (var violation in dict) {
    //         sortable.push([violation, dict[violation]]);
    //     }
    //     sortable.sort(function (a, b) {
    //         return b[1] - a[1];
    //     });
    //     console.log("Descending Sort", sortable);

    //     return sortable;
    // }

    // let top15codes = sort(violationCode).slice(0, 15);

    // let top15desc = sort(violationDesc).slice(0, 15);
    // console.log(top15desc);

    // // // Scales
    // var x = d3.scaleBand()
    //     .range([0, 2 * Math.PI])    // X axis goes from 0 to 2pi = all around the circle. If I stop at 1Pi, it will be around a half circle
    //     .align(0)                  // This does nothing
    //     .domain(top15codes.map(xyz => xyz[0])); // The domain of the X axis is the list of violation codes.
    // var y = d3.scaleRadial()
    //     .range([innerRadius, outerRadius])   // Domain will be define later.
    //     .domain([0, top15codes[0][1]]); // Domain of Y is from 0 to the max seen in the data

    // // // Add the bars
    // svg.append("g")
    //     .selectAll("path")
    //     .data(data)
    //     .enter()
    //     .append("path")
    //     .attr("fill", "#69b3a2")
    //     .attr("d", d3.arc()     // imagine your doing a part of a donut plot
    //         .innerRadius(innerRadius)
    //         .outerRadius(function (d) { return y(d['Value']); })
    //         .startAngle(function (d) { return x(d.Country); })
    //         .endAngle(function (d) { return x(d.Country) + x.bandwidth(); })
    //         .padAngle(0.01)
    //         .padRadius(innerRadius))

    // Add the labels
    // svg.append("g")
    //     .selectAll("g")
    //     .data(data)
    //     .enter()
    //     .append("g")
    //     .attr("text-anchor", function (d) { return (x(d.Country) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"; })
    //     .attr("transform", function (d) { return "rotate(" + ((x(d.Country) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")" + "translate(" + (y(d['Value']) + 10) + ",0)"; })
    //     .append("text")
    //     .text(function (d) { return (d.Country) })
    //     .attr("transform", function (d) { return (x(d.Country) + x.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)"; })
    //     .style("font-size", "11px")
    //     .attr("alignment-baseline", "middle")

});