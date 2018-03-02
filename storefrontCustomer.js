var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "clazlaZ1!2345",
  database: "node_storefrontdb"
});

let table = new Table({
    head: ["Item ID", "Product Name", "Department", "Price", "Stock"]
});

connection.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log("connected as id " + connection.threadId);
  //populates/displays database products to user
  selectAll();

  connection.end();
});
//populates the table from the database and displays to user
function selectAll() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for(i=0;i<res.length;i++) {
        table.push(
            [res[i].item_id,
            res[i].product_name,
            res[i].department_name,
            res[i].price,
            res[i].stock_quantity]
        );
    }
    console.log(table.toString());
  });
}

