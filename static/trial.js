//url = "https://data.cityofnewyork.us/resource/43nn-pn8j.json"
url1 = `/cuisines`

d3.json(url1).then(function(data){
    console.log(data);
    cuisine = data[0].cuisine_description
    console.log("Cuisine:",cuisine)
    

    cuisine_array = []
    for (i = 0; i< data.length; i++){
        cuisines = data[i].cuisine_description
        cuisine_array.push(cuisines)
   
       // distinct_cuisines1 = [...new Set(data[i].map(x => x.cuisine_description))]
    }
    console.log("Cuisines",cuisine_array)   
   // console.log (distinct_cuisines1)
    const distinct_cuisines = [...new Set(cuisine_array)]
    console.log ("distinct Cuisines", distinct_cuisines)

    cuisine_object = {};
    // count = 0;
    // for (const key of distinct_cuisines){
    //     cuisine_object[key] = count;
    // }
    // console.log("Cuisine object:",cuisine_object)
    // console.log(typeof cuisine_object)

    // for (j = 0; j < cuisine_array.length; j++)  
    // {
    //     for (k = 0; k < Object.keys(cuisine_object).length; k++)
    //     {
    //     if (Object.keys(cuisine_object)[k] == cuisine_array[j])
    //     {
    //         Object.values(cuisine_object)[k] = Object.values(cuisine_object)[k] + 1;   
    //         console.log (Object.values(cuisine_object)[k]) 
    // }}}


    // const cuisine_object = Object.create({},{distinct_cuisines: {value:function(){for (k =0; k < cuisine_array.length;k++){
    //     if (distinct_cuisines.some(r => cuisine_array.includes(r))){
    //         return Object.values += 1;
    //     }
    // }}}})


         distinct_cuisines.forEach(function (element) {
                for (j = 0; (j < cuisine_array.length); j++) {
                    if (element == cuisine_array[j]) {
                        if (cuisine_object[element]) {
                            cuisine_object[element]++;  
                        }
                        else {
                            cuisine_object[element] = 1;
                        }
                    }
                }
            
            
        //     
        // 
            // })
    
            
    // for (j = 0; j< data.length; j++){
    //     if (data[j].cuisine_description == cuisine_array[i]){
            
    //     }
    // }

    
    });
    console.log (cuisine_object);
    //console.log(Object.keys(cuisine_object))
    console.log(Object.entries(cuisine_object).slice(0,10).map(entry => entry[0]))

    var trace1 = {
        x: Object.entries(cuisine_object).slice(0,15).map(entry => entry[0]),
        y: Object.entries(cuisine_object).slice(0,15).map(entry => entry[1]),
       // text: topten_otulabels.reverse(),
        type: 'doughnut',
      
        
      
      };
//     var data = [{type: 'funnel', y: [Object.keys(cuisine_object)], x: [Object.values(cuisine_object)], hoverinfo: 'Number of Restaurants with for each cuisine'}];

// var layout = {margin: {l: 150}, width:600, height: 500}



    Plotly.newPlot('bar', [trace1]);

url2 = `/violations`

// d3.json(url2).then(function(data){
//     console.log(data);
// });


/*d3.json(url).then(function(data) {
  console.log(data);
  console.log("camis_array",data[0].camis)
  let manhattan_restaurants = []
  let queens_restaurants = []
  let brooklyn_restaurants = []
    for (i=0;i<data.length;i++){
        if (data[i].boro == "Manhattan"){
        manhattan_restaurants.push(data[i].dba)
        } else if(data[i].boro == "Queens")
        {
            queens_restaurants.push(data[i].dba)
        }else if (data[i].boro == "Brooklyn")
        {
            brooklyn_restaurants.push(data[i].dba)
        }
    }
console.log("Manhattan Restaurants",manhattan_restaurants)

let trace1 = {
    datasets: [{
        data: [manhattan_restaurants,queens_restaurants,brooklyn_restaurants]
    }]
}

const config = {
    type: 'doughnut',
    data: trace1,
  
  };
});*/
})

