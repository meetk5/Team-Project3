getdropdown();
init();

function init() {
    visualization("Queens");
    console.log("init function is running now")
};

function visualization(boro) {
    d3.json("../Data/violations.json").then(function (data) {
        console.log(Object.keys(data).length);

        let len = Object.keys(data).length;

        let restaurants = [];
        let violationCode = [];
        let violationDesc = [];
        let criticalFlag = [];
        let borodata = [];
        let restaurantdata = [];

        for (i = 0; i < len; i++) {
            restaurantdata.push(Object.values(data)[i]);
        };

        borodata.push(restaurantdata.filter(function (element) {
            return element.BORO === boro;
        }));
        console.log(borodata[0]);

        let borolen = borodata[0].length;

        for (j = 0; j < borolen; j++) {
            restaurants.push(borodata[0][j]["DBA"]);
            violationDesc.push(borodata[0][j]["VIOLATION DESCRIPTION"]);
            violationCode.push(borodata[0][j]["VIOLATION CODE"]);
            criticalFlag.push(borodata[0][j]["CRITICAL FLAG"]);
        };

        console.log("Restaurants", restaurants);
        console.log("Violation Desc", violationDesc);
        console.log("Violation Codes", violationCode);
        console.log("Critical Flag", criticalFlag);

        function unique(param) {
            let unique = [... new Set(param)];
            console.log("Unique", unique);
            return unique;
        }

        function count(param) {
            let dict = {};

            uniqueValues = unique(param);

            uniqueValues.forEach(function (element) {
                for (j = 0; (j < param.length); j++) {
                    if (element == param[j]) {
                        if (dict[element]) {
                            dict[element]++;
                        }
                        else {
                            dict[element] = 1;
                        }
                    }
                }
            });
            console.log(dict);
            return dict;
        }

        function sort(param) {
            var sortable = [];

            let dict = count(param);

            for (var violation in dict) {
                sortable.push([violation, dict[violation]]);
            }
            sortable.sort(function (a, b) {
                return b[1] - a[1];
            });
            console.log("Descending Sort", sortable);

            return sortable;
        }

        // let code = sort(violationCode);

        // let desc = sort(violationDesc);

        let top15codes = sort(violationCode).slice(0, 15);

        let top15desc = sort(violationDesc).slice(0, 15);

        let tracebar = {
            x: top15codes.map(xyz => xyz[0]),
            y: top15codes.map(xyz => xyz[1]),
            text: top15desc.map(xyz => xyz[0]),
            type: "bar",
        };
        console.log(tracebar)

        let traceData1 = [tracebar];

        let layout = {
            font: {
                family: 'Gravitas One',
                size: 14
            },
            title: `Violation details among ${boro} restaurants`,
            xaxis: { title: "Violations" },
            yaxis: { title: "Nos. of Violations" }
        };

        Plotly.newPlot("bar", traceData1, layout);

        let tbody = d3.select("tbody");
        tbody.html("");
        let rows = tbody.append("tr");

        for (k = 0; k < top15codes.length; k++) {
            let rows = tbody.append("tr");
            rows.append("td").text(top15codes[k][0]);
            rows.append("td").text(top15desc[k][0])
        };

        // let tracepie = {
        //     labels: top10array.map(xyz => xyz[0]),
        //     values: top10array.map(xyz => xyz[1]),
        //     text: top10array.map(xyz => xyz[0]),
        //     type: "pie"
        // };
        // console.log(tracepie)

        // let traceData2 = [tracepie];

        // let layout1 = {
        //     font: {
        //         family: 'Gravitas One',
        //         size: 14
        //     }
        // };

        // Plotly.newPlot("myDiv", traceData2, layout1);

    })
};

function getdropdown() {
    console.log("Get Dropdown is running now");
    var dropdownMenu = d3.select("#selDataset");

    d3.json("../Data/violations.json").then(function (data) {
        let len = Object.keys(data).length;
        let boros = [];

        for (i = 0; i < len; i++) {
            boros.push(Object.values(data)[i]["BORO"]);
        }

        let nycboros = [... new Set(boros)].slice(0, 5);
        console.log("NYC Boros", nycboros);

        nycboros.forEach(element => dropdownMenu.append('option').property('value', element).text(element));
    });

};

function optionChanged(dropdownboro) {
    console.log("Option Change is running now");
    visualization(dropdownboro);
}