"use strict";

let color = "black";
let click = true;

const gridContainer = document.querySelector(".grid-container");
const countButton = document.querySelector(".button__divCount");
const modeText = document.querySelector(".mode");
const colorPicker = document.getElementById("colorPicker");
const controlsContainer = document.querySelector(".controls-container");

modeText.textContent = "Now Coloring (click grid to disable)";

// initial grid function with default size to 16
const initGrid = function (size = 16) {
  gridContainer.innerHTML = "";
  for (let i = 0; i < size * size; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("grid__cell");
    gridDiv.style.cssText = `background-color: white; border: 0.5px black solid; width:${
      480 / size
    }px; height:${480 / size}px;`;
    gridDiv.addEventListener("mouseover", colorDiv);
    gridContainer.appendChild(gridDiv);
  }
};

// initialize grid
initGrid();

countButton.addEventListener("click", () => {
  const size = Number(prompt("How many squares per side? 1-100 only"));
  if (size >= 1 && size <= 100) initGrid(size);
  else alert("wrong value");
});

//color the divs
function colorDiv() {
  if (click) {
    if (color == "rainbow") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else this.style.backgroundColor = color;
  }
}

//change color
function changeColor(choice) {
  console.log(choice);
  color = choice;
}

//generate random integer
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

gridContainer.addEventListener("click", () => {
  click = !click;
  click
    ? (modeText.textContent = "Now Coloring (click grid to disable)")
    : (modeText.textContent = "Not Coloring (click grid to enable)");
});

//get color input to change color
colorPicker.oninput = (e) => {
  changeColor(e.target.value);
};

//hover function for control container
const handleHover = function (e) {
  if (e.target.classList.contains("control__item")) {
    const item = e.target;

    const siblings = item
      .closest(".controls-container")
      .querySelectorAll(".control__item");

    siblings.forEach((el) => {
      if (el !== item) el.style.opacity = this;
    });
  }
};

// pass opacity as argument in bind function
controlsContainer.addEventListener("mouseover", handleHover.bind(0.5));

controlsContainer.addEventListener("mouseout", handleHover.bind(1));
