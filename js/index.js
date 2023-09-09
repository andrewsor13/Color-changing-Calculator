"use strict";
import { changeThemeOne, changeThemeTwo, changeThemeThree } from "./utilsForCalc.js";
const inputValue = document.querySelector(".theme-form__input");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const dotBtn = document.getElementById("dot");
const reset = document.querySelector("#reset");
const equal = document.querySelector("#equal");
const result = document.querySelector(".result__text");
const deleteBtn = document.getElementById("delete");
const digit = document.getElementsByClassName("digit");
const digitArray = [...digit];

inputValue.addEventListener("input", () => {
  if (inputValue.value === "1") {
    changeThemeOne();
  } else if (inputValue.value === "2") {
    changeThemeTwo();
  } else if (inputValue.value === "3") {
    changeThemeThree();
  }
});

let currentNumber = 0;
let equation = "";

digitArray.forEach((digit) => {
  digit.addEventListener("click", (event) => {
    let btnValue = digit.value;

    if (!isNaN(btnValue)) {
      currentNumber = currentNumber * 10 + parseInt(btnValue);
      equation += btnValue;
      result.textContent = equation;
    }
  });
});

plusBtn.addEventListener("click", () => {
  if (currentNumber != 0) {
    equation += `+`;
    result.textContent = equation;
    currentNumber = 0;
  }
});

minusBtn.addEventListener("click", () => {
  if (currentNumber != 0) {
    equation += `-`;
    result.textContent = equation;
    currentNumber = 0;
  }
});

multiplyBtn.addEventListener("click", () => {
  if (currentNumber != 0) {
    equation += `*`;
    result.textContent = equation;
    currentNumber = 0;
  }
});

divideBtn.addEventListener("click", () => {
  if (currentNumber != 0) {
    equation += `/`;
    result.textContent = equation;
    currentNumber = 0;
  }
});

dotBtn.addEventListener("click", () => {
  if (currentNumber != 0) {
    equation += `.`;
    result.textContent = equation;
    currentNumber = 0;
  }
});

deleteBtn.addEventListener("click", (event) => {
  currentNumber = Math.floor(currentNumber / 10);
  equation = equation.slice(0, -1);
  result.textContent = equation;
});

reset.addEventListener("click", () => {
  currentNumber = 0;
  equation = "";
  result.textContent = currentNumber;
});

equal.addEventListener("click", () => {
  result.textContent = eval(equation);
  equation = result.textContent;
});
