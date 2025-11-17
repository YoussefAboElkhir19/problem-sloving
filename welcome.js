



function Welcome(lang) {


    let langs = {
        eng: "Welcome",
        france: "Bonjour",
        italy: "Chio"
    }

    if (langs.hasOwnProperty(lang)) {
        return langs[lang]
    } else {
        return langs['eng']
    }

}

console.log(Welcome('france'))