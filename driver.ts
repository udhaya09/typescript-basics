import { Customer } from "./oops";

let myCustomer = new Customer("margin", "john");




console.log(`firstname: ${myCustomer.firstname}`)
console.log(`lastname: ${myCustomer.lastname}`)

myCustomer.lastname = "uday";

console.log(`after changing lastname: ${myCustomer.lastname}`)