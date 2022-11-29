/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let lowest = Number.MAX_SAFE_INTEGER
    let highest = Number.MIN_SAFE_INTEGER
    let diff = 0
    let profit = 0
    let lowestIndex = 0

    for (let i = 0; i < prices.length; i++) {
        let price = prices[i]

        if (price <= lowest) {
            lowest = price
            lowestIndex = i
            highest = Number.MIN_SAFE_INTEGER
        }

        // find optimal highest
        if (i !== 0) {
            if (highest <= price && i > lowestIndex) {
                highest = price
                diff = highest - lowest
                //find optimal profit
                profit = Math.max(profit, diff)
            }
        }
    }
    console.log(profit)
    return profit

};

maxProfit([7, 1, 5, 3, 6, 4]) // should return 6 - 1
maxProfit([7, 6, 4, 3, 1]) // should return 0
maxProfit([2, 4, 1]) // should return 4 - 2 = 2
maxProfit([2, 1, 2, 1, 0, 1, 2]) // should return 2 - 0
maxProfit([3, 3, 5, 0, 0, 3, 1, 4]) // should return 4 - 0