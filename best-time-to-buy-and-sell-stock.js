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
    // console.log(lowest)
    let lowestIndex = prices.indexOf(lowest)
    if(lowestIndex === prices.length -1) {
        console.log("no dice", 0)
        return 0
    }

    const remainder = prices.slice(lowestIndex + 1, prices.length)
    // console.log(remainder)

    let highest = 0

    for (let item of remainder) {
        if(item > highest) highest = item
    }
    // console.log(highest)
    console.log(highest - lowest)
    return highest - lowest

};

// maxProfit([7, 1, 5, 3, 6, 4]) // should return 6 - 1
// maxProfit([7,6,4,3,1]) // should return 0
maxProfit([2,4,1]) // should return 4 - 2 = 2