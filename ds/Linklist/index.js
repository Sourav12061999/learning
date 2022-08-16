class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Linkedlist {
    constructor(){
        this.head = null;
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
       }else{
          node.next = this.head;
          this.head = node;
       }
       this.size++;
    }

    // Has lenear time complexity
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head= node;
        }else{
            let prevNode = this.head;

            while(prevNode.next){
                prevNode = prevNode.next;
            }

            prevNode.next = node;
        }

        this.size++;
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

const list = new Linkedlist();
list.print();
list.prepend(10);
list.print();
list.prepend(20);
list.print();
list.append(30);
list.print();
console.log(list.isEmpty());
console.log(list.getSize());
console.log(list);