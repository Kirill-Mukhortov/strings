import { getHex, isDigit, whatNotation } from './isDigit.js';
import { describe, expect, test } from '@jest/globals';

describe('What notation', () => {

    test('Should return notation from hex code', () => {
        const arabicNotation = whatNotation('0031');
        const romanNotation = whatNotation('216b');
        const indoArabicNotation = whatNotation('0665');
        const arabicIndianNotation = whatNotation('06f5');

        expect(arabicNotation).toBe('arabic');
        expect(romanNotation).toBe('roman');
        expect(indoArabicNotation).toBe('indoArabic');
        expect(arabicIndianNotation).toBe('arabicIndian');
    });

    test('Should return undefined notation from hex code if its not a digit', () => {
        const notation = whatNotation('0029');
        expect(notation).toBe(undefined);
    });
});

describe('Get hex', () => {
    test('Should return hex code from char', () => {
        const arabicHex = getHex('1');
        const romanHex = getHex('Ⅻ');
        const indoArabicHex = getHex('٥');
        const arabicIndianHex = getHex('۵');
        const noChar = getHex();

        expect(arabicHex).toBe('0031');
        expect(romanHex).toBe('216b');
        expect(indoArabicHex).toBe('0665');
        expect(arabicIndianHex).toBe('06f5');
        expect(noChar).toBe('');
    });

    test('Should return empty string if argument is not a char', () => {
        const emptyHex = getHex('');
        expect(emptyHex).toBe('');
    });
});

describe('Is digit', () => {
    test('Should return true or false if string is digit or not', () => {
        expect(isDigit('')).toBeFalsy();
        expect(isDigit(' ')).toBeFalsy();
        expect(isDigit('a')).toBeFalsy();
        expect(isDigit('1a2')).toBeFalsy();
        expect(isDigit('-12')).toBeTruthy();
        expect(isDigit('123')).toBeTruthy();
        expect(isDigit('٣٤٥')).toBeTruthy();
        expect(isDigit('۱۵۶')).toBeTruthy();
        expect(isDigit('ⅫⅬⅮⅯ')).toBeTruthy();
    });
});
