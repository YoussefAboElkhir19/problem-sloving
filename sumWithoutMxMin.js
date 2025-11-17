

// check if emoty  value =0 
// find max and min 
// fliter array 
// sum all numbers 

// function sum(arr) {
//     if (arr === null || arr.length === 0) {
//         return 0;
//     }
//     let minNum = Math.min(...arr);
//     let maxNum = Math.max(...arr);
//     // Fitaration  function process a array and return a array 
//     // ma3na x !== minNum && x !== maxNum
//     // raga3ly kol hg x ma3da elyby722 el shart
//     arrwithoutMinMax = arr.filter((x) => x !== minNum && x !== maxNum);
//     // reduce function to sumation array 
//     totalArray = arrwithoutMinMax.reduce
//         ((acc, curr) => acc + curr, 0);
//     return totalArray;
//     //************************ */
//     // return arr.sort((a, b) => a - b).slice(1, -1).reduce((acc, cur) => acc + cur, 0);

// }
// console.log(sum(arr));

let arr = [1, 2, , 10, 10];
function sumWithoutMaxAndMin(arr) {
    if (arr === null || arr.length === 0) return 0;
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    return arr.sort((a, b) => a - b).slice(1, -1).reduce((acc, cur) => acc + cur, 0);
}

console.log(sumWithoutMaxAndMin(arr)); 