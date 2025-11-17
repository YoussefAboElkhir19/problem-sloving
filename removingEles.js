




// new array
//loop  array
//check ele postions
//removing 
//return new arr
function Removing(arr) {
    let newArr = [];

    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 2 === 0) {
    //         newArr.push(arr[i]);
    //     }
    // }
    // return newArr;

    // ************Solution 2 =================
    return arr.filter((x, index) => index % 2 === 0);
}


// 0 2 4  % 2 === 0 
console.log(Removing(['keep', 'remove', 'keep', 'remove', 'keep', 'remove']))