/*
===> Representation of MaxBinaryHeap:
    ->  arr = [100,19,36,17,12,25,5,9,15,6,11,13,8,1,4]
    ->  Finding children of parent having index n;
        1) LeftChild  =  (2n+1)
        2) RightChild =  (2n+2)
        For instance:
            100
            /  \
          19   36

    ->  Finding parent of a child having index n:
        Parent = Floor((n-1)/2)
*/

// Implementation of max binaryHeap:
class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    // 
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    // Remove latest element
    extractMax(){
        let parent_index = 0;
        while(true){
            const left_child_index = (2 * parent_index + 1)
            const right_child_index = 2 * (parent_index + 1);
            if(this.values[parent_index] > this.values[left_child_index] && this.values[parent_index] > this.values[right_child_index_child_index]){
                if(this.values[left_child_index] > this.values[right_child_index_child_index]){
                    [this.values[parent_index],this.values[left_child_index]] = [this.values[left_child_index],this.values[parent_index]]
                    parent_index = left_child_index;
                }else{
                    [this.values[parent_index],this.values[right_child_index]] = [this.values[right_child_index],this.values[parent_index]]
                    parent_index = right_child_index;
                }
            }else{

            }
        }
    }

    bubbleUp(){
        let child_index = this.values.length-1;
        while(child_index > 0){
            let parent = Math.floor((child_index-1)/2);
            if(this.values[child_index] > this.values[parent]){
                [this.values[child_index],this.values[parent]] = [this.values[parent],this.values[child_index]];
                child_index = parent;
            }else{
                break;
            }
        }
    }

    viewMaxBinaryHeap(){
        console.log("Values: ",this.values);
    }
}

const max_binary_heap = new MaxBinaryHeap();
max_binary_heap.insert(10)
max_binary_heap.insert(20)
max_binary_heap.insert(30)
max_binary_heap.insert(40)
max_binary_heap.viewMaxBinaryHeap();
// Completed this code