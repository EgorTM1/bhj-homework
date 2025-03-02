const cookie = document.getElementById('cookie');
const count = document.getElementById('clicker__counter');

cookie.addEventListener('click', () => {
    count.textContent++;
    cookie.width = cookie.width == 200 ? 250 : 200;
});