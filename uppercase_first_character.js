//* Uppercase the first character of each word in a string
const upperCaseWordsFunc = (str) => {
    const words = str.split(' ');
    const upperCasedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return upperCasedWords.join(' ');
}

//! replace() 接收兩個參數，第一個參數是正則表達式，第二個參數是一個函數
//! 正則表達式用|分隔
//! ^(.) -> 匹配字串開頭的任何一個字符，^是開頭的字元符，.匹配除換行符之外的任何單個字符
//! \s+(.) 匹配一個或多個空格後的任何一個字符。
const upperCasedWordsOneLine = (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

let str = 'hello world';
let str2 = 'yello rainbow';

str = upperCaseWordsFunc(str);
console.log(str);
str2 = upperCasedWordsOneLine(str2);
console.log(str2);