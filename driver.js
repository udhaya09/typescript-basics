"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var oops_1 = require("./oops");
var myCustomer = new oops_1.Customer("margin", "john");
console.log("firstname: ".concat(myCustomer.firstname));
console.log("lastname: ".concat(myCustomer.lastname));
myCustomer.lastname = "uday";
console.log("after changing lastname: ".concat(myCustomer.lastname));
