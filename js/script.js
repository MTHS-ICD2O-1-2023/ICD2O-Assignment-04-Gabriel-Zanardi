"use strict";

function myButtonClicked() {
  const TAX_RATE = 0.18;

  // input
  const pizzaSize = document.getElementById("pizza-size").value;
  const numberToppings = document.getElementById("number-toppings").value;

  // process
  let totalCost;

  if (pizzaSize == "extra large") {
    totalCost = 10.00;
    
    if (numberToppings == "1") {
      totalCost += 1.00;
    } else if (numberToppings == "2") {
      totalCost += 1.75;
    } else if (numberToppings == "3") {
      totalCost += 2.50;
    } else if (numberToppings == "4") {
      totalCost += 3.35;
    }
  else if (pizzaSize == "large") {
    totalCost = 6.00
    if (numberToppings == "1") {
      totalCost += 1.00;
    } else if (numberToppings == "2") {
      totalCost += 1.75;
    } else if (numberToppings == "3") {
      totalCost += 2.50;
    } else if (numberToppings == "4") {
      totalCost += 3.35;
    }
  }
}

  const noTaxCost = totalCost;

  // output
  document.getElementById("cost-no-tax").innerHTML =
    "your cost with no tax is: CAD$" + noTaxCost;
}
