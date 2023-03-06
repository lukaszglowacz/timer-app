// set the countdown date and time (YYYY-MM-DD HH:MM:SS format)
const countdownDate = new Date('2023-03-07T07:59:59').getTime();

// get the timer elements from the HTML
const daysEl = document.querySelector('.days .time');
const hoursEl = document.querySelector('.hours .time');
const minutesEl = document.querySelector('.minutes .time');
const secondsEl = document.querySelector('.seconds .time');

const countdown = setInterval(() => {
        // get the current date and time
        const now = new Date().getTime();

        // caklculate the time remaining
        const timeRemaining = countdownDate - now;

        // calculate days, hours, minutes and seconds remaining
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // update the timer display
        daysEl.innerHTML = days < 10 ? `0${days}` : days;
        hoursEl.innerHTML = hours < 10 ? `0${hours}` : hours;
        minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

        // check if the countdown has ended
        if (timeRemaining < 0) {
            clearInterval(countdown);
            daysEl.innerHTML = '00';
            hoursEl.innerHTML = '00';
            minutesEl.innerHTML = '00';
            secondsEl.innerHTML = '00';
        }
    },
    1000);