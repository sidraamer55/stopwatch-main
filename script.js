let interval;
let outputSeconds = document.getElementById("seconds");
let outputTens = document.getElementById("tens");
let outputHours = document.getElementById("hours");
let outputMinutes = document.getElementById("minutes");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let seconds = 0;
let tens = 0;
let minutes = 0;
let hours = 0;


startButton.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});


stopButton.addEventListener("click", () => {
    clearInterval(interval);
});


resetButton.addEventListener("click", () => {
    clearInterval(interval);
    outputTens.innerHTML = "00";
    outputSeconds.innerHTML = "00";
    outputMinutes.innerHTML = "00";
    outputHours.innerHTML = "00";
    tens = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
});

function startTimer() {
    tens++;
    
    
    if (tens <= 9) {
        outputTens.innerHTML = '0' + tens;
    } else {
        outputTens.innerHTML = tens;
    }

   
    if (tens > 99) {
        tens = 0;
        seconds++;
    }
    if (seconds <= 9) {
        outputSeconds.innerHTML = '0' + seconds;
    } else {
        outputSeconds.innerHTML = seconds;
    }

   
    if (seconds > 59) {
        seconds = 0;
        minutes++;
    }
    if (minutes <= 9) {
        outputMinutes.innerHTML = '0' + minutes;
    } else {
        outputMinutes.innerHTML = minutes;
    }

    if (minutes > 59) {
        minutes = 0;
        hours++;
    }
    if (hours <= 9) {
        outputHours.innerHTML = '0' + hours;
    } else {
        outputHours.innerHTML = hours;
    }
}