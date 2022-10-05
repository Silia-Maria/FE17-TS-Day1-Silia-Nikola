"use strict";
let dishes = [
    {
        type: "starter",
        name: "Veggie Platter",
        definition: "seasonal fermented vegetables, served with honey-dip",
        price: 8,
    },
    {
        type: "starter",
        name: "Potato-Focaccia",
        definition: "home-made potato-focaccia, served with butter",
        price: 5,
    },
    {
        type: "veggie",
        name: "Mushroom Crumble",
        definition: "local mushrooms with spinach and pumpkinseeds",
        price: 9,
    },
    {
        type: "veggie",
        name: "Seasonal Ravioli",
        definition: "home-made ravioli filled with seasonal vegetables",
        price: 8,
    },
    {
        type: "meat",
        name: "Waldviertler Chicken",
        definition: "roasted chicken with caramalizes carottes in redwine sauce ",
        price: 13,
    },
    {
        type: "meat",
        name: "Lamb stew",
        definition: "local lamb stew with potatoes and vegetables",
        price: 15,
    },
    {
        type: "sweet",
        name: "Poppy-Seed dumplings",
        definition: "special austrian wheat dumplings with poppy-seeds, sugar and butter",
        price: 7,
    },
    {
        type: "sweet",
        name: "Chocolate Tart",
        definition: "grandma's famous chocolate tart, served with vanilla ice cream and fruit",
        price: 8,
    },
];
//currency Formater
const currencyFormater = new Intl.NumberFormat("de-AT", {
    style: "currency",
    currency: "EUR",
});
// starters index 0-1
for (let dish of dishes) {
    let result = `<div class="ms-2">
       <p>${dish.name}</p>
       <p>${dish.definition}</p>
       <p>${currencyFormater.format(dish.price)}</p>
     </div> <hr>`;
    if (dish.type == "starter") {
        let starterRow = document.getElementById("starters");
        starterRow.innerHTML += result;
    }
    else if (dish.type == "veggie") {
        let veggieRow = document.getElementById("veggie");
        veggieRow.innerHTML += result;
    }
    else if (dish.type == "meat") {
        let meatRow = document.getElementById("meat");
        meatRow.innerHTML += result;
    }
    else {
        let dessertRow = document.getElementById("dessert");
        dessertRow.innerHTML += result;
    }
}
// for (let starter of dishes) {
//    let starterRow = <HTMLSelectElement>document.getElementById("starters"); 
//    starterRow.innerHTML += `<div>
//     <p>${starter.name}</p>
//     <p>${starter.definition}</p>
//     <p>${starter.price}</p>
// </div> <hr>`} 
