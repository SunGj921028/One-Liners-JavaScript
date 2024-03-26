//* Anagram -> a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
const isAnagram = (str, str2) => [...str.toLowerCase()].sort().join('') === [...str2.toLowerCase()].sort().join('');

let str = 'cinema';
let str2 = 'iceman';

let str3 = 'hello';
let str4 = 'world';

console.log(isAnagram(str, str2)); // true
console.log(isAnagram(str3, str4)); // false