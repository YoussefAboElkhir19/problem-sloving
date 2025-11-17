




function CalcAvg(arr) {

    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    // }

    // let avg = sum / arr.length;
    // Solution *********************************
    avg = arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
    return avg;
}


console.log(CalcAvg([1, 2, 3]));