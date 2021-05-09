const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minutesEl = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')

console.log(daysEl)

const newYear = '1 Jan 2022';

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalseconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours  = Math.floor(totalseconds / 3600) % 24;
    const minutes  = Math.floor(totalseconds / 60) % 60;
    const seconds  = Math.floor(totalseconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

// to add zero before the time digit if it is less than 10
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);