const Node = require('./Node')
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // Enqueue(enqueueing element at very end of the Queue)
    enqueue(value){
        const node = new Node(value);
        if(!this.first){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last  = this.last.next;
        }
        this.size++;
        return this.size;
    }
    // Dequeue (Removing element at very beginning of the Queue )
    dequeue(){
        if(!this.first){
            return null;
        }
        const temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--
        return temp.value;
    }
    // Access elements
    display(){
        let item = this.first;
        while(item){
            process.stdout.write(`${item.value} `);
            item = item.next;
        }
        console.log();
    }
}

const queue = new Queue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.display();
queue.dequeue()
queue.display();