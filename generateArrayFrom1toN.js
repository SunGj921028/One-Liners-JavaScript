//* Generate an array from 1 to n
//! Array(n).keys()：keys 方法會返回一個新的 Array Iterator 物件，
//! 該物件包含原陣列的每個索引。因此，這會返回一個包含從 0 到 n - 1 的數字的 iterator。

//! [...Array(n).keys()].map(i => i + 1)：map 方法會創建一個新陣列，其結果是調用提供函數在每個元素上的結果。
//! 這裡的函數是 i => i + 1，它會將每個元素加 1。因此，這會創建一個從 1 到 n 的數字陣列。
const generateArrayFrom1toN = (n) => [...Array(n).keys()].map(i => i + 1);

console.log(generateArrayFrom1toN(5)); // [1, 2, 3, 4, 5]
console.log(generateArrayFrom1toN(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]