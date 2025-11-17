



//looping to check potive number and negative 

// saveing in array empty 


function CountPostiveSumNegative(arr) {

    // let postiveArr = [];
    // let sumNegative = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > 0) {
    //         postiveArr.push(arr[i]);
    //     } else {
    //         sumNegative += arr[i];

    //     }
    // }
    // return [postiveArr.length, sumNegative];
    //******** Solution 2 ******************************************* */
    let postiveArr = arr.filter((x) => x > 0).length;
    let negativeSum = arr.filter((x) => x < 0).reduce((curr, acc) => curr + acc, 0);
    return [postiveArr, negativeSum];
}


console.log(CountPostiveSumNegative([1, 2, 3, 4, 5, -1, -2, -3, -4]))