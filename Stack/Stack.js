const Node = require('./Node');
class Stack{
    constructor(){
        this.start = null;
        this.end = null;
        this.size = 0;
    }
    //Push element at the beginning of the stack (Should be in constant time)
    push(value){
        const node = new Node(value);
        if(!this.start){
            this.start = node;
            this.end = node;
        }else{
            let temp = this.start;
            node.next  = temp;
            this.start = node;
        }
        this.size++;
        return this.size;
    }
    // remove the element at the end (Should be in constant time)
    pop(){
        if(!this.start){
            return null;
        }
        const item = this.start.value
        if(this.size === 1){
            [this.start,this.end ] = [null,null];
        }
        this.start = this.start.next;
        this.size--;
        return item;
    }
    display(){
        let item = this.start;
        while(item){
            process.stdout.write(`${item.value} `);
            item = item.next;
        }
        console.log();
    }
}

const stack = new Stack();
stack.push("My")
stack.push("Name")
stack.push("is")
stack.push("Ravi")
stack.push("Kumar")
stack.push("Sharma");
stack.display();
// stack.push("From");
console.log(stack.pop())
stack.display();
console.log("Size of stack is ",stack.size);

