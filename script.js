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
function inputLengthChecker() {}

function displayItems() {
  //Creating a current item variable to be used in specific tasks such as removing an item card
  let currentItem;
  currentItem = inventoryItems.find(
    (item) => item.partNumber === partNumberHTML.value
  );

  //   console.log(currentItem);

  itemDisplay.innerHTML = "";
  for (let i = 0; i < inventoryItems.length; i++) {
    let item = document.createElement("div");
    item.setAttribute("id", "item");

    //Using a template literal to edit the inner html of the newly generated item card
    item.innerHTML = `<div> Part no. : ${inventoryItems[i].partNumber}</div>
    <div> Quantity : ${inventoryItems[i].quantity}</div>
    <div> Cost : $${inventoryItems[i].cost}</div>
    <div> Weight : ${inventoryItems[i].weight} lbs</div>
    <div> Finish : ${inventoryItems[i].finish}</div>`;
    itemDisplay.append(item);

    let cardFunctions = document.createElement("div");
    cardFunctions.setAttribute("id", "cardFunctions");
    item.append(cardFunctions);

    let remove = document.createElement("button");
    remove.setAttribute("id", "remove");
    remove.innerHTML = "Remove";
    cardFunctions.append(remove);

    let calculate = document.createElement("button");
    calculate.setAttribute("id", "calculate");
    calculate.innerHTML = "Calculate";
    cardFunctions.append(calculate);

    let calculateResult = document.createElement("div");
    calculateResult.setAttribute("id", "calculateResult");
    cardFunctions.append(calculateResult);

    //Adding a remove button and calculate button to calculate the cost of each item depending on the parameters
    remove.addEventListener("click", function () {});

    calculate.addEventListener("click", function () {
      calculateResult.textContent = `$ ${Math.trunc(
        currentItem.quantity * (currentItem.weight * 0.1) * currentItem.cost
      )}`;
      console.log(currentItem);
    });
  }
}

//Pressing the submit button will execute tasks
submitItem.addEventListener("click", function () {
  newItems();
  displayItems(itemDisplay);
});

//InventoryItems is the array where different items will be stored in real time
let inventoryItems = [];
// console.log(inventoryItems);
// console.log(inventoryItems.Item);
