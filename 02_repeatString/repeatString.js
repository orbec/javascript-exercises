const repeatString = function(word, times) {
    let finalWord ="";
    if (times < 0){
        finalWord = 'ERROR';
    }
    for (let i = 1; i<= times; i++){
        finalWord += word;
    }
    return finalWord;

};

// Do not edit below this line
module.exports = repeatString;
