//* Get the current date in the format of YYYY-MM-DD
//! toISOString 方法會將 Date 物件轉換為一個 ISO 8601 格式的字符串，
//! 這個字符串的格式為 YYYY-MM-DDTHH:mm:ss.sssZ，其中 T 是日期和時間的分隔符，Z 表示該時間為 UTC 時間
const getCurrDate = () => new Date().toISOString().split('T')[0];

console.log(getCurrDate());