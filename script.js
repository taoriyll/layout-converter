let output = document.querySelector('.out');

let letters = {
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

function converter(){
    let input = document.getElementById('text').value;
    let out = [];
    
    // fromEntries перетворює масив в об'єкт
    // entries перетворює об'єкт в масив
    // це усе потрібно робити, щоб створити нові об'єкти від letters, не змінюючи letters 

    let swap = Object.fromEntries(Object.entries(letters).map(([key, value]) => [value, key]));

    let capital = Object.fromEntries(Object.entries(letters).map(([key, value]) => [key.toUpperCase(), value.toUpperCase()]));

    let capital_swap = Object.fromEntries(Object.entries(capital).map(([key, value]) => [value, key]));

    //hasOwn шукає в об'єкті елемент

    for (let item of input) {
        if (Object.hasOwn(letters, item)) { 
            out.push(letters[item]);
        }
        else if(Object.hasOwn(swap, item)){
            out.push(swap[item]);
        }
        else if(Object.hasOwn(capital, item)){
            out.push(capital[item]);
        }
        else if(Object.hasOwn(capital_swap, item)){
            out.push(capital_swap[item]);
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

document.querySelector('.b-convert').onclick = converter;
document.querySelector('.b-clear').onclick = clear;
document.querySelector('.b-copy').onclick = copy;