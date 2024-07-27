// Set current year for copyright date
let elsCurYear = document.querySelectorAll(".current-year");
elsCurYear.forEach((el) => {
    el.innerHTML = new Date().getFullYear();
})