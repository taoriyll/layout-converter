const letters = {
    q: "й",
    w: "ц",
    e: "у",
    r: "к",
    t: "е",
    y: "н",
    u: "г",
    i: "ш",
    o: "щ",
    p: "з",
    "[": "х",
    "]": "ї",
    a: "ф",
    s: "і",
    d: "в",
    f: "а",
    g: "п",
    h: "р",
    j: "о",
    k: "л",
    l: "д",
    ";": "ж",
    "'": "є",
    z: "я",
    x: "ч",
    c: "с",
    v: "м",
    b: "и",
    n: "т",
    m: "ь",
    ",": "б",
    ".": "ю",
    "?": ",",
    "/": ".",
};

const capitalLetters = Object.fromEntries(
    Object.entries(letters).map(([key, value]) => [
        key.toUpperCase(),
        value.toUpperCase()
    ])
);
function addException(key, value){
    return capitalLetters[key] = value;
}
addException("<", "Б");
addException(">", "Ю");
addException("{", "Х");
addException("}", "Ї");
addException(':', "Ж");
addException('"', "Є");

const swappedLetters = Object.fromEntries(
    Object.entries(letters).map(([key, value]) => [value, key])
);

const swappedCapitalLetters = Object.fromEntries(
    Object.entries(capitalLetters).map(([key, value]) => [value, key])
);

const initialObjects = {...capitalLetters, ...letters};
const swappedObjects = {...swappedCapitalLetters, ...swappedLetters};

// fromEntries перетворює масив в об'єкт
// entries перетворює об'єкт в масив
const output = document.querySelector(".out");

function converter(){
    const input = document.getElementById("text").value;
    let outputArray = [];
    // hasOwn шукає в об'єкті елемент
    for (const item of input) {
        if (Object.hasOwn(initialObjects, item)) { 
            outputArray.push(initialObjects[item]);
        }
        else if(Object.hasOwn(swappedObjects, item)){
            outputArray.push(swappedObjects[item]);
        }
        else {
            outputArray.push(item);
        }
    }
    output.innerHTML = outputArray.join("");
}

function clear(){
    document.getElementById("text").value = "";
    output.innerHTML = "";
}

function copy(){
    const copyInput = document.querySelector(".out").innerHTML;
   
   if(copyInput){
        navigator.clipboard.writeText(copyInput);
        copyHint();
   }
}

function copyHint(){
    const hint = document.querySelector(".hint");
    hint.classList.add("show-hint");

    setTimeout( function(){
        hint.classList.remove("show-hint");
    }, 1200);
}

document.querySelector(".b-convert").addEventListener("click", converter);
document.querySelector(".b-clear").addEventListener("click", clear);
document.querySelector(".b-copy").addEventListener("click", copy);
