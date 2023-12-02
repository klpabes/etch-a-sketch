"use strict";

const gridContainer = document.querySelector(".grid-container");

// grid container 16x16
for (let i = 0; i < 256; i++) {
  const gridDiv = document.createElement("div");
  gridDiv.classList.add("grid__cell");
  gridDiv.style.cssText = "border: 1px black solid; width:20px; height:20px;";
  gridContainer.appendChild(gridDiv);
}
