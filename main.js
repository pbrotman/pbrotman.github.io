// Set current year for copyright date.
let elsCurYear = document.querySelectorAll(".current-year");
elsCurYear.forEach(el => {
    el.innerHTML = new Date().getFullYear();
})

// Highlight header buttons on hover.
let headerButtons = document.querySelectorAll("header button");
headerButtons.forEach(el => {
    el.addEventListener("mouseover", () => {el.classList.add("emphasis")});
    el.addEventListener("mouseout", () => {el.classList.remove("emphasis")});
})

let projectDivs = document.querySelectorAll(".project");
projectDivs.forEach(el => {
    el.addEventListener("mouseover", () => {el.classList.add("emphasis")});
    el.addEventListener("mouseout", () => {el.classList.remove("emphasis")});
})