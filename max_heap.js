class MaxHeap{
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
        while(this.hasParent(index) && this.parent(index) < this.heap[index]){
            let parentIndex = this.parentIndex(index)
            this.swap(index, parentIndex)
            index = parentIndex
        }
     }
     heapifyDown(){
        let index = 0
        console.log(this.hasLeftChild(index),this.hasRightChild(index),this.rightChild(index),this.leftChild(index), this.heap[index])
        while(this.hasLeftChild(index)){
            let greater = this.leftChildIndex(index)
            if(this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)){
                greater = this.rightChildIndex(index)
            }
            if(this.parent(greater) < this.heap[greater]){
            this.swap(index, greater)
            }else{
                break
            }
            index = greater

        }

     }
}

let maxHeap = new MaxHeap()
maxHeap.add(3)
maxHeap.add(1)
maxHeap.add(4)
maxHeap.add(2)
maxHeap.add(11)
maxHeap.add(111)
maxHeap.add(222)
maxHeap.remove()

console.log(maxHeap.heap)