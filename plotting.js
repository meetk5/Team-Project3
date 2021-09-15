
d3.json("Data/cleaned_db_Aug.json").then(function(data){
  
  let restaurants = Object.values(data.restaurant);
  console.log("Restaurants", restaurants);

  let cuisine = Object.values(data.cuisine_description);
  console.log("Cuisine:", cuisine);

  // let uniqueCuisines = jQuery.unique(cuisine);
  let uniqueCuisines = [... new Set(cuisine)];
  console.log("Unique Cuisines:", uniqueCuisines);



  let traceCuisine = {
    y: cuisine.length,
    x: uniqueCuisines.slice(0,10).map(cuisine => `${cuisine}`),
    // y: restaurants.length,
    // text: topOtuLabels.reverse(),
    type: "bar"
};
console.log(traceCuisine)
let traceData = [traceCuisine];

//  let layout = {
//   font:{
//         family: 'Gravitas One',
//        size: 14
//    },
//  margin: {
// // //     //   l: 100,
// // //     //   r: 150,
// // //     //   t: 30,
// // //     //   b: 30
// // //     // }
// // // };

Plotly.newPlot("myDiv", traceData);

})





























// d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/coffee-flavors.csv', function(err, rows){
//   function unpack(rows, key) {
//   return rows.map(function(row) { return row[key]; });
// }

// var data = [
//     {
//       type: "sunburst",
//       maxdepth: 3,
//       ids: unpack(rows, 'ids'),
//       labels: unpack(rows, 'labels'),
//       parents:unpack(rows, 'parents')
//     }
//   ];

// var layout = {
//   margin: {l: 0, r: 0, b: 0, t:0},
//   sunburstcolorway:[
//     "#636efa","#EF553B","#00cc96","#ab63fa","#19d3f3",
//     "#e763fa", "#FECB52","#FFA15A","#FF6692","#B6E880"
//   ],
//   extendsunburstcolorway: true
// };


// Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true});
// })