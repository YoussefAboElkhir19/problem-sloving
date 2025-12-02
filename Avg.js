


function Avg(marks) {

    // let sum = 0;
    // let avg

    // for (let i = 0; i < marks.length; i++) {
    //     sum += marks[i];
    // }
    // avg = sum / marks.length;
    // return Math.floor(avg);
    return Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
}


console.log(Avg([1, 2, 3, 4, 5]));