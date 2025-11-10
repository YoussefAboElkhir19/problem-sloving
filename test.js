

// Global Scope 
// loacl scope
// function scope  
// Block scope


// var is a function-scoped variable

// function test() {
//     var x = 10;
//     console.log(x);
// }
// test(); // Outputs: 10
//---------------------------
// if (true) {
//     var x = 5;
// }
// console.log(x); // Outputs: 5 because  var functin scope only 


///************************************************ */

// let is a block-scoped variable

// function testLet() {
//     let y = 10;
// }
// console.log(y);
// testLet(); // Outputs: 10
// if (true) {
//     let x = 5;
//     console.log(x); // Outputs: 5 because  var functin scope only 
// }
// console.log([] == false); // ?
// console.log(null == undefined); // ?


import { ggggg } from './ec6.js';

console.log(ggggg); // Outputs: Youssef