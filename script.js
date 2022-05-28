"use strict";
const partNumberHTML = document.getElementById("part-number");
const quantityHTML = document.getElementById("quantity");
const costHTML = document.getElementById("cost");
const weightHTML = document.getElementById("weight");
const finishHTML = document.getElementById("finish");
const inventoryHTML = document.querySelectorAll(".data-inventory");
const submitItem = document.getElementById("submitItem");
const itemDisplay = document.querySelector(".display");
const viewToggle = document.querySelector("#view");

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
};

function displayItems() {
  itemDisplay.innerHTML = "";
  itemDisplay.length = inventoryItems.length;
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

    let remove = document.createElement("button");
    remove.setAttribute("id", "remove");
    remove.innerHTML = '<i class="fa-2x fa-solid fa-delete-left"></i>';
    item.append(remove);

    remove.addEventListener("click", function () {
      item.remove(inventoryItems.splice([i], 1));
    });
  }
}

function clearFields() {
  if ((submitItem.click = true)) {
    partNumberHTML.value = "";
    quantityHTML.value = "";
    costHTML.value = "";
    weightHTML.value = "";
    finishHTML.value = "";
  } else {
    return;
  }
}
//Pressing the submit button will execute tasks
submitItem.addEventListener("click", function () {
  inputLengthChecker();
  // newItems();
  // displayItems();
});

// Function that checks wether the input fields are filled or not
function inputLengthChecker() {
  if (
    partNumberHTML.value == "" ||
    quantityHTML.value <= 0 ||
    costHTML.value <= 0 ||
    weightHTML.value <= 0
  ) {
    swal({
      title: "Check Input Fields",
      text: "Please input all fields and make sure no values are negative and try again",
      icon: "info",
    });
  } else {
    newItems();
    displayItems();
    clearFields();
  }
}

//InventoryItems is the array where different items will be stored in real time
let inventoryItems = [];
