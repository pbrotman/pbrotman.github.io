// Set current year for copyright date.
let elsCurYear = document.querySelectorAll(".current-year");
elsCurYear.forEach(el => {
    el.innerHTML = new Date().getFullYear();
});

// Highlight specific elements on hover.
function hoverEmphasis(el, num=""){
    el.addEventListener("mouseover", () => {el.classList.add(`emphasis${num}`)});
    el.addEventListener("mouseout", () => {el.classList.remove(`emphasis${num}`)});
};

let headerButtons = document.querySelectorAll("header button");
headerButtons.forEach(el => hoverEmphasis(el));

// let projectDivs = document.querySelectorAll(".project");
// projectDivs.forEach(el => hoverEmphasis(el));

let iconImgs = document.querySelectorAll("#icons i");
iconImgs.forEach(el => hoverEmphasis(el, 3));