const dropDownMenu = document.querySelector('.dropdown__value');

const activeList = document.querySelector('.dropdown__list');

const dropDownItem = [...document.querySelectorAll('.dropdown__item')];

dropDownMenu.addEventListener('click', () => {
  activeList.classList.add('dropdown__list_active');

  dropDownItem.forEach(el => {
    el.addEventListener('click', (e) => {
      activeList.classList.remove('dropdown__list_active');
      dropDownMenu.textContent = el.textContent;
      e.preventDefault();
    });
  });
});

