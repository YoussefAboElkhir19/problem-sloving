

// Count(10) => [1 , 2 ,3 , ...]

function Count(num) {

    let newArray = [];
    for (let i = 1; i <= num; i++) {
        newArray.push(i);
    }
    return newArray;
}


console.log(Count(10))