//* Generate a range of numbers from start to end with step
//! Math.floor((end - start) / step) + 1：這是計算需要生成的元素數量。
//! 初始陣列的所有元素都是 undefined

//! map 方法會創建一個新陣列，其結果是調用提供函數在每個元素上的結果。
//! 這裡的函數是(_, i) => start + (i * step)，它會將每個元素的索引 i 乘以 step，然後加上 start。
//! _是當前元素，i 是當前索引
//! _作為變數名稱是一種常見的慣例，用來表示這個變數在後續的代碼中不會被使用。
const rangeGenArr = (start, end, step = 1) => [...Array(Math.floor((end - start) / step) + 1)].map((_, i) => start + (i * step));

console.log(rangeGenArr(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rangeGenArr(1, 10, 2)); // [1, 3, 5, 7, 9]