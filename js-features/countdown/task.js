const timer = document.getElementById('timer');

const intervalId = setInterval(() => {
    if (+timer.textContent <= 0) {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!');
    } else {
        timer.textContent--;
    }
}, 1000);