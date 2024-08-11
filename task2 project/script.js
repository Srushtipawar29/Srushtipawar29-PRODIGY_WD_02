let startTime, elapsedTime = 0, timerInterval;
const display = document.getElementById('display');
const laps = document.getElementById('laps');

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.textContent = timeToString(elapsedTime);
    }, 10);
    showButton('STOP');
}

function stopTimer() {
    clearInterval(timerInterval);
    showButton('START');
}

function resetTimer() {
    clearInterval(timerInterval);
    display.textContent = '00:00:00';
    elapsedTime = 0;
    laps.innerHTML = '';
    showButton('START');
}

function lapTimer() {
    const lapTime = timeToString(elapsedTime);
    const li = document.createElement('li');
    li.textContent = lapTime;
    laps.appendChild(li);
}

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, '0');
    let formattedSS = ss.toString().padStart(2, '0');
    let formattedMS = ms.toString().padStart(2, '0');

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

function showButton(buttonKey) {
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    if (buttonKey === 'START') {
        startButton.style.display = 'block';
        stopButton.style.display = 'none';
    } else {
        startButton.style.display = 'none';
        stopButton.style.display = 'block';
    }
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', lapTimer);

showButton('START');
