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
    message: "What action would you like to take?",
    choices: ["View Products for Sale",
            "View Low Inventory",
            "Add to Inventory",
            "Add New Product"]
    }
  ]).then(answers => {
        const selection = answers.viewProducts;
        function doAction(selection) {
            let actions = {
                'View Products for Sale': function() {

                },
                'View Low Inventory': function() {

                },
                'Add to Inventory': function() {

                },
                'Add New Product': function() {

                }
            };
            return (actions[selection])();
        }
  });

function viewInv() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (i=0;i<res.length;i++) {
            table.push([
                res[i].item_id,
                res[i].product_name,
                res[i].department_name,
                res[i].price,
                res[i].stock_quantity
            ]);
        }
        console.log(table.toString());
        return res;
    })
}

function viewLowInv() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (i=0;i<res.length;i++) {
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

function addInv() {
    inquirer.prompt([
        {
          type: "input",
          name: "productId",
          message: "Please input ID of product you would like to add stock to"
        },
        {
          type: "input",
          name: "amountAdded",
          message: "How many units would you like to add?"
        }
      ])
      .then(answers => {
        let data = viewInv();
        let productIndex = (answers.productId-1);
        let newStock = (data[productIndex].stock_quantity) + (answers.amountAdded);
        //put some validation here if I have time
        if(answers.productId < 1 || answers.productId > data.length) {
            console.log("Please enter a valid product ID");
        }else if(answers.amountPurchased > data[productIndex].stock_quantity) {
            console.log("Insuffucient Quantity!");
        } else {
            console.log("\nUpdating " + data[productIndex].product_name);
            updateStock(data, productIndex, newStock);
        }
      });
}

function updateStock(data, productIndex, newStock) {
    var query = connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
          stock_quantity: newStock
        },
        {
          item_id: data[productIndex].item_id
        }
      ],
      function(err, data) {
        if (err) throw err;
        console.log("\nproduct updated");
        console.log("\nNew stock is: " + newStock);
      }
    );
    connection.end();
}
