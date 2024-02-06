class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head  = null;
        this.tail = null;
        this.length = 0;
    }
    // Insertion at any specific position
    insert(position,value){
        const node = new Node(value);
        if(this.length === 0){
            this.head = node;
            this.tail = node;
        }else{
            if(position === 0){
                node.next = this.head;
                this.head = node;
            }else if(position >=this.length){
                this.tail.next = node;
                this.tail = this.tail.next;
            }else{
                let temp = this.head;
                position--;
                while(position){
                    temp = temp.next;
                    position--;
                }
                node.next = temp.next;
                temp.next = node;
            }
        }
        this.length++;
        return node;
    }
    // delete node at any specific position
    deleteNode(position){
        if(!this.length){
            return false;
        }
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length--;
        }else if(position >= this.length){
            return false;
        }else if(position === 0){
            this.head = this.head.next;
        }else if(position === this.length-1){
            let temp = this.head;
            let prev = null;
            while(temp.next!=null){
                prev = temp;
                temp = temp.next;
            }
            prev.next = null;
            this.tail = prev;
        }else{
            let prev = null;
            let temp = this.head;
            while(position){
                prev = temp;
                temp = temp.next;
                position--;
            }
            prev.next = temp.next;
        }
        this.length--;
    }
    access(){
        let temp = this.head;
        while(temp){
            process.stdout.write(`${temp.value} `);
            temp = temp.next;
        }
    }
}

const list = new SinglyLinkedList();
list.insert(1,10);
list.insert(2,20);
list.insert(3,30);
list.insert(4,40);
list.insert(5,50);
list.insert(6,60);
list.deleteNode(1)
list.access();