/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    const output = new Array(temperatures.length).fill(0)
    const stack = []

    for (let i = 0; i < temperatures.length; i++) {
        const currentTemp = temperatures[i]

        while (stack.length !== 0 && currentTemp > stack[stack.length - 1][0]) {
            let popped = stack.pop()
            let diff = i - popped[1]
            output[popped[1]] = diff
        }
        stack.push([currentTemp, i])

    }
    return output
};