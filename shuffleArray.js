//* Shuffle an array
//! 在 sort 函數中，如果比較函數返回一個小於 0 的值，則會將 a 排在 b 之前；
//! 如果比較函數返回一個大於 0 的值，則會將 b 排在 a 之前；如果比較函數返回 0，則 a 和 b 的位置不變。
//! 因此，這裡的() => Math.random() - 0.5 函數會隨機地對陣列的元素進行排序。
//! Math.random() - 0.5 會返回一個介於 -0.5 和 0.5 之間的隨機數，這樣就可以隨機地對陣列的元素進行排序。
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

let arr = [1, 2, 3, 4, 5];

console.log(shuffleArray(arr));