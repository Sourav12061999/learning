// Creating a class for stack:-
class Stack {
  constructor(initialSize = 0, fillValue = 0) {
    this.items = new Array(initialSize).fill(fillValue);
  }

  pop() {
    let poppedElement= this.items[this.items.length-1];
    this.items[this.items.length-1] = undefined;
    return poppedElement;
  }
  push(element){
     this.items[this.items.length] = element;
     return this.items;
  }
  peek(){
    return this.items[this.items.length-1];
  }
  isEmpty(){
    return this.items.length === 0;
  }
}

// Creating a new stack with a starting size and fill value,
const stack = new Stack(5,0);
console.log(stack);

// Making the last element as undefined
console.log(stack.pop());
console.log(stack);
