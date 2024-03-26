//* Merge two arrays and remove duplicates
//! 一個 Set 中的每個值必須是唯一的，不能有重複的值。
const mergerArrays = (arr, arr2) => [...new Set([...arr, ...arr2])]

console.log(mergerArrays([1, 2, 3], [2, 3, 4])) // [1, 2, 3, 4]