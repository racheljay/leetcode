/*
    I ran into some hiccups on this one because I forgot some of the basics.
    This article is a good reminder:
    https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781
*/


var MinStack = function () {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.stack.length > 0) {
        let minimum = this.stack[this.stack.length - 1].min
        this.stack.push({ val: val, min: Math.min(minimum, val) })
    } else {
        this.stack.push({ val: val, min: val })
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    return this.stack.pop()[val]
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1][val]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {

    return this.stack[this.stack.length - 1][min]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack()
obj.push(4)
obj.push(-3)
obj.push(7)

console.log(obj)