class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Linkedlist {
    constructor(){
        this.head = null;
        this.tail=null;
        this.size = 0;
    }
    isEmpty(){
        return this.size===0;
    }

    getSize(){
        return this.size;
    }

    // Has constant time complexity
    prepend(value){
       const node = new Node(value);
       if(this.isEmpty()){
        this.head=node;
        this.tail = node;
       }else{
          node.next = this.head;
          this.head = node;
       }
       this.size++;
    }

    // With this append Has constant time complexity 
    append(value){
        const node = new Node(value);
       if(this.isEmpty()){
        this.head=node;
        this.tail = node;
       }else{
          this.tail.next = node;
          this.tail = node;
       }
       this.size++;
    }

    // Has constant time complexity
    removeFromFront(){
        if(this.isEmpty()) return null;
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    removeFromEnd(){
        if(this.isEmpty()) return null;
        const value = this.tail.value;

        if(this.size === 1){
            this.head = null;
            this.tail = null;
        }else{
            let prev = this.head;

            while(prev.next != this.tail){
                prev = prev.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
        return value;
    }
    print(){
        if(this.isEmpty()){
            console.log("List is Empty");
        }else{
            let curr = this.head;
            let listValues = [];
            while(curr){
                listValues.push(curr.value);
                curr = curr.next;
            }
            console.log(listValues);
        }
    }
}

const linkedlist = new Linkedlist();

linkedlist.append(1);
linkedlist.append(2);
linkedlist.append(3);
linkedlist.print();
linkedlist.removeFromEnd();
linkedlist.print();
linkedlist.removeFromFront();
linkedlist.print();