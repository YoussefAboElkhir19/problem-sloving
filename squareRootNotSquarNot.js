


function SquareRootNotSquareRoot(array) {


    // let arrayResult = [];

    // for (let i = 0; i < array.length; i++) {
    //     if (Number.isInteger(Math.sqrt(array[i]))) {
    //         arrayResult.push(Math.sqrt(array[i]));
    //     } else {
    //         arrayResult.push(array[i] * array[i]);
    //     }
    // }
    // return arrayResult;

    // Solution 2 ************************
    return array.map((num) => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num * num);

}

console.log(SquareRootNotSquareRoot([1, 2, 3, 7, 4, 9]));