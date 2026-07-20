
var clockInterval = window.setInterval(UpdateClock, 1000);
function UpdateClock() {
    var d = new Date();
    document.getElementById("clock").innerText = d.toLocaleTimeString();
}