


function RemoveDeplicationFromArr(arr) {

    return [...new Set(arr)];
}


console.log(RemoveDeplicationFromArr([1, 2, 2, 3, 4, 4, 5])); 