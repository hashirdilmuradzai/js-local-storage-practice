// localStorage ma sab chez sirf string ma save hoti hy

localStorage.setItem("name", "Hashir"); // Value ko localstorage me save krny keliyee
localStorage.setItem("age", 23);
localStorage.setItem("SMIT", "Saylani");

let name = localStorage.getItem("name"); // Value ko localstorage sy call krwany keliyee

console.log(name);

localStorage.removeItem("age"); // Value ko localstorage sy remove krny keliyee

// localStorage.clear(); // Poora localstorage saaf krny keliyee

// Counter Code

const counterPara = document.querySelector("#counter-para");

let counter = localStorage.getItem("counter") || 0;

counterPara.innerHTML = counter;

function plus() {
  counter++;

  localStorage.setItem("counter", counter);

  counterPara.innerHTML = counter;
}

function minus() {
  if (counter > 0) {
    counter--;
  }

  localStorage.setItem("counter", counter);

  counterPara.innerHTML = counter;
}

function reset() {
  localStorage.removeItem("counter");

  counterPara.innerHTML = 0;
}

// setting arrays and objects in local storage

const fruits = ["apple", "banana", "grapes", "peach", "mango"];

localStorage.setItem("key1", fruits);

const fruitsArrayKiString = JSON.stringify(fruits); // as tis print krna brackets ky sath

localStorage.setItem("key2", fruitsArrayKiString);

const savedString = localStorage.getItem("key2");

const array = JSON.parse(savedString); // string se wapas array / object

console.log(array);
