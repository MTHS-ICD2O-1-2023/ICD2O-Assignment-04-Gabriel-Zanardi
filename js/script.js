// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
// Constants for pizza sizes and their costs
const EXTRA_LARGE_COST = 10.00;
const LARGE_COST = 6.00;
const TAX_RATE = 0.18; // 13% tax rate

// Retrieve selected pizza size
const pizzaSizeInput = document.getElementById("pizza-size");
const selectedPizzaSize = parseFloat(pizzaSizeInput.value); // Parse the value as a float

// Get the selected number of toppings
const selectedToppings = parseInt(document.querySelector('input[name="options"]:checked').value);

// Define the prices for each topping
const toppingPrices = {
    1: 1.00,
    2: 1.75,
    3: 2.50,
    4: 3.35
};

// Calculate the base cost based on the selected pizza size
let baseCost;
if (selectedPizzaSize === EXTRA_LARGE_COST) {
    baseCost = EXTRA_LARGE_COST;
} else if (selectedPizzaSize === LARGE_COST) {
    baseCost = LARGE_COST;
}

// Calculate the total cost including toppings and tax
const totalCost = baseCost + (toppingPrices[selectedToppings] || 0); // Using the selected number of toppings to retrieve its price from the toppingPrices object
const totalCostWithTax = totalCost * (1 + TAX_RATE);

// Display or use the total cost with tax as needed
document.getElementById("answer").innerHTML = ("Total Cost with Tax: $" + totalCostWithTax.toFixed(2));
}
