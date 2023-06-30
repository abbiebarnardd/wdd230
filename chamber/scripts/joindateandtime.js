
const date = new Date();

var datetime = "Last Sync: " + date.getDate() + "/"
+ (date.getMonth()+1)  + "/"
+ date.getFullYear() + " || "
+ date.getHours() + ":"
+ date.getMinutes() + ":"
+ date.getSeconds();
console.log(datetime)
document.getElementById("datetime").value = datetime