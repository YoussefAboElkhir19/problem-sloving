


// split the str 
// reverse it 
// join again 

function reversString(str) {


    return str.split("")
        .reverse()
        .join("");


}
// console.log(reversString("hello")); // Outputs: "olleh"


function reverseNumber(num) {
    let converted = num.toString();

    // return converted
    //     .split("")
    //     .reverse().join("");
    // using map to convert string to number in Array
    return converted.split("").map(e => Number(e)).reverse();
}

// console.log(typeof (reverseNumber(123456)));
console.log(reverseNumber(123456));