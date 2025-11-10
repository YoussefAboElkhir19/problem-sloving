


function fizzBuzz(num) {

    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);

    }


}

fizzBuzz(15); // Outputs: FizzBuzz, Fizz, Buzz, 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14