// 🟢 1. Reverse a String

// function reverseStr(str) {
//     // split
//     // reverse
//     //join

//     return str.split("").reverse().join("");
// }
// console.log(reverseStr("hello"));
//*************************************************** */

// 2. Check Palindrome
// word can read if reversed
// ex level 
//*************************************************** */

// function isPalindrome(str) {
//     const reversedStr = str.split("").reverse().join("");
//     return reversedStr === str;
// }
// console.log(isPalindrome("level"));
//*************************************************** */
// 3- Find Max Number in Array

// function MaxNum(arr) {
//     return Math.max(...arr);

// }
// console.log(MaxNum([1, 2, 3, 4, 100]));
//*************************************************** */

// 🟢 4. Sum All Numbers in Array
//*************************************************** */
// function SumAll(arr) {
//     return arr.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(SumAll([1, 2, 3, 4, 5]));

// 🟠 5. Remove Duplicates from Array
// function RemovDuplication(arr) {
//     return [...new Set(arr)];
// }
// console.log(RemovDuplication([1, 1, 2, 3, 3, 4, 4, 5]));
// //*************************************************** */
//  6. FizzBuzz
// function FizzBuzz(num) {
//     for (let i = 1; i <= num; i++) {

//         if (i % 15 === 0) console.log("FizzBuzz");
//         else if (i % 3 === 0) console.log("Fizz");
//         else if (i % 5 === 0) console.log("Buzz");
//         else console.log(i)
//     }
// }
// FizzBuzz(15);
//*************************************************** */

// 7. Factorial
// function Factorial(num) {
//     // base case
//     if (num === 1 || num === 0) return 1;
//     // recursion
//     return num * Factorial(num - 1);
// }
// console.log(Factorial(5));
//*************************************************** */

// 8. Find First Non-Repeating Character
// insdexof
// lastodindex
function NonRepeatChar(str) {
    // loop on str 
    for (let char of str) {

        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null;
}
console.log(NonRepeatChar("aaddcffg"));
//*************************************************** */
//  9. Two Sum Problem


// 10. Anagram Check
// word contan a same letter
// split
// sort
// join 

function isAnagram(str1, str2) {
    const normalization = (str) => str.split("").sort().join("");
    return normalization(str1) === normalization(str2)
}
console.log(isAnagram("hello", "lloeh"));