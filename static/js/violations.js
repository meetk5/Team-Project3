
d3.json("../Data/violations_4fields.json").then(function (data) {
    console.log(Object.values(data));

    let restaurants = [];
    let violationCode = [];
    let violationDesc = [];
    let criticalFlag = [];

    for (i = 0; i < (Object.keys(data).length); i++) {
        restaurants.push(data[i]["RESTAURANT"]);
        violationDesc.push(data[i]["VIOLATION_DESC"]);
        violationCode.push(data[i]["VIOLATION_CODE"]);
        criticalFlag.push(data[i]["CRITICALFLAG"]);
    };
    console.log("Restaurants", restaurants);
    console.log("Violation Desc", violationDesc);
    console.log("Violation Codes", violationCode);
    console.log("Critical Flag", criticalFlag);

}
);
