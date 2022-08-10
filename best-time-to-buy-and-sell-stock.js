/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let lowest = -1
    let highest = 0
    let diff = 0
    let profit = 0
    let lowestIndex = 0

    for (let i = 0; i < prices.length; i++) {
        let price = prices[i]

        // find optimal lowest number
        if (lowest < 0) {
            lowest = price
            lowestIndex = i
        }
        if (price <= lowest) {
            lowest = price
            lowestIndex = i
        }

        // find optimal highest
        if (i !== 0) {
            if (highest <= price && i > lowestIndex) {
                highest = price
                diff = highest - lowest
                //find optimal profit
                if (diff > profit) profit = diff
            }
        }
        // console.log({lowest, highest})
        // console.log({diff, profit})
    }
    console.log(profit)
    return profit

};

maxProfit([7, 1, 5, 3, 6, 4]) // should return 6 - 1
maxProfit([7, 6, 4, 3, 1]) // should return 0
maxProfit([2, 4, 1]) // should return 4 - 2 = 2
maxProfit([2, 1, 2, 1, 0, 1, 2]) // should return 2 - 0