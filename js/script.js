// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

function salaryIncome() {
  const TAX_RATE = 0.18;

  // input
  const pizzaSize = document.getElementById("pizza-size").value;
  const numberToppings = document.getElementById("number-toppings").value;

  // process
let totalCost;

if (pizzaSize == "extra large") {
  totalCost = 10.00;
  
  if (numberToppings == "1") {
    totalCost =+ 1.00;
  } else if (numberToppings == "2") {
    totalCost =+ 1.75;
  }
    else if (numberToppings == "3") {
        totalcost =+ 2.50;
  }
    else (numberToppings == "4") {
        totalcost =+ 3.35;
  }
  }

const finalAnswer = totalCost + totalCost * TAX_RATE;

// output
document.getElementById("cost-no-tax").innerHTML =
  "your pay is: CAD$" + finalAnswer 
}