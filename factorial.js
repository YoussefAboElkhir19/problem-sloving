



function factorial(n) {

    // base case to stop recursion
    if (n === 0 || n === 1) return 1;
    // recurcuion function 
    return n * factorial(n - 1);


}

console.log(factorial(5)); 
