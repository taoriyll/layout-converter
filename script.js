const LATIN = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k","l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "/", "<", ">", "{", "}", ":", '"'];
const CYRILLIC = [ "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ї", "ф", "і", "в", "а", "п", "р", "о", "л", "д", "ж", "є", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", ".", "Б", "Ю", "Х", "Ї", "Ж", "Є"];

const LETTERS = {};
LATIN.forEach((key, index) => {
  LETTERS[key] = CYRILLIC[index];
});

//create object with upper-case elements
const CAPITAL_LETTERS = Object.fromEntries(
  Object.entries(LETTERS).map(([key, value]) => [
    key.toUpperCase(),
    value.toUpperCase(),
  ])
);

//create objects with swapped keys and values
const SWAPPED_LETTERS = Object.fromEntries(
  Object.entries(LETTERS).map(([key, value]) => [value, key])
);
const SWAPPED_CAPITAL_LETTERS = Object.fromEntries(
  Object.entries(CAPITAL_LETTERS).map(([key, value]) => [value, key])
);

//merge objects for better iteration
const INITIAL_OBJECTS = { ...CAPITAL_LETTERS, ...LETTERS };
const SWAPPED_OBJECTS = { ...SWAPPED_CAPITAL_LETTERS, ...SWAPPED_LETTERS };
//for outputting the result
const OUTPUT = document.querySelector(".out");

function converter() {
  const INPUT = document.getElementById("text").value;
  OUTPUT.textContent = INPUT.split("")
    .map((char) => INITIAL_OBJECTS[char] || SWAPPED_OBJECTS[char] || char)
    .join("");
}

//function to clear input
function clear() {
  document.getElementById("text").value = "";
  OUTPUT.innerHTML = "";
}

//function to copy the result
function copy() {
  const COPY_INPUT = document.querySelector(".out").innerHTML;
  if (COPY_INPUT) {
    navigator.clipboard.writeText(COPY_INPUT);
    copyHint();
  }
}

//function that appears when the result is copied
const TIMER = 1200;
function copyHint() {
  const HINT = document.querySelector(".hint");
  HINT.classList.add("show-hint");
  setTimeout(function () {
    HINT.classList.remove("show-hint");
  }, TIMER);
}

document.querySelector(".b-convert").addEventListener("click", converter);
document.querySelector(".b-clear").addEventListener("click", clear);
document.querySelector(".b-copy").addEventListener("click", copy);