

function sum(arr) {
    // let minNum = Math.min(...arr);
    // let maxNum = Math.max(...arr);
    // // Fitaration  function process a array and return a array 
    // arrwithoutMinMax = arr.filter((x) => x !== minNum && x !== maxNum);
    // // reduce function to sumation array 
    // totalArray = arrwithoutMinMax.reduce
    //     ((acc, curr) => acc + curr, 0);
    // return totalArray;
    //************************ */
    return arr.sort((a, b) => a - b).slice(1, -1).reduce((acc, cur) => acc + cur, 0);

}
console.log(sum(arr));