// Creating a class for stack:-
class Que {
  constructor(initialSize = 0, fillValue = 0) {
    this.items = new Array(initialSize).fill(fillValue);
  }

  deque() {
    return this.items.shift();
  }
  enque(element) {
    this.items.push(element);
    return this.items;
  }
  peek() {
    return this.isEmpty() ? null : this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

// Creating a new stack with a starting size and fill value,
const stack = new Stack(5, 0);
console.log(stack);

// Making the last element as undefined
console.log(stack.pop());
console.log(stack);
