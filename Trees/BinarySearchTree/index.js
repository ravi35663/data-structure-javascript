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
}

const bst = new BinarySearchTree();
bst.insert(10)
bst.insert(9)
bst.insert(20)
bst.insert(1)
bst.insert(10)
bst.insert(5)
console.log("bst.find(1) ",bst.find(1))
console.log("bst.find(10) ",bst.find(10))
console.log("bst.find(16) ",bst.find(16))

