











// create array five lettters
// loop input string
// check if lettersVowel include in my string  
function removeVowel(str) {

    const lettersVower = ['a', 'e', 'i', 'u', 'o'];
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (!lettersVower.includes(str[i])) {
            result.push(str[i]);
        }

    }
    return result.join('');
}

console.log(removeVowel('ayoussef'));
//yssf