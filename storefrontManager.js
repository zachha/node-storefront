var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'clazlaZ1!2345',
    database: 'node_storefrontdb'
});

let table = new Table({
  head: ["Item ID", "Product Name", "Department", "Price", "Stock"]
});

inquirer.prompt([
  {
    type: "list",
    name: "viewProducts",
    message: ["View Products for Sale",
            "View Low Inventory",
            "Add to Inventory",
            "Add New Product"]
  }
]);