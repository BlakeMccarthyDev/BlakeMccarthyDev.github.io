
var IntervalID = setInterval(updateDate, 1000); // Update every minute

function updateDate() {
document.getElementById("date-block").innerText = new Date().toLocaleTimeString();
}