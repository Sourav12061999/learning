class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Constant Time Complexity
  prepend(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // Constant Time Complexity
  append(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  // Constant Time Complexity
  removeFromFront(){
    if(this.size===0) return "Empty";
    const value = this.head.value;
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
    return value;
  }

  // Constant Time Complexity
  removeFromEnd(){
    if(this.size===0) return "Empty";
    const value = this.tail.value;
    const prev = this.tail.prev;
    prev.next = null;
    this.tail = prev;
    this.size--;
    return value;
  }

  print() {
    if (this.size===0) {
      console.log("List is Empty");
    } else {
      let curr = this.head;
      let listValues = [];
      while (curr) {
        listValues.push(curr.value);
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new Linkedlist();
list.append(10);
list.print();
list.prepend(20);
list.print();
list.append(30);
list.print();
list.prepend(50);
list.print();
list.removeFromFront();
list.print();
list.removeFromEnd();
list.print();

