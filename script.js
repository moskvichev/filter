const filterBox = document.querySelectorAll('.box');
// const arrFilterBox = Array.from(filterBox);

const filterGoods = (filterClass) => {
  filterBox.forEach((item) => {
    item.classList.remove('hide');
    if (!item.classList.contains(filterClass) && filterClass !== 'all') {
      item.classList.add('hide');
    }
  });
};
//s
document.querySelector('nav').addEventListener('click', (event) => {
  if (event.target.tagName !== 'LI') return;
  let filterClass = event.target.dataset['f'];
  filterGoods(filterClass);
});
