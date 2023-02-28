import { notationHexList } from './notationHexList.js';

function whatNotation(hex) {
    let notation;

    for (const entry in notationHexList) {
        if (hex >= notationHexList[entry].min && hex <= notationHexList[entry].max) {
            notation = entry;
            break;
        } else {
            notation = undefined;
        }
    }

    return notation;
}

function getHex(char) {
    if (typeof char === 'undefined') {
        return '';
    }

    return `00${char.charCodeAt(0).toString(16)}`.slice(-4);
}

export function isDigit(str) {
    const firstCharNotation = whatNotation(getHex(str.at(0)));
    let hex;

    if (!firstCharNotation) {
        return false;
    }

    for (let i = 0; i < str.length; i++) {
        hex = getHex(str.at(i));

        if (hex < notationHexList[firstCharNotation].min || hex > notationHexList[firstCharNotation].max) {
            return false;
        }
    }

    return true;
}


console.log(isDigit(''));    // false
console.log(isDigit(' '));   // false
console.log(isDigit('a'));   // false
console.log(isDigit('1a2')); // false
console.log(isDigit('1'));   // true
console.log(isDigit('Ⅻ'));  // true
console.log(isDigit('٥'));  // true
console.log(isDigit('۵'));  // true


