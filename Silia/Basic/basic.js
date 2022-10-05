"use strict";
//Exercise 1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.table(numbers);
for (let number of numbers) {
    for (let i = 1; i <= numbers.length; i++) {
        console.table(`${number} x ${i} = ${number * i}`);
    }
}
// Exercise 2
let fullName = [
    {
        fName: "Silia",
        lName: "Cronauer"
    }
];
document.write(fullName[0].fName, fullName[0].lName);
numbers.forEach(() => { document.write(fullName[0].fName + "<br>"); });
setTimeout(() => {
    numbers.forEach(() => { document.write(fullName[0].lName + "<br>"); });
}, 5000);
// Exercise 3
let names = ["Anna", "Lisa", "Alex"];
for (let name in names) {
    console.log(name);
}
for (let name of names) {
    console.log(name);
}
for (let i in names) {
    console.log(i, names[i]);
}
