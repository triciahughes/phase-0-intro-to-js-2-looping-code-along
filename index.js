// Code your solutions in this file

function writeCards(names, additionalMessage) {
    let tempMessages = [];

    for ( let i = 0; i < names.length; i++) {
    tempMessages.push(`Thank you, ${names[i]}, for the wonderful ${additionalMessage} gift!`);
    }
    return tempMessages;
}

function countDown(number) {
    let i = number;
    while (i <= number && i >= 0) {
        console.log(i--);
    }
}


