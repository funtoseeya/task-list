//Data
const data = [
    { name: "John Doe", age: 35, occupation: "Software Engineer" },
    { name: "Jane Smith", age: 28, occupation: "Product Manager" },
    { name: "Bob Johnson", age: 42, occupation: "Sales Executive" },
    { name: "Sarah Lee", age: 31, occupation: "Graphic Designer" },
    { name: "Mike Chen", age: 25, occupation: "Data Analyst" }
  ];

  function generateTable(data) {
    // Create table element
    const table = document.createElement("table");
  
    // Create table header
    const header = table.createTHead();
    const headerRow = header.insertRow();
    Object.keys(data[0]).forEach(key => {
      const th = document.createElement("th");
      const text = document.createTextNode(key.toUpperCase());
      th.appendChild(text);
      headerRow.appendChild(th);
    });
  
    // Create table body
    const body = table.createTBody();
    data.forEach(obj => {
      const row = body.insertRow();
      Object.keys(obj).forEach(key => {
        const cell = row.insertCell();
        const text = document.createTextNode(obj[key]);
        cell.appendChild(text);
      });
    });
  
    // Insert table into DOM
    const container = document.getElementById("table-container");
    container.appendChild(table);
  }
  
    generateTable(data);
  