const removeFromArray = function() {
    let array = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        array = array.filter((value) =>  value !== arguments[i]);
    }
    // solution provided
    //   return array.filter(val => !args.includes(val))
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
