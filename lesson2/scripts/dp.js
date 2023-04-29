document.getElementById("currentYear").innerHTML = new Date().getFullYear()
let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months [d.getMonth()];
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + d.getFullYear();

document.getElementById("currentdate").textContent = fulldate;

// ***************************

let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};
/*document.getElementById(
    "currentdate2"
).textContent = new Date().toLocalDatesString("en-US", options);*/