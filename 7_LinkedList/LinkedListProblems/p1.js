//
/*
    1) Implement a singly linked list.
        -> Insert a node at the beginning of a linked list.
        -> Insert a node at the end of a linked list.
        -> Insert a node at a specific position in a linked list.
        -> Delete a node from the beginning of a linked list.
        -> Delete a node from the end of a linked list.
        -> Delete a node at a specific position in a linked list.
        -> Find the length of a linked list.
        -> Search for a given element in a linked list.
        -> Count occurrences of a given element in a linked list.
        -> Delete nodes with a given value in a linked list.
        -> Find the middle of a linked list.
*/
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // To add element at the end of SLL
    addAtLast(value){
        const node = new Node(value);
        if(this.head===null){
            this.head = node;
            this.tail = node;
        } else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return node;
    }

    // add element at the beginning 
    addAtFirst(value){
        const node = new Node(value);
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return node;
    }

    // add element at any position
    addAtSpecificPosition(position,value){
        if(position < 0){
            return;
        }
        if(position == 0 ){
            this.addAtFirst(value);
        }else if (position >= this.length){
            this.addAtLast(value);
        }else {
            const node = new Node(value);
            let temp = this.head;
            let prev = null;
            while(position){
                prev = temp;
                temp = temp.next;
                position--;
            }
            prev.next = node;
            prev.next.next = temp;
            this.length++;
        }
        return this.head;
    }

    // Delete node at the beginning of sll
    deleteAtFirst(){
        if(this.length === 0 ){
            return;
        }
        const node=this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else {
            this.head = this.head.next;
        }
        this.length--;
        return node;
    }

    deleteAtLast(){
        if(this.length < 0){
            return;
        }
        if(this.length === 1){
            return deleteAtFirst();
        }else{
            let temp = this.head;
            let prev = null;
            while(temp.next){
                prev = temp;
                temp = temp.next;
            }
            prev.next = null;
            this.tail = prev;
            this.length--;
            return temp;
        }
    }

    deleteAtSpecificPosition(position){
        if(position < 0 || position >= this.length){
            return;
        }
        if(position === 0){
            return this.deleteAtFirst();
        }else if(position === this.length - 1){
            return this.deleteAtLast();
        }else{
            let temp = this.head;
            let prev = null;
            while(position){
                prev = temp;
                temp = temp.next;
                position--;
            }
            prev.next = temp.next;
            this.length--;
            return temp;
        }
    }
    access(){
        let temp = this.head;
        while(temp){
            process.stdout.write(`${temp.value} `);
            temp = temp.next;
        }
    }
}

const sll = new SinglyLinkedList();
sll.addAtLast(10);
sll.addAtLast(20);
sll.addAtLast(30);
sll.addAtLast(40);
sll.addAtLast(50);
sll.addAtFirst(60);
sll.addAtFirst(70);
sll.addAtSpecificPosition(0,100);
sll.addAtSpecificPosition(111,200);
sll.addAtSpecificPosition(6,300);
// sll.deleteAtLast();
// sll.deleteAtFirst();
// sll.deleteAtLast();
sll.deleteAtSpecificPosition(9);
sll.access();