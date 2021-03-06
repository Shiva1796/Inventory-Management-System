"use strict";
const partNumberHTML = document.getElementById("part-number");
const quantityHTML = document.getElementById("quantity");
const costHTML = document.getElementById("cost");
const weightHTML = document.getElementById("weight");
const commentsHTML = document.getElementById("comments");
const submitItem = document.getElementById("submitItem");
const itemDisplay = document.querySelector(".display");
const searchBar = document.querySelector("#search");

//Function to generate new items from user input
const newItems = function () {
  let items = {
    partNumber: partNumberHTML.value,
    quantity: Number(quantityHTML.value),
    cost: Number(costHTML.value),
    weight: Number(weightHTML.value),
    comments: commentsHTML.value,
  };

  function existingInputCheck() {
    const parts = inventoryItems.map(function (part) {
      return part.partNumber;
    });
    if (parts.includes(partNumberHTML.value)) {
      swal("Similar part already exists");
    } else {
      inventoryItems.push(items);
    }
  }
  existingInputCheck();
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
    <div>Quantity : ${inventoryItems[i].quantity}</div>
    <div> Cost : $${inventoryItems[i].cost}</div>
    <div> Weight : ${inventoryItems[i].weight} lbs</div>
    <div> Comments : ${inventoryItems[i].comments}</div>
    <div> Total Cost :  $ ${
      inventoryItems[i].quantity *
      inventoryItems[i].cost *
      inventoryItems[i].weight
    }`;
    itemDisplay.append(item);

    let remove = document.createElement("button");
    remove.setAttribute("id", "remove");
    remove.innerHTML = '<i class=" fa-2x fa-solid fa-trash"></i>';
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
