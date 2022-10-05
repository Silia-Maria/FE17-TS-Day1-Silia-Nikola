//Exercise 1
let numbers : Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.table(numbers)


for (let number of numbers) {

    for (let i=1; i <= numbers.length; i++) {
    
    console.table(`${number} x ${i} = ${number*i}`);}
    
}

// Exercise 2

let fullName: Array<{fName:string, lName: string}> = [
    {
        fName: "Silia",
        lName: "Cronauer"
    }
]
document.write(fullName[0].fName, fullName[0].lName);

numbers.forEach(() => {document.write(fullName[0].fName + "<br>" )})

setTimeout(() => {
numbers.forEach (() => {document.write(fullName[0].lName + "<br>" )});
}, 5000);

// Exercise 3

let names: string[] = ["Anna", "Lisa", "Alex"];

for (let name1 in names) {
    console.log(name1);
}

for (let name2 of names) {
console.log(name2);
}

for (let i in names) {
    console.log(i, names[i]);
}

