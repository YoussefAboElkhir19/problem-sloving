


function InvertVals(arr) {
    // let InvertArr = [];

    // for (let i = 0; i < arr.length; i++) {
    //     InvertArr.push(arr[i] * -1);
    // }
    // return InvertArr;
    // ****************** Solution 2 ******************************
    return arr.map(x => x * -1);
}


console.log(InvertVals([-1, -2, 3, -4, -5]))