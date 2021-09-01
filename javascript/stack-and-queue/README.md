# Stacks and Queues
Stacks and Queues are data structures. A stack follow FILO principle, meaning First In Last Out. A queue follow FIFO principle, meaning First In First Out. 

An example of a **stack** would be a vending machine's stock. As it is filled (first in), the items get pushed back so that the last one that was put in would be first one to come out if that item is picked (last out). 

An example of a **queue** would be a line for an amusement park ride. As people get in line the line grows and once the line is called, whoever was at the front (first in) goes first (first out).

## Challenges
Use a linked list as the underlyting data storage. Then create a stack and a Queue with various methods. 

Create a queue with 2 stacks for data storage. This will be called PseudoQueue.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->


## API
Stack Methods:
- push (data to be added): adds a node to the top of the stack with the given data. 
- pop: removes the first item from the stack and appropriately adjusts the stack to represent the removal. 
- peek: reveals the data at the top of the stack without altering the stack
- isEmpty: returns true if the stack is empty or false if there is anything still in the stack. 

Queue Methods:
- enqueue (data to add): adds a new node on the the queue with the given data.
- dequeue: removes the first item from the queue.
- peek: shows you the next item in line to be dequeued.
- isEmpty: returns a boolean of whether or not the queue is empty.

Pseudo Queue Methods:
- enqueue (data to enqueue): adds a new node to a stack to be stored in the queue
- dequeue: follows the FIFO pronciples and returns the first item added to the queue, that is at the bottom of the stack. 

[Return](../../README.md)  
