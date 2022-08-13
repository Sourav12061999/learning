// Creating a class for stack:-
class Que {
  constructor(initialSize = 0, fillValue = 0) {
    this.items = new Array(initialSize).fill(fillValue);
    this.front = -1;
    this.rear = -1;
    this.size = initialSize;
  }

  isEmpty() {
    this.size === 0;
  }

  enque(element) {
    this.items[this.size] = element;
    this.size = this.size + 1;
    if (this.front === -1) {
      this.front = 0;
    }
    this.rear += 1;
  }

  deque() {
    if (this.isEmpty()) return null;
    const poppedElement = this.items[this.front];
    this.items[this.front] = undefined;
    this.front = this.front + 1;
    this.size-=1;

    return poppedElement;
  }
}
