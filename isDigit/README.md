## isDigit:

#### It's a function that tells if the given string is a number or not. By default, there is support for not only Arabic numerals, but also Roman numerals. You can also use any of your custom alphabets (based on unicode characters).

***


Public API:

- `isDigit(str)` main function that takes a number as a string and returns boolean if string is digit or not. Works with different notations. you can add your own to the dictionary.

```js
import { isDigit } from './isDigit.js';

isDigit('');      // false
isDigit(' ');     // false
isDigit('a');     // false
isDigit('1a2');   // false

isDigit('-12');   // true
isDigit('123');   // true
isDigit('٣٤٥');   // true
isDigit('۱۵۶');   // true
isDigit('ⅫⅬⅮⅯ'); // true
```

- `getHex(char)` the function takes a character and returns its hex code. If no character is passed, an empty string will be returned.

```js
import { getHex } from './isDigit.js';

getHex('1');  // '0031'
getHex('Ⅻ'); // '216b'
getHex('٥');  // '0665'
getHex('۵');  // '06f5'
getHex();     // ''
```

- `whatNotation(hex)` a function that returns the notation of a number from a dictionary by hex code. Returns `undefined` if the notation could not be determined.

```js
import { whatNotation } from './isDigit.js';

whatNotation('0031'); // 'arabic'
whatNotation('216b'); // 'roman'
whatNotation('0665'); // 'indoArabic'
whatNotation('06f5'); // 'arabicIndian'
whatNotation('0029'); // undefined
```

- `notationHexList` dictionary of notations. Basically has four notations (`arabic`, `roman`, `indoArabic` and `arabicIndian`). You can add your own notation by adding the min and max hex code of the notation you need. List of hex codes can be found at [symbl.cc](https://symbl.cc/ru/unicode/blocks/)
