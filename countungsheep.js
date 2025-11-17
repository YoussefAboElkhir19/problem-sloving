



let arrayAofSheep = [true, false, true, false];
function countSheep() {
    let counetr = 0;

    arrayAofSheep.map((i) => {

        if (i === true) counetr++;
    }
    )

    return counetr;
}

console.log(countSheep())