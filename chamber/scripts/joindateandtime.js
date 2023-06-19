var d = new Date();

//date field//
document.getElementById("date").value = d.toDateString();

//time field//
var hours = d.getHours();
var mins = d.getMinutes();
var seconds = d.getSeconds();
document.getElementById("time").value = hours + ":" + mins + ":" + seconds;