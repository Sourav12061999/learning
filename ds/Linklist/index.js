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

    // Has lenear time complexity
    insert(value,index){
        if(index != undefined && index<0 || index>this.size ){
            return 
        }
        if(index === 0){
            return this.prepend(value);
        }
        if(index === this.size){
            return this.append(value);
        }

        const node = new Node(value);
        let prev = this.head;
        for(let i=0;i<index-1;i++){
            prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
    }
    // Has lenear time complexity
    remove(index){
        if(index<0 || index>this.size-1){
            return null;
        }
        let removedNode;
        if(index === 0){
             removedNode = this.head;
             this.head = this.head.next;
        }else{
            let prev = this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = prev.next.next;
        }
        this.size--;
        return removedNode.value;
    }

    // Has lenear time complexity
    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            this.head === this.head.next;
            this.size--;
            return value;
        }
        let prev = this.head;
        for(let i=0;i<this.size-1;i++){
          if(prev.next.value === value){
              prev.next = prev.next.next;
              this.size--;
              return value;
          }
          prev = element.next;
        }

        return null;
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
list.insert(50,1);
list.print();
list.remove(1);
list.print();
list.removeValue(10);
list.print();
console.log(list.isEmpty());
console.log(list.getSize());
console.log(list);