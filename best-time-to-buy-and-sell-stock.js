/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let lowest = -1

    for (let price of prices) {
        // console.log(price)
        if (lowest < 0) {
            lowest = price
            continue
        } else if (lowest > price) {
            lowest = price
        }
    }
    console.log(lowest)
    let lowestIndex = prices.indexOf(lowest)

    const remainder = prices.slice(lowestIndex + 1, prices.length)
    console.log(remainder)

    let highest = 0

    for (let item of remainder) {
        if(item > highest) highest = item
    }
    console.log(highest)
    console.log(highest - lowest)
    return highest - lowest

};

maxProfit([7, 1, 5, 3, 6, 4])