const letters = {
    'q': 'й',
    'w': 'ц',
    'e': 'у',
    'r': 'к',
    't': 'е',
    'y': 'н',
    'u': 'г',
    'i': 'ш',
    'o': 'щ',
    'p': 'з',
    '[': 'х',
    ']': 'ї',
    'a': 'ф',
    's': 'і',
    'd': 'в',
    'f': 'а',
    'g': 'п',
    'h': 'р',
    'j': 'о',
    'k': 'л',
    'l': 'д',
    ';': 'ж',
    "'": 'є',
    'z': 'я',
    'x': 'ч',
    'c': 'с',
    'v': 'м',
    'b': 'и',
    'n': 'т',
    'm': 'ь',
    ',': 'б',
    '.': 'ю',
    ' ': ' ',
    '?': ',',
    '/': '.'
};

const swappedLetters = Object.fromEntries(
    Object.entries(letters).map(([key, value]) => [value, key])
);

const capitalLetters = Object.fromEntries(
    Object.entries(letters).map(([key, value]) => [key.toUpperCase(), value.toUpperCase()])
);

const swappedCapitalLetters = Object.fromEntries(
    Object.entries(capitalLetters).map(([key, value]) => [value, key])
);

// fromEntries перетворює масив в об'єкт
// entries перетворює об'єкт в масив
const output = document.querySelector('.out');

function converter(){
    const input = document.getElementById('text').value;
    let out = [];
    
    //hasOwn шукає в об'єкті елемент
    for (let item of input) {
        if (Object.hasOwn(letters, item)) { 
            out.push(letters[item]);
        }
        else if(Object.hasOwn(swappedLetters, item)){
            out.push(swappedLetters[item]);
        }
        else if(Object.hasOwn(capitalLetters, item)){
            out.push(capitalLetters[item]);
        }
        else if(Object.hasOwn(swappedCapitalLetters, item)){
            out.push(swappedCapitalLetters[item]);
        }
        else {
            out.push(item);
        }
    }
    output.innerHTML=out.join('');
}

function clear(){
    document.getElementById('text').value = '';
    output.innerHTML='';
}

//createRange створює range об'єкт, який маніпулюює DOM об'єктами
// selectNodeContents виділяє об'єкт
// removeAllRanges видаляє усе виділене в selection, addRange добавляє 
// execCommand копіює

function copy(){
    let selection = window.getSelection();
    selection.removeAllRanges();
    let textRange = document.createRange();
    textRange.selectNodeContents(output);
    selection.addRange(textRange);
    document.execCommand("copy");
}

function copyHint(){
    let hint = document.querySelector(".hint");
    hint.style.display = 'block';
    hint.style.animation = 'fadeOut 4s ease forwards';
    console.log(1);
}

document.querySelector('.b-convert').addEventListener("click", converter);
document.querySelector('.b-clear').addEventListener("click", clear);
document.querySelector('.b-copy').addEventListener("click", function(){
    copy();
    copyHint();
});
