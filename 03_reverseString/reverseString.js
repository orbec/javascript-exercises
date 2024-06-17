const reverseString = function(word) {

    const wordArray = word.split("");
    wordArray.reverse();
    let finalWord = "";
    wordArray.map((value) => finalWord+= value);
    console.log(finalWord);
    return finalWord;
    //shorter solution 
    //return string.split("").reverse().join("");

};

// Do not edit below this line
module.exports = reverseString;
