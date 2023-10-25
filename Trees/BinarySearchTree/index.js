const Node = require('./Node');
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    //insert item into tree
    insert(value){
        const node = new Node(value);
        if(!this.root){
            this.root = node;
            return this.root;
        }else{
            let temp = this.root;
            while(true){
                if(value > temp.value){
                    if(!temp.right){
                        temp.right = node;
                        return this.root;
                    }else{
                        temp = temp.right;
                    }
                }else{
                    if(!temp.left){
                        temp.left = node;
                        return this.root;
                    }else{
                        temp = temp.left
                    }
                }
            }
        }
    }

    // Find node
    find(value){
        if(this.root){
            let temp = this.root;
            while(temp!=null){
                if(value === temp.value){
                    return temp;
                }else if(value > temp.value){
                    temp  = temp.right;
                }else{
                    temp = temp.left
                }
            }
        }
        return null;
    }
    // Traverse Tree (Breadth first search)
    BFS(){
        let node = this.root;
        let queue = [];
        let result = [];
        // add item in queue
        queue.push(node);
        // console.log("Queue is ",queue);
        while(queue.length){
            node = queue.shift();//Dequeue item
            result.push(node.value);
            if(node.left){
                queue.push(node.left);//enqueue item
            }
            if(node.right){
                queue.push(node.right)//enqueue item
            }
        }
        return result;
    }
    // Depth first search (Pre-Order)
    dfsPreOrder(){
        let result = [];
        let current = this.root;
        function traverse(node){
            result.push(node.value);
            if(node.left) traverse(node.left); // first left values will be added to the result array.
            if(node.right) traverse(node.right); // then right values will be added to the result array.
        }
        traverse(current);
        return result;
    }
}
const arr = [10,9,1,5,10,20,19,25,27];
// const arr = [15,10,8,12,20,16,25];
const bst = new BinarySearchTree();
arr.forEach(item=>{
    bst.insert(item);
})
console.log("Breadth first search :",bst.BFS());
console.log("Depth first search pre-order: ",bst.dfsPreOrder());
// console.log("bst.find(1) ",bst.find(1))
// console.log("bst.find(10) ",bst.find(10))
// console.log("bst.find(16) ",bst.find(16))

