



function FindPostion(letter) {



    const aplpha = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < aplpha.length; i++) {
        if (aplpha[i] === letter) {
            return `postion letter in alpha ${i + 1}`;
        }
    }

}


console.log(FindPostion('z'));