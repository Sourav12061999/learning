// Creating a class for stack:-
class CircularQue {
  constructor(capacity = 0, fillValue = 0) {
    this.items = new Array(capacity).fill(fillValue);
    this.capacity = capacity;
    this.currLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull(){
    this.currLength === this.capacity;
  }
  isEmpty() {
    return this.items.currLength === 0;
  }
  enque(element) {
    if(!this.isFull()){
      this.rear=this.rear+1;
      this.items[this.rear] = element;
      this.currLength+=1;
      if(this.front === -1){
        this.front = this.rear;
      }
    }
  }

  deque(){
    if(this.isEmpty()){
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] =null;
    this.front+=1;
    this.currLength -=1;
    if(this.isEmpty()){
      this.front=-1;
      this.rear = -1
    }
    return item;
  }
  peek() {
    return this.isEmpty() ? null : this.items[0];
  }
}