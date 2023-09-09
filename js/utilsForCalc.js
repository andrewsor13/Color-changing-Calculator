"use strict";

const inputValue = document.querySelector(".theme-form__input");
const themeSection = document.querySelector(".theme-section");
const resultSection = document.querySelector(".result-section");
const calcSection = document.querySelector(".calculator-section");
const digit = document.getElementsByClassName("digit");
const digitArray = [...digit];
const delReset = document.querySelector(".delete-reset");
const pageTitle = document.querySelector(".title");
const themeTitle = document.querySelector(".theme-form__title");
const labelNumber = document.querySelectorAll(".theme-form__labels label");
const labelArray = [...labelNumber];
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const dotBtn = document.getElementById("dot");
const reset = document.querySelector("#reset");
const equal = document.querySelector("#equal");
const result = document.querySelector(".result__text");
const deleteBtn = document.getElementById("delete");
delReset.style.boxShadow = "0 5px 0 #8ea9c2, 0px 7px 3px rgba(0, 0, 0, 0.25)";
reset.style.boxShadow = "0 5px 0 #8ea9c2, 0px 7px 3px rgba(0, 0, 0, 0.25)";

function changeThemeOne() {
  document.body.style.backgroundColor = "#A0BDD9";
  themeSection.style.backgroundColor = "#A0BDD9";
  resultSection.style.backgroundColor = "#547799";
  resultSection.style.boxShadow = "0 5px 0 #45617e, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  result.style.color = "#FFFFFF";
  digitArray.forEach((item) => {
    item.className = "";
    item.classList.add("digit");
    item.style.color = "#585779";
    item.style.backgroundColor = "	#F5F5F5";
  });
  labelArray.forEach((item) => {
    item.style.color = "#FFFFFF";
  });
  pageTitle.style.color = "#FFFFFF";
  themeTitle.style.color = "#FFFFFF";
  delReset.style.color = "#FFFFFF";
  reset.style.color = "#FFFFFF";
  equal.style.color = "#FFFFFF";
  deleteBtn.style.backgroundColor = "#A0BDD9";
  reset.style.backgroundColor = "#A0BDD9";
  reset.style.boxShadow = "0 5px 0 #8ea9c2, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  calcSection.style.backgroundColor = "#547799";
  calcSection.style.boxShadow = "0 5px 0 #45617e, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  equal.style.backgroundColor = "#EC5637";
  equal.style.boxShadow = "0 5px 0 #C43012, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  inputValue.style.backgroundColor = "#547799";
  plusBtn.style.backgroundColor = "#F5F5F5";
  plusBtn.style.color = "#000000";
  minusBtn.style.backgroundColor = "#F5F5F5";
  minusBtn.style.color = "#000000";
  multiplyBtn.style.backgroundColor = "#F5F5F5";
  multiplyBtn.style.color = "#000000";
  divideBtn.style.backgroundColor = "#F5F5F5";
  divideBtn.style.color = "#000000";
  dotBtn.style.backgroundColor = "#F5F5F5";
  dotBtn.style.color = "#000000 ";
  delReset.style.boxShadow = "0 5px 0 #8ea9c2, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  plusBtn.style.boxShadow = "0 5px 0 #e9d9d9, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  minusBtn.style.boxShadow = "0 5px 0 #e9d9d9, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  multiplyBtn.style.boxShadow = "0 5px 0 #e9d9d9, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  divideBtn.style.boxShadow = "0 5px 0 #e9d9d9, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  dotBtn.style.boxShadow = "0 5px 0 #e9d9d9, 0px 7px 3px rgba(0, 0, 0, 0.25)";
}

