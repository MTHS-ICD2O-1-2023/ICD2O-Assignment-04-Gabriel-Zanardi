"use strict";

function myButtonClicked() {
  const TAX_RATE = 0.18;

  // input
  const pizzaSize = document.getElementById("pizza-size").value;
  const numberToppings = document.getElementById("number-toppings").value;

  // process
let totalCost;

if (pizzaSize.toUpperCase() == "EXTRA LARGE") {
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
} else if (pizzaSize == "large") {
  totalCost = 6.00;
  
  if (numberToppings.toUpperCase()  == "1") {
    totalCost += 1.00;
  } else if (numberToppings == "2") {
    totalCost += 1.75;
  } else if (numberToppings == "3") {
    totalCost += 2.50;
  } else if (numberToppings == "4") {
    totalCost += 3.35;
  }
}

 const noTaxCost = (totalCost * (1.00 - TAX_RATE)).toFixed(2);
  const governmentTax = (totalCost * TAX_RATE).toFixed(2);
  const totalAmount = (parseFloat(governmentTax) + parseFloat(noTaxCost)).toFixed(2);

// Output
document.getElementById("cost-no-tax").innerHTML =
  "Your cost with no tax is: CAD$" + noTaxCost;
document.getElementById("government-tax").innerHTML =
  "The government tax on your purchase is: CAD$" + governmentTax;
document.getElementById("total-amount").innerHTML =
  "The total amount on your purchase is: CAD$" + totalAmount;
}