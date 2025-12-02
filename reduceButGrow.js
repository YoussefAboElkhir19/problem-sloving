







// Array [1,2,3,4] => 1 * 2 *3*4 = 24 
function Grow(arr) {


    // let result = 1;

    // for (let i = 0; i < arr.length; i++) {
    //     result *= arr[i];
    // }
    // return result;
    return arr.reduce((acc, curr) => acc * curr, 1);

}

console.log(Grow([1, 2, 3, 4]))