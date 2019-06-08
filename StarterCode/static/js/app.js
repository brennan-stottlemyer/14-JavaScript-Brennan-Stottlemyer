// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach(function(ufoSighting){
    console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key,value]) {
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
// var inputField = d3.select("#datetime");

button.on("click", function() {
    d3.event.preventDefault();

    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");

var filteredData = tableData.filter(singleSighting => singleSighting.datetime == inputValue);
    console.log(filteredData);

    tbody.html("");

    filteredData.forEach(function(ufoSightingFiltered){
        // console.log(ufoSighting);
        var row = tbody.append("tr");
    
        Object.entries(ufoSightingFiltered).forEach(function([key,value]) {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});