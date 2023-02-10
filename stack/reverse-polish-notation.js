/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    let solution = 0

    for (let i = 0; i < tokens.length; i++) {
        const char = tokens[i]

        if (Number.isInteger(parseInt(char))) {
            stack.push(parseInt(char))
        } else {
            let secondNum = stack.pop()
            let firstNum = stack.pop()

            if (char === "+") {
                solution = firstNum + secondNum
            } else if (char === "-") {
                solution = firstNum - secondNum
            } else if (char === "*") {
                solution = firstNum * secondNum
            } else if (char === "/") {
                solution = firstNum / secondNum
            }

            if (solution > 0) {
                solution = Math.floor(solution)
            } else {
                solution = Math.ceil(solution)
            }

            stack.push(solution)
        }
    }

    console.log(stack)
    return stack.pop()

};

case1 = ["-78","-33","196","+","-19","-","115","+","-","-99","/","-18","8","*","-86","-","-","16","/","26","-14","-","-","47","-","101","-","163","*","143","-","0","-","171","+","120","*","-60","+","156","/","173","/","-24","11","+","21","/","*","44","*","180","70","-40","-","*","86","132","-84","+","*","-","38","/","/","21","28","/","+","83","/","-31","156","-","+","28","/","95","-","120","+","8","*","90","-","-94","*","-73","/","-62","/","93","*","196","-","-59","+","187","-","143","/","-79","-89","+","-"]

evalRPN(case1)