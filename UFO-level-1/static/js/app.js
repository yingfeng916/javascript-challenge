var tableData = data;

// YOUR CODE HERE!
// console.log(data);

var tbody = d3.select("tbody");

data.forEach(function(ufo){
    // console.log(ufo);
    var row = tbody.append("tr");
    
    Object.entries(ufo).forEach(function([key, value]) {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);

    });
});

var input = d3.select("form");
var button = d3.select("button");

input.on("submit", runEnter);
button.on("click", runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Print the value to the console
    console.log(inputValue);

    var filteredData = tableData.filter(result => result.datetime === inputValue);

    // console.log(filteredData);
    tbody.html("");

    filteredData.forEach(function(ufoNew) {
        var newrow = tbody.append("tr");

        Object.entries(ufoNew).forEach(function([key, value]) {
            var newcell = newrow.append("td");
            newcell.text(value);
            console.log(value);

        });

    });


  };

