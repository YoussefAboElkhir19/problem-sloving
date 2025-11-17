


// output  
// youssef  => yyoouusssseeff

// turn string to array 
// loop  on array
// repaet element 
//return array to string 

function doubleChar(char) {


    return char.split('').map((x) => x.repeat(2)).join('');

}


console.log(doubleChar('you'))