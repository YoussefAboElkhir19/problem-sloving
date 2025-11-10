



function isAnagram(str1, str2) {


    // function to sort str 
    // split 
    // sort 
    // join 
    const normlization = (str) => str.split("").sort().join("");
    return normlization(str1) === normlization(str2)
}

console.log(isAnagram("youssef", "ssopyef"));