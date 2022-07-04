// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;


// closure with var global/window scope
const tricky = () => {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
};

tricky();


// closure with var global/window scope
const tricky = () => {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  }
};