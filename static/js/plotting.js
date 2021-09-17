
d3.json("cleanDb_Aug_31cuisines.json").then(function (data) {
  // console.log(Object.values(data));

  let restaurants = [];
  let cuisines = [];
  let violationCode = [];
  let criticalFlag = [];

  for (i = 0; i < (Object.keys(data).length); i++) {

    restaurants.push(data[i]["RESTAURANT"]);
    cuisines.push(data[i]["CUISINE_DESCRIPTION"]);
    violationCode.push(data[i]["VIOLATION_CODE"]);
    criticalFlag.push(data[i]["CRITICALFLAG"]);
  };
  console.log("Restaurants", restaurants);
  console.log("Cuisines", cuisines);
  console.log("Violation Codes", violationCode);
  console.log("Critical Flag", criticalFlag);

  function count(param) {
    let unique = [... new Set(param)];
    console.log("Unique", unique);

    let dict = {};
    count = 0;

    unique.forEach(function (element) {
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
    let counts = Object.values(dict);
    console.log(counts);
    return {counts, unique};
  };
  
  // let flag = count(criticalFlag);

  // let cus = count(cuisines);

  let code = count(violationCode);

  let traceCuisine = {
    values: code.counts,
    labels: code.unique.map(cuisine => `${cuisine}`),
    // text: topOtuLabels.reverse(),
    type: "pie"
  };
  console.log(traceCuisine)
  let traceData = [traceCuisine];

  let layout = {
    font: {
      family: 'Gravitas One',
      size: 14
    },
    margin: {
      l: 100,
      r: 150,
      t: 30,
      b: 30
    }
  };

  Plotly.newPlot("myDiv", traceData);

  let tracebar = {
    y: code.counts,
    x: code.unique.map(cuisine => `${cuisine}`),
    // text: topOtuLabels.reverse(),
    type: "bar"
  };
  console.log(traceCuisine)
  let traceData1 = [tracebar];

  // let layout = {
  //   font: {
  //     family: 'Gravitas One',
  //     size: 14
  //   },
  //   margin: {
  //     l: 100,
  //     r: 150,
  //     t: 30,
  //     b: 30
  //   }
  // };

  Plotly.newPlot("bar", traceData1);

  let traceBubble = {
    x: code.unique.map(xyz => `${xyz}`),
    y: code.counts,
    text: code.unique.map(xyz => `${xyz}`),
    mode: 'markers',
    marker: {
      color: code.unique.map(xyz => `${xyz}`),
      colorscale: 'Electric',
      size: code.counts
    }
  };

  var data = [traceBubble];

  var layout1 = {
    xaxis: {
      title: {
        text: 'Cuisines',
      }
    },
    font: {
      family: 'Gravitas One',
      size: 14
    },
    // height: 480,
    // width: 1300
  };

  Plotly.newPlot("bubble", data, layout1);


}
);