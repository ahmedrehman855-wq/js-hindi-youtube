// Project 1
```javascript

const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.background = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.background = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.background = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.background = e.target.id;
    }
  });
}); ```


//Project 2
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please enter a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the results
    results.innerHTML = `<span>${bmi}</span>`;
  }
});```
```javascript
// Project 3
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
```javascript
Prjoect 5
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalID;
const startChangingColor = function () {
  if (!intervalID) {
    intervalID = setInterval(changebgColor, 1000);
  }

  function changebgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null;
};
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
```
