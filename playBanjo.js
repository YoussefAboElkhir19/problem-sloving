



// if name start R Or r true playing it  
// else not play

// charAt() take index of char and return it 
function PlayBanjo(name) {

    // if (name.charAt(0) === 'R' || name.charAt(0) === 'r') {
    //     return `${name} Playing IT`;
    // } else {
    //     return "Not Playing";
    // }
    return name[0] === 'R' || name[0] === 'r' ? `${name} Playing IT` : "Not Playing";
}

console.log(PlayBanjo('Rana'))