var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");
    data.forEach((rowData) => {
        var row = tbody.append("tr");
    

    Object.values(rowData).forEach((value) => {
        var cell = row.append("td");
        cell.text(value);

    });
    });
}

var filters = {}
function updateFilters() {
    var changedElement = d3.select(this).select("input");
    var elementValue = changedElement.property("value");
    var filteredID = changedElement.attr("id")
    if (elementValue) {
        filters[filteredID] = elementValue;
    }

    else {
        delete filters[filteredID];
    }
    runEnter();
}


function runEnter() {

    var filteredData = tableData;

    Object.entries(filters).forEach(([key, value]) => {
        filteredData = filteredData.filter(newRow => newRow[key] === value)
    });

    buildTable(filteredData);
    

  };

d3.selectAll(".filter").on("change", updateFilters);

buildTable(tableData);

