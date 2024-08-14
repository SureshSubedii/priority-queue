
class Element{
    constructor(value, priority){
        this.value  = value;
        this.priority = priority
    }
}
class PriorityQueue{
    constructor(){
        this.heap = []
    }
    isEmpty(){
        return this.heap.length === 0
    }
    enqueue(value, priority){
        let contains = false
        let newElement = new Element(value, priority)
        for (let i = 0; i < this.heap.length; i++) {
            if(priority > this.heap[i].priority){
                this.heap.splice(i, 0, newElement)
                contains = true
                break
            }
            
        }
        if(!contains){
            this.heap.push(newElement)
        }
    }
    dequeue(){
        if(this.isEmpty()) return "Under Flow"
        return this.heap.shift()

    }
    front(){
        if(this.isEmpty()) return "Queue Empty"
        return this.heap[0]
    }
    rear(){
        return this.heap[this.heap.length - 1]


    }
    printQueue(){
        let elements = ""
        for (let i = 0; i < this.heap.length; i++) {
            elements += `${this.heap[i].value} `
            
        }
        console.log(elements)
    }
}

let queue = new PriorityQueue()
queue.enqueue(10,2)
queue.enqueue(20,5)
queue.enqueue(30,1)
queue.printQueue()


