//* Generate a random string
//! toString(36) -> 將一個隨機數字轉換為36進制 -> 0-9 a-z
//! slice(2) -> 切掉前兩位數字(0.)
const genRandomString = () => Math.random().toString(36).slice(2)

const str1 = genRandomString();
const str2 = genRandomString();
const str3 = genRandomString();

console.log(str1);
console.log(str2);
console.log(str3);