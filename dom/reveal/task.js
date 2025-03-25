const reveal = [...document.querySelectorAll('.reveal')];

document.addEventListener('scroll', () => {
    reveal.forEach(el => {
        const {top, bottom} = el.getBoundingClientRect();

        if (!(top > innerHeight || bottom < 0)) {
            el.classList.add('reveal_active');
        } else {
            el.classList.remove('reveal_active');
        }
    });
});