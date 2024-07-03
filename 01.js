/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately03 = function (word1, word2) {
    let newWord = '';
    let i = 0;
    while (i < Math.min(word1.length, word2.length)){
        if (i < word1.length) newWord += word1[i]
        if (i < word2.length) newWord += word2[i]
        i++;
    }
    if (word1.length > word2.length) newWord += word1.slice(i)
    else if (word2.length > word1.length) newWord += word2.slice(i)
    return newWord;
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let newWord = '';
    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        if (i < word1.length) newWord += word1[i]
        if (i < word2.length) newWord += word2[i]
    }
    return newWord;
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately02 = function (word1, word2) {
    let newWord = '';
    let counter = 0;
    while (counter < word1.length && counter < word2.length) {
        newWord += word1[counter] + word2[counter];
        counter++;
    }
    if (!word1[counter]) {
        newWord += word2.slice(counter)
    } else if (!word2[counter]) {
        newWord += word1.slice(counter)
    }
    return newWord;
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately01 = function (word1, word2) {
    let newWord = '';
    let counter = 0;
    while (newWord.length !== word1.length + word2.length) {
        if (!word1[counter]) {
            newWord += word2.slice(counter)
        } else if (!word2[counter]) {
            newWord += word1.slice(counter)
        } else
            newWord += word1[counter] + word2[counter];
        counter++;
    }
    return newWord;
};


console.log(mergeAlternately("abc", "2"));
