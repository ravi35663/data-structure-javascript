/*
    Max-Heap-Implementation:
    1) Insert
    2) Delete
    3) Search:
    4) View
*/

class MaxBinaryHeap{
    constructor(){
        this.values = []
    }
    insert(value){
        // Always add i
        this.values.push(value);
        // Set the value at the right position/spot
        this.bubbleUp();
    }
    bubbleUp(){
        let child_index = this.values.length - 1;
        while(child_index > 0){
            const parent = Math.floor((child_index-1)/2);
            if(this.values[parent] < this.values[child_index]){
                [this.values[child_index],this.values[parent_index]] = [this.values[parent_index],this.values[child_index]]
                child_index = parent_index;
            }else{
                break;
            }
        }
    }

    // Extract Max:
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            // Bubble-Down
            this.bubbleDown();
        }
        return max
    }

    bubbleDown(){
        const id = 0;
        while(true){
            let left = (2 * id + 1);
            let right = (2 * id + 2);
            let swap = null;
            if(left < this.values.length && this.values[id] < this.values[left]){
                swap = left;
            }
            if(right < this.values.length){
                if(
                    (swap == null && this.values[id] < this.values[right]) ||
                    (swap!=null && this.values[swap] < this.values[right])
                ){
                    swap = right;
                }
            }
            if(swap == null){
                break;
            }else{
                [this.values[id],this.values[swap]] = [this.values[swap],this.values[id]]
                id = swap;
            }
        }
    }
}

