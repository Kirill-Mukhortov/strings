import { notationHexList } from './notationHexList.js';


export function whatNotation(hex) {
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


export function getHex(char) {
    if (typeof char === 'undefined' || char.length === 0) {
        return '';
    }

    return `00${char.charCodeAt(0).toString(16)}`.slice(-4);
}


export function isDigit(str) {
    if (str.at(0) === '-') {
        str = Array.from(str).slice(1).join('');
    }

    const firstCharNotation = whatNotation(getHex(str.at(0)));
    let hex;

    if (!firstCharNotation) {
        return false;
    }

    for (let i = 0; i < str.length; i += 1) {
        hex = getHex(str.at(i));

        if (hex < notationHexList[firstCharNotation].min || hex > notationHexList[firstCharNotation].max) {
            return false;
        }
    }

    return true;
}
