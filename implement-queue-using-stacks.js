var Node = function(data) {
    this.data = data
    this.next = null
}

var MyQueue = function() {
    this.head = null
    this.tail = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
 
    if(this.head === null) {
        this.head = new Node(x)
        this.tail = this.head
        console.log(this.head)
    } else {
        const newNode = new Node(x)
        this.tail.next = newNode
        this.tail = newNode
        console.log(this.head)
    }
    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.head === null) {
        return null
    }
    const oldHead = this.head
    const newHead = this.head.next
    this.head = newHead
    return oldHead.data
    
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.head === null) {
        return null
    }
    return this.head.data
    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.head === null) return true
    else return false
    
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */