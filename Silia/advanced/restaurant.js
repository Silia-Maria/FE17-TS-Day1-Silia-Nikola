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
// print array dishes
for (let dish of dishes) {
    let result = `<div class="m-2">
       <p>${dish.name}</p>
       <p>${dish.definition}</p>
       <p>${currencyFormater.format(dish.price)}</p>
     <hr></div> `;
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
// MenuButton with Scroll event
const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
    const ScrollMenu = document.getElementById("menuScroll");
    ScrollMenu.scrollIntoView();
});
//Intro Button
const introBtn = document.getElementById("intro");
introBtn.addEventListener("click", () => {
    const ScrollIntro = document.getElementById("introScroll");
    ScrollIntro.scrollIntoView();
});
// Reservations Button
