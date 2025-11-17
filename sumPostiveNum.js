

// Array loop

// check postive numbner

// initValue = 0

// Add number 

function sumOfPosyive(arr) {

    let initValue = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            initValue += arr[i];
        }
    }
    return initValue;
}

// Anther Solution 
function sumOfPostive(arr) {
    return arr.filter((i) => i > 0).
        reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfPostive([1, -4, 12, 0, -3, 29, -150])); // Outputs: 42