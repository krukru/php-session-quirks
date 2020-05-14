function appendTable(rows, columns, container) {
    const table = document.createElement("table");
    table.classList.add("main-table");
    const tableBody = document.createElement("tbody");
    for (let i = 0; i < rows; i++) {
        const tableRow = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            const tableData = document.createElement("td");
            tableData.classList.add("cell");
            tableData.classList.add("background-red");
            tableRow.appendChild(tableData);
            // const fetchTarget = "http://s" + ((i * columns) + j).toString(10) + ".dev/php-session-quirks/example_0/ajax.php"
            const fetchTarget = "ajax.php"
            fetchData(tableData, fetchTarget);
        }
        tableBody.appendChild(tableRow);
    }
    table.appendChild(tableBody);
    container.appendChild(table);
}

function fetchData(cell, fetchTarget) {
    const startTime = performance.now();
    fetch(fetchTarget).then((response) => {
        response.text().then((body) => {
            const endTime = performance.now();
            const timeTaken = Math.round((endTime - startTime) / 1000, 2);
            cell.innerText = "Server time: " + body + "\n(Total time: " + timeTaken + "s)";
            cell.classList.replace("background-red", "background-green");
        });
    });
}
