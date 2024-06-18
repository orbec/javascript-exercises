const sumAll = function(number1, number2) {
    if (typeof number1 !== "number" || typeof number2 !== "number" || number1 < 0 || number2 < 0){
        return "ERROR";
    }
    let n1 = number1 < number2 ? number1: number2;
    let n2 = number1 > number2 ? number1: number2;
    let result = 0;
    for (n1; n1<=n2; n1++){
        result +=n1;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
