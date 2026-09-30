//function countVowels(str) {
//  let count = 0;
//for (const char of str) {
//   if (char === a || char === e || char === i || char === o || char === u); {
//     count++;
//}
//}
//return count;
//}

//let marks = [69, 75, 79, 85, 89, 90, 93, 99];

//let toppers = marks.filter((val) => {
//    return val > 90;
//})

//console.log(toppers);

let n = Number(prompt("Enter a number : "));

let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
  return res + curr;
}, 0);

console.log("sum =", sum);

let factorial = arr.reduce((res, curr) => {
  return res * curr;
}, 1);

console.log("factorial = ", factorial);