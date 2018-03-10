# node-storefront

node-storefront is a node.js CLI application linked to a mySQL database.  The application keeps an inventory of various items and departments. The application includes three user interfaces that each contain seperate commands:

* storefrontCustomer
* storefrontManager
* storefrontSupervisor

### Prerequisites 

node-storefront requires the following npm packages:
- mysql
- inquirer
- cli-table

### Installing

```
npm install mysql inquirer cli-table
```
once installed, run one of the three user interfaces for the application:

```
node storefrontCustomer
```

```
node storefrontManager
```

```
node storefrontSupervisor
```

## Deployment
