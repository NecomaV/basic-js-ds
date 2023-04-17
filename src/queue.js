const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.queue = [];
  }

  getUnderlyingList() {
    if (this.queue.length === 0) {
      return null;
    }

    let head = new ListNode(this.queue[0]);
    let tail = head;

    for (let i = 1; i < this.queue.length; i++) {
      tail.next = new ListNode(this.queue[i]);
      tail = tail.next;
    }

    return head;
  }

  enqueue(val){
    return this.queue.push(val)
  }

  dequeue() {
    if(this.queue.length > 0) {
      return this.queue.shift();
    }
  }
}

module.exports = {
  Queue
};
