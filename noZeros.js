









// funtion lastIndexOf(0) a5r index mn el haga el ana bdhalo
// end
// convert num to string 
// loop and check if find zeros


function noZero(num) {

    let string = String(num);
    while (string.endsWith(0)) {
        // overRide 
        string = string.slice(0, string.length - 1);
    }

    return Number(string);

}


console.log(noZero(1230000))