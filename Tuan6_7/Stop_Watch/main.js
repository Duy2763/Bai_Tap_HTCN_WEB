
var clear;
var number;
var getValue = function() {
    number = document.getElementById("number").value;
    number++;
    if (number === 1000) {
        number = 0;
    }
    document.getElementById("number").value = number;
}

function start() {
    clear = setInterval(getValue, 10);
}

function pause() {
    clearInterval(clear);
    alert(number);
}

function clearScore() {
    clearInterval(clear);
    document.getElementById("number").value = 0;
}