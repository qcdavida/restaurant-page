//This creates the content for the menu tab

let cardItemDivs = []; //array for the card divs
let menuItemDivs = []; //array of p tags which will contain the name of the menu item
let menuItemPricePs = [] //array of p tages which will contain the price of the menu item
let dishNames = ["Goat Stew", "Grilled Lamb Chops", "Braised Short Ribs", "Curry Chicken", "Brown Stew Snapper", "Jerk Pork"];
let priceOfDishes = ["$18", "$18", "$22", "$14", "$24", "$17"];

function menuContent() {
    //create HTML elements
    const mainContentDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    const menuDiv = document.createElement('div');
    const underScoreElement = document.createElement('p');

    createElementArrayHelper(cardItemDivs, "div");
    createElementArrayHelper(menuItemDivs, "p");
    createElementArrayHelper(menuItemPricePs, "p");

    //add classes to the elements
    mainContentDiv.classList.add('menu-container');
    menuDiv.classList.add('menu');

    //add text content to the elements 
    h1.textContent = "Menu";
    addTextContentForArray(menuItemDivs, dishNames);
    addTextContentForArray(menuItemPricePs, priceOfDishes);

    //append elements to DOM Tree
    mainContentDiv.appendChild(h1);
    appendElementsFromArray(cardItemDivs, menuItemDivs, menuItemPricePs, menuDiv, mainContentDiv, underScoreElement);

    return mainContentDiv;
}

function createElementArrayHelper(elementArray, tag) {
    for(let i = 0; i < 6; i++){
        elementArray[i] = document.createElement(tag);

        if(tag === 'div'){
            elementArray[i].classList.add('card');
        }
    }
}


function addTextContentForArray(elementArray, textArray) {
    for(let i = 0; i < elementArray.length; i++){
        elementArray[i].textContent = textArray[i];
    }
}

function appendElementsFromArray(parentNodeArray, childNodeNameArray, childNodePriceArray, menuDiv, mainParentNode, underScore) {
    for(let i = 0; i < parentNodeArray.length; i++){
        parentNodeArray[i].appendChild(childNodeNameArray[i]);
        parentNodeArray[i].appendChild(underScore);
        parentNodeArray[i].appendChild(childNodePriceArray[i]);
        menuDiv.appendChild(parentNodeArray[i]);
    }

    mainParentNode.appendChild(menuDiv);
}

export { menuContent };