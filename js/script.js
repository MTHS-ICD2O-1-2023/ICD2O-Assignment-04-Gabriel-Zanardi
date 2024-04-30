// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

function salaryIncome() {
  const TAX_RATE = 0.18

  // input
  const hoursWorked = document.getElementById("hours-worked").value
  const hourlyRate = document.getElementById("hourly-rate").value

  // process
  const pay = (hoursWorked * hourlyRate) * (1.00 - TAX_RATE)
  const roundedAnswer = pay.toFixed(2)
  const payTwo = (hoursWorked * hourlyRate) * TAX_RATE
  const roundedAnswerTwo = payTwo.toFixed(2)

  // output
  document.getElementById("income-salary").innerHTML =
    "your pay is: CAD$" + roundedAnswer 
    document.getElementById("government-tax").innerHTML = 
    "the government will take: CAD$" + roundedAnswerTwo
}