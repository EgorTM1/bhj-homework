const hole = [...document.querySelectorAll('div.hole')];
const dead = document.querySelector('#dead');
const lost = document.querySelector('#lost');

hole.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.contains('hole_has-mole')
            ? ++dead.textContent
            : ++lost.textContent;

        if (dead.textContent == 10) {
            alert('Вы победили!');
        } else if (lost.textContent == 5) {
            alert('Вы проиграли!');
        }

        if (dead.textContent == 10 || lost.textContent == 5) {
            dead.textContent = 0;
            lost.textContent = 0;
        }
    });
});