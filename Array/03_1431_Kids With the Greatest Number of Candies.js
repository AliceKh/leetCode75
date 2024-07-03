/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
        let result = [];
        max = Math.max(...candies)
        for (let i = 0; i < candies.length; i++) {
            result[i] = (candies[i] + extraCandies >= max)
        }
        return result;
    };


console.log(kidsWithCandies([2,3,5,1,3], 3))
