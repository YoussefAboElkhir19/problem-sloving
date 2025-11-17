






function CountByX(x, num) {
    // let newArr = [];

    // for (let i = 1; i <= num; i++) {
    //     newArr.push(x * i);
    // }

    // return newArr;

    //  Solution 2 

    let arr = Array.from(Array(num + 1).keys()).slice(1).map(i => i * x)
    return arr;


}

console.log(CountByX(2, 5))
