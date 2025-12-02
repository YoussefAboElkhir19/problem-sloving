




function RemoveExclamationMarks(str) {

    // return str.replace(/!/g, '');

    // make filter 
    return str.split('').filter((char) => char !== '!').join('');



}

console.log(RemoveExclamationMarks("!!!Heloooo!!!!"))