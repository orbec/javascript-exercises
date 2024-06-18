const palindromes = function (string) {
    const cleanString = string
        .toLowerCase()
        .split("")
        .filter(value => /[a-z0-9]/.test(value))
        .join("");
    const stringReversed = cleanString
        .split("")
        .toReversed()
        .join("");
    return cleanString === stringReversed;

};

// Do not edit below this line
module.exports = palindromes;
