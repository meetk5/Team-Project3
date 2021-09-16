
d3.json("cleanDb_Aug_31cuisines.json").then(function (data) {
  console.log(Object.keys(data).length);

  let restaurants = [];
  let cuisines = [];

  for (i = 0; i < (Object.keys(data).length); i++) {

    restaurants.push(data[i]["RESTAURANT"]);
    cuisines.push(data[i]["CUISINE_DESCRIPTION"]);
  };
  console.log(restaurants);
  console.log(cuisines);

  let uniqueCuisines = [... new Set(cuisines)].slice(0, 10);
  console.log(uniqueCuisines);

  let dict = {};
  count = 0;

  uniqueCuisines.forEach(function (value) {
    console.log(value);
    if (dict[value["CUISINE_DESCRIPTION"]]) {
      dict[value["CUISINE_DESCRIPTION"]]++;
    }
    else {
      dict[value["CUISINE_DESCRIPTION"]] = 1;
    }
  });
  console.log(dict)
}
);