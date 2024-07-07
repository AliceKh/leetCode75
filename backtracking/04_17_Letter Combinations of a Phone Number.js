
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];

    const keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    const output = [];
    const backtrack = (current, index) => {
        if (index === digits.length) {
            output.push(current);
            return;
        }
        const letters = keyboard[digits[index]];
        for (let letter of letters) {
            backtrack(current + letter, index + 1);
        }
    };

    backtrack('', 0);
    return output;
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations4out25 = function (digits) {
    let temp = digits.split('').map((value) => nokia[parseInt(value) - 2]);
    console.log(temp)
    let result = [];
    for (let i = 0; i < temp.length - 1; i++) {
        for (let j = 0; j < temp[i].length; j++) {
            for (let k = 0; k < temp[i + 1].length; k++) {
                console.log(temp[i][j] + temp[i + 1][k])
                result.push(temp[i][j] + temp[i + 1][k])
            }
        }
    }
    return result;
};

// the offset is that the number 2 is in index 0
const nokia = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's'], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']]

console.log(letterCombinations4out25('277'));
