const fibonacci = function(number) {
    if (number < 0 ) return "OOPS";
    let result = 1;
    let tempResult = 0;
    for (let i = 1; i < +number; i++){
        const final = tempResult + result;
        tempResult = result;
        result = final;

    }
    console.log(result);
    return number == 0 ? tempResult : result;

};

// Do not edit below this line
module.exports = fibonacci;
