const filterBox = document.querySelectorAll('.box');
const navBox = document.querySelectorAll('nav ul li');

const filterGoods = (filterClass) => {
  navBox.forEach((item) => item.classList.remove('active'));
  const active = document.querySelector(`[data-f="${filterClass}"]`);
  if (active) active.classList.add('active');

  filterBox.forEach((item) => {
    item.classList.remove('hide');
    if (!item.classList.contains(filterClass) && filterClass !== 'all') {
      item.classList.add('hide');
    }
  });
};

document.querySelector('nav').addEventListener('click', (event) => {
  if (event.target.tagName !== 'LI') return;
  let filterClass = event.target.dataset['f'];
  filterGoods(filterClass);
  window.location.hash = event.target.dataset['f'];
});

if (window.location.hash) {
  console.log(window.location.hash);
  filterGoods(window.location.hash.slice(1));
}
//1
const p1 = document.querySelector('.p-1');
console.log(p1.innerHTML);
console.log(p1.getAttribute('name'));
console.log(document.querySelector('html').getAttribute('lang'));

const imgGoods = document.querySelector('.img');
imgGoods.style.width = '50px';
imgGoods.style.height = '50px';

console.log(imgGoods.getAttribute('src'));

//2. Изменение атрибутов

imgGoods.src = './images/ntop-4-gaming-laptops-under-1000-for-2015.jpg';
imgGoods.setAttribute('name', 'tovar1');
console.log(imgGoods.name);

p1.id = 'two';
console.log(p1.id);

const checkbox = document.querySelector('.checkbox');
checkbox.setAttribute('checked', true);
checkbox.removeAttribute('checked');

const button = document.querySelector('.add-button');
const button2 = document.querySelector('.add-button-2');
console.log(button.dataset.article);

const p2 = document.createElement('p');
p2.textContent = 'hello world';
p2.classList.add('bg-orange');
p2.setAttribute('data-p2', 22);

button.prepend(p2);

imgGoods.alt = 'hello';

p2.after(imgGoods);

const input = document.createElement('input');
input.setAttribute('type', 'text');
imgGoods.before(input);
input.oninput = func1;

function func1() {
  console.log(input.value);
}

const t01 = () => {
  console.log('work');
};
const t02 = () => {
  console.log('ha23432423ha');
};

// button.onclick = () => {
//   t01();
//   t02();
// };

// button.addEventListener('click', t01);
// button.addEventListener('click', t02);
// button.removeEventListener('click', t01);

const multi = (a, b) => {
  return a * b;
};
button2.addEventListener('click', () => {
  console.log(multi(2, 3));
});

//button2.addEventListener('mouseover', t02);

const inputPsw = document.querySelector('.inputpsw');
const inputValue = () => console.log(inputPsw.value);

//inputPsw.addEventListener('input', inputValue); // применим к паролю
inputPsw.addEventListener('change', inputValue); // к при меру при проверки занятости почты
const t04 = () => console.log('copy');
const t05 = () => console.log('focus');
inputPsw.addEventListener('copy', t04);
inputPsw.addEventListener('focus', t05);
