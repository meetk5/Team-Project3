url = "https://data.cityofnewyork.us/resource/43nn-pn8j.json"

d3.json(url).then(function(data) {
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
});
  


