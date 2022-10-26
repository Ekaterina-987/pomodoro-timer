const button = document.querySelector('#start');
let timerId;
let timer = document.querySelector('#pomodoro-time');

button.addEventListener('click', function() {
    if (button.textContent === "stop") {
        clearInterval(timerId);
        button.textContent = "start";
    } else {
        button.textContent = "stop";
        timerId = setInterval(function() {
            let minutes = timer.textContent.split(":")[0];
            let seconds = timer.textContent.split(":")[1];

            if (seconds != 00) {
                seconds -= 1;
                timer.textContent = `${minutes}:${seconds}`;
            } else if (minutes > 0) {
                minutes -= 1;
                seconds = 59;
                timer.textContent = `${minutes}:${seconds}`;
            }

            if (seconds < 10) {
                timer.textContent = `${minutes}:0${seconds}`;
            }

            if (seconds <= 0 && minutes <= 0) {
                clearInterval(timerId);
                timer.textContent = '25:00';
                button.textContent = 'start';
            }

        }, 10)

    }

})