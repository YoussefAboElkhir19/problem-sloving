





// if array NonConsecutiveNumber  msh 3la twaly 
// rg3 first number ely 8lt
// solution 
//1 - loop in my array
// condition mn secound ele 
function FirstNonConsecutiveNumber(arr) {


    for (let i = 1; i < arr.length; i++) {
        //first iteration compare 2 with 1 
        // arr[i] == arr[1] == 2 
        // arr[1-1] == arr[0] == 1
        if (arr[i] - 1 !== arr[i - 1]) return arr[i];
    }

    return 'Array Consecutive ';
}

console.log(FirstNonConsecutiveNumber([1, 2, 3, 4, 6, 7, 8]));

// 6