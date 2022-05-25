"use strict";
const partNumberHTML = document.getElementById("part-number");
const quantityHTML = document.getElementById("quantity");
const costHTML = document.getElementById("cost");
const weightHTML = document.getElementById("weight");
const finishHTML = document.getElementById("finish");
const inventoryHTML = document.querySelectorAll(".data-inventory");
const submitItem = document.getElementById("submitItem");
const itemDisplay = document.querySelector(".display");

// class Item {
//   constructor(partNumber, quantity, cost, weight, finish) {
//     (this.partNumber = partNumber),
//       (this.quantity = Number(quantity)),
//       (this.cost = Number(cost)),
//       (this.weight = Number(weight)),
//       (this.finish = finish);
//   }
// }

//Function to generate new items from user input
const newItems = function () {
  let items = {
    partNumber: partNumberHTML.value,
    quantity: Number(quantityHTML.value),
    cost: Number(costHTML.value),
    weight: Number(weightHTML.value),
    finish: finishHTML.value,
  };

  inventoryItems.push(items);
  //   inventoryItems.push(
  //     new Item(
  //       partNumberHTML.value,
  //       Number(quantityHTML.value),
  //       Number(costHTML.value),
  //       Number(weightHTML.value),
  //       finishHTML.value
  //     )
  //   );
};

//Function that checks wether the input fields are filled or not

function displayItems() {
  //Creating a current item variable to be used in specific tasks such as removing an item card

  itemDisplay.innerHTML = "";
  for (let i = 0; i < inventoryItems.length; i++) {
    let item = document.createElement("div");
    item.setAttribute("class", "item");

    //Using a template literal to edit the inner html of the newly generated item card
    item.innerHTML = `<div> Part no. : ${inventoryItems[
      i
    ].partNumber.toUpperCase()}</div>
    <div> Quantity : ${inventoryItems[i].quantity}</div>
    <div> Cost : $${inventoryItems[i].cost}</div>
    <div> Weight : ${inventoryItems[i].weight} lbs</div>
    <div> Finish : ${inventoryItems[i].finish}</div>
    <div> Total Cost :  $ ${
      inventoryItems[i].quantity *
      inventoryItems[i].cost *
      inventoryItems[i].weight
    }`;
    itemDisplay.append(item);

    let cardFunctions = document.createElement("div");
    cardFunctions.setAttribute("id", "cardFunctions");
    item.append(cardFunctions);

    let remove = document.createElement("button");
    remove.setAttribute("id", "remove");
    remove.innerHTML = "Remove";
    cardFunctions.append(remove);

    remove.addEventListener("click", function () {});
  }
}

//Pressing the submit button will execute tasks
submitItem.addEventListener("click", function (e) {
  e.preventDefault();
  inputLengthChecker();
});

function inputLengthChecker() {
  if (
    partNumberHTML.value == "" ||
    quantityHTML.value <= 0 ||
    costHTML.value <= 0 ||
    weightHTML.value <= 0
  ) {
    alert(
      "Please input all fields and make sure no values are negative and try again"
    );
  } else {
    newItems();
    displayItems(itemDisplay);
  }
}

//InventoryItems is the array where different items will be stored in real time
let inventoryItems = [];
