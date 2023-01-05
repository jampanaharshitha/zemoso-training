// const printName = (name) => {
   // return “Hi” + name;
//}
 
const printName = name =>
console.log("hi "+name);
printName('Harshi');

// const printBill = (name, bill) => {
//     return “Hi “ + name + “, please pay: “ + bill;
// }

const printBill = (name, bill) => {
    return `Hi ${name}, please pay:${bill}`;
}
console.log(printBill('harshi',10000));

// const person = {
//     name: “Noam Chomsky”,
//     age: 92
// }

// let name = person.name;
// let age = person.age;
// console.log(name);
// console.log(age);

const person = {
    name: 'Noam Chomsk',age: 92
}

let {name,age}=person;
console.log(name);
console.log(age);

