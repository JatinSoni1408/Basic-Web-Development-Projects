const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNumber = document.getElementById("day-number");
const year = document.getElementById("year");

const date = new Date();

// console.log(date);
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());

const month = date.getMonth();
monthName.innerText = date.toLocaleString("en",{month:"long"});
dayName.innerText = date.toLocaleString("en",{weekday:"long"});
dayNumber.innerText = date.getDate();
year.innerText = date.getFullYear();