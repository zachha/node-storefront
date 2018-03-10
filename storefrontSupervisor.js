const mysql = require("mysql");
const inquirer = require("inquirer");
const Table = require("cli-table");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "clazlaZ1!2345",
  database: "node_storefrontdb"
});
//outlines a table containing the product information from the database
let table = new Table({
  head: ["Department ID", "Department Name", "Overhead Costs", "Product Sales", "Total Profit"]
});
// asks manager what action they would like to take
inquirer
  .prompt([
    {
      type: "list",
      name: "supervisor",
      message: "What action would you like to take?",
      choices: [
        "View Product Sales by Department",
        "Create New Department"
      ]
    }
  ])
  .then(answers => {
    const selection = answers.supervisor;
    doAction(selection);
  });
// object literal that runs the appropriate functions depending on the action chosen
function doAction(selection) {
  let actions = {
    "View Product Sales by Department": function() {
      viewInv();
    },
    "Create New Department": function() {
      addDepartment();
    }
  };
  return actions[selection]();
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "departmentName",
        message: "Please input the name of the Department to add"
      },
      {
        type: "input",
        name: "departmentCost",
        message: "Please enter the Over Head Costs of the Department"
      }
    ])
    .then(answers => {
      let query = connection.query(
        "INSERT INTO departments SET ?",
        {
          department_name: answers.departmentName,
          over_head_costs: answers.departmentCost
        },
        function(err, res) {
          if (err) throw err;
          console.log("\n New Department Inserted");
        }
      );
    });
}
