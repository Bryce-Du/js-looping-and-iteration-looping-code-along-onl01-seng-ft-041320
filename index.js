// Code your solutions in this file
function writeCards(names){
    const thanks = []
    for (let i = 0; i < names.length; i++){
        thanks.push (`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return thanks
}

function countDown(number){
    while (number >= 0) {
        console.log(number)
        number--
    }
}