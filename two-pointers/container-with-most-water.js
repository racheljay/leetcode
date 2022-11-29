/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let start = 0
    let end = height.length - 1
    let area = 0
    let biggestArea = 0
    
    while (start < end) {
        let minHeight = Math.min(height[start], height[end])
        let distance = end - start
        area = minHeight * distance
        biggestArea = Math.max(biggestArea, area)
        console.log(area, biggestArea)

        if (height[start] < height[end]) {
            start++
        } else {
            end--
        }
    }
    return biggestArea
};

const arr1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]

maxArea(arr1)