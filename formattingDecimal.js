


function Decimal(num) {


    // return Number(num.toFixed(2));
    return Math.round(num * 100) / 100;

}
console.log(Decimal(2.345))