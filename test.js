/**
 * Create Node
 * */ 

class Node{
    constructor(value){
        this.value = value;
        // this.next used to hold address of the previous node
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // push: insert item at the end of the linked list
    push(value){
        const node = new Node(value);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.length++;
    }
    // pop: Remove element at the end of the linked list
    pop(){
        if(!this.head){
            return null;
        }
        if(!this.head.next){
            const node = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return node;
        }else{
            let temp = this.head;
            while(temp.next.next){
                temp = temp.next;
            }
            const node = temp.next;
            this.tail = temp;
            this.tail.next = null;
            this.length--;
            return node;
        }
    }
    // Shift: shift one element from beginning (remove from beginning)
    shift(){
        if(!this.head){
            return null;
        }
        const currentNode = this.head;
        this.head = this.head.next;
        if(!this.head){
            this.tail = null;
        }
        this.length--;
        currentNode.next = null ;// to ensure that, this node detached from the list;
        return currentNode;
    }
    //unshift : Add element at the beginning of the array
    unshift(value){
        const node = new Node(value);
        this.length++;
        if(!this.head){
            this.tail = node;
        }else {
            node.next = this.head;
        }
        this.head = node;
        return this;

    }
    // Get Element by its position 
    getElement(index){
        if(index < 0 || index >= this.length){
            return null;
        }
        let count = 0;
        let temp = this.head;
        while(count!=index){
            count++;
            temp = temp.next;
        }
        return temp;
    }
    // Set Element: this is used to set existing element
    setElement(index,value){
        if(index < 0 || index>=this.length){
            return null;
        }
        let count = 0;
        let temp = this.head;
        while(count!=index){
            temp = temp.next;
            count++;
        }
        temp.value = value;
        return this;
    }
    // insert element at specific position
    insertElement(index,value){
        if(index < 0 || index> this.length){
            return;
        }
        let node = new Node(value);
        // insert at the end of the linked list
        this.length++;
        if(index === this.length){
            if(!this.head){
                this.head = node;
                this.tail = node;
            }else{
                this.tail.next = node;
                this.tail = this.tail.next;
            }
        }else if (index === 0){
            // this.unshift()
        }
        else if (index < this.length){
            let count = 0;
            let prev = null;
            let temp = this.head;
            while(count<index){
                prev = temp;
                temp = temp.next;
                count++;
            }
            node.next = temp;
            prev.next = node;
        }
    }
    // View items in linked list
    view(){
        let temp = this.head;
        while(temp){
            process.stdout.write(`${temp.value} `);
            temp = temp.next;
        }
    } 
}

const linked_list = new SinglyLinkedList();
linked_list.push(10)
linked_list.push(20)
linked_list.push(30)
linked_list.push(40);
linked_list.unshift(50);
linked_list.setElement(2,90);
// linked_list.shift();
linked_list.view();