



// word if reverse it === origin it 
// ex str : level  


function isPailndrome(str) {


    const reverseStr = str.split("").reverse().join("");
    return reverseStr === str;
}

console.log(isPailndrome("level")); // Outputs: true
console.log(isPailndrome("hello")); // Outputs: false