function changeThemeTwo() {
  document.body.style.backgroundColor = "#e4dddd";
  themeSection.style.backgroundColor = "#e4dddd";
  resultSection.style.backgroundColor = "#FFFFFF";
  resultSection.style.boxShadow = "0px 10px 5px -4px rgba(0,0,0,0.75)";
  result.style.color = "#000000";
  digitArray.forEach((item) => {
    item.className = "";
    item.classList.add("digit2");
    item.style.color = "#000000";
    item.style.backgroundColor = "	#F5F5F5";
  });
  labelArray.forEach((item) => {
    item.style.color = "#000000";
  });
  pageTitle.style.color = "#000000";
  themeTitle.style.color = "#000000";
  delReset.style.color = "#FFFFFF";
  deleteBtn.style.backgroundColor = "#96DED1";
  reset.style.backgroundColor = "#96DED1";
  calcSection.style.backgroundColor = "#C0C0C0";
  calcSection.style.boxShadow = "0px 10px 5px -4px rgba(0,0,0,0.75)";
  equal.style.backgroundColor = "#FF8C00";
  inputValue.style.backgroundColor = "#C0C0C0";
  plusBtn.style.backgroundColor = "#F5F5F5";
  plusBtn.style.color = "#000000";
  minusBtn.style.backgroundColor = "#F5F5F5";
  minusBtn.style.color = "#000000";
  multiplyBtn.style.backgroundColor = "#F5F5F5";
  multiplyBtn.style.color = "#000000";
  divideBtn.style.backgroundColor = "#F5F5F5";
  divideBtn.style.color = "#000000";
  dotBtn.style.backgroundColor = "#F5F5F5";
  dotBtn.style.color = "#000000 ";
  delReset.style.boxShadow = "0 5px 0 #8ea9c2, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  reset.style.boxShadow = "0 5px 0 #8ea9c2, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  plusBtn.style.boxShadow = "0 5px 0 #e9d9d9, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  minusBtn.style.boxShadow = "0 5px 0 #e9d9d9, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  multiplyBtn.style.boxShadow = "0 5px 0 #e9d9d9, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  divideBtn.style.boxShadow = "0 5px 0 #e9d9d9, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  dotBtn.style.boxShadow = "0 5px 0 #e9d9d9, 0px 7px 3px rgba(0, 0, 0, 0.25)";
}

function changeThemeThree() {
  document.body.style.backgroundColor = "rgb(43 21 53)";
  themeSection.style.backgroundColor = "rgb(43 21 53)";
  resultSection.style.backgroundColor = "#4A235A";
  resultSection.style.boxShadow = "0px 10px 5px -4px rgba(0,0,0,0.75)";
  result.style.color = "#FFEA00";
  digitArray.forEach((item) => {
    item.className = "";
    item.classList.add("digit3");
    item.style.color = "#FFEA00";
    item.style.backgroundColor = "	#31173C";
  });
  labelArray.forEach((item) => {
    item.style.color = "#FFEA00";
  });
  pageTitle.style.color = "#FFEA00";
  themeTitle.style.color = "#FFEA00";
  delReset.style.color = "#FFFFFF";
  deleteBtn.style.backgroundColor = "#BF40BF";
  reset.style.backgroundColor = "#BF40BF";
  reset.style.boxShadow = "0 5px 0 #4A235A, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  calcSection.style.backgroundColor = "#4A235A";
  calcSection.style.boxShadow = "0 5px 0 #4A235A, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  equal.style.backgroundColor = "#7DF9FF";
  equal.style.boxShadow = "0 5px 0 #4AA3A8, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  inputValue.style.backgroundColor = "#4A235A";
  plusBtn.style.backgroundColor = "#31173C";
  plusBtn.style.color = "#FFEA00";
  minusBtn.style.backgroundColor = "#31173C";
  minusBtn.style.color = "#FFEA00";
  multiplyBtn.style.backgroundColor = "#31173C";
  multiplyBtn.style.color = "#FFEA00";
  divideBtn.style.backgroundColor = "#31173C";
  divideBtn.style.color = "#FFEA00";
  dotBtn.style.backgroundColor = "#31173C";
  dotBtn.style.color = "#FFEA00";
  delReset.style.boxShadow = "0 5px 0 #4A235A, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  plusBtn.style.boxShadow = "0 5px 0 #4A235A, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  minusBtn.style.boxShadow = "0 5px 0 #4A235A, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  multiplyBtn.style.boxShadow = "0 5px 0 #4A235A, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  divideBtn.style.boxShadow = "0 5px 0 #4A235A, 0px 7px 3px rgba(0, 0, 0, 0.25)";
  dotBtn.style.boxShadow = "0 5px 0 #4A235A, 0px 7px 3px rgba(0, 0, 0, 0.25)";
}

export { changeThemeOne, changeThemeTwo, changeThemeThree };
