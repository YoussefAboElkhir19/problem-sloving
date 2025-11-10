



function FinFirstNonRepeated(str) {

    for (let char of str) {
        // first index === lastindex yb2a nonrepeated
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;

        }

    }
    return null;

}


console.log(FinFirstNonRepeated("abacacbadd"));