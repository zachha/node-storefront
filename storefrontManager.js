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
  }.then(answers => {


  });
]);

function viewInv(answers) {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (i=0;i<res.length,i++) {
            table.push([
                res[i].item_id,
                res[i].product_name,
                res[i].department_name,
                res[i].price,
                res[i].stock_quantity
            ]);
        }
        console.log(table.toString());
    })
}

function viewLowInv(answers) {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (i=0;i<res.length,i++) {
            if(res[i].stock_quantity < 5) {
                table.push([
                res[i].item_id,
                res[i].product_name,
                res[i].department_name,
                res[i].price,
                res[i].stock_quantity
                ]);
            }
        }
        console.log(table.toString());
    });
}
