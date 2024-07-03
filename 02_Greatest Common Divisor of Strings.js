/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';
    let a = str1.length
    let b = str2.length

    while (b) {
        let temp = b
        b = a % b
        a = temp
    }
    return str1.substring(0, a)
};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings_42out124 = function (str1, str2) {
    let x = str2;
    const allEqual = arr => arr.length > 1 && arr.every(val => val === arr[0]);
    let found = allEqual(str1.split(x)) && allEqual(str2.split(x))
    while (!found && x.length != 0) {
        x = x.slice(0, -1)
        found = allEqual(str1.split(x))
    }
    return x
};


console.log(gcdOfStrings('TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX', 'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX'))
