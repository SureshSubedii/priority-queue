class MinHeap{
    constructor(){
        this.heap = []
    }

    hasLeftChild(index){
       return this.leftChildIndex(index) < this.heap.length
    }

    hasRightChild(index){
        return this.rightChildIndex(index) < this.heap.length
    }

    hasParent(index){
        return this.parentIndex(index) >= 0
    }

    parentIndex(index){
        return Math.floor( (index - 1)/2)
    }

    leftChildIndex(index){
             return 2 * index + 1
    }

    rightChildIndex(index){
        return 2 * index + 2  
    }

    leftChild(index){
        return this.heap[2 * index + 1]
    }

    rightChild(index){
        return this.heap[2 * index + 2]
    }

    parent(index){
        return this.heap[Math.floor((index - 1)/2)]
    }

    swap(firstIndex, secondIndex){
        const temp = this.heap[firstIndex]
        this.heap[firstIndex] = this.heap[secondIndex]
        this.heap[secondIndex] = temp
    }
    peek(){
        if(!this.heap){
            return  null
        }
        return this.heap[0]
    }
    add(item){
        this.heap.push(item)
        this.heapifyUp()
    }
    remove(){
        let item = this.heap.pop()
        this.heap[0] = item
        this.heapifyDown()
        return item

    }
    heapifyUp(){
        let index = this.heap.length - 1
        while(this.hasParent(index) && this.parent(index) > this.heap[index]){
            let parentIndex =  this.parentIndex(index)
            this.swap(index, parentIndex)
            index = parentIndex
        }
    }
    heapifyDown(){
        let index = 0
        while(this.hasLeftChild(index)){
            let smallerChild = this.leftChildIndex(index)
            if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)){
                smallerChild = this.rightChildIndex(index)
            }
            this.swap(index, smallerChild )
            index = smallerChild
        }

    }
}


let minHeap = new MinHeap();
 
minHeap.add(32);
minHeap.add(45);
minHeap.add(12);
minHeap.add(65);
minHeap.add(85);
minHeap.add(100);
minHeap.add(99);
minHeap.add(1);



console.log(minHeap.heap)
minHeap.remove()
console.log(minHeap.heap)