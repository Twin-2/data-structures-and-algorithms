# Singly Linked List
Linked Lists are a data structure for storing data. They are similar to arrays but have some key diferences. For one, LL's can be stored dynamically in memory whereas an array needs to have a block set aside that is as big as the array. However, LL's are slow to search whn trying to find a specific value. 

## Challenge
Practice with dta structures: Create a singly Linked-List and appropriate tests.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Linked lists usually have a big O of O(n) for a search and O(1) for adding to them if done at the beginning, otherwise still O(n). My code might be slower for searching as I have a nested if/else. I was not able to figure out a better way to solve a bug I noticed when my LL was only one long. I ran into a similar error when trying to string all the values where the last one was not added to the string. This solution should still have been the same level of efficiency as I did not have to next an if/else to meet the odd condition. 

## API
Methods: 
- append - add a new node at the end of the LL. 
    - Parameter: (value for the node)
- insertBefore - insert a new node before the desired value. 
    - Parameters: (value to search for, value for the new node)
- insertAfter - insert a new node after the desired value. 
    - Parameters: (value to search for, value for the new node)
- shift - add a new node to the beginning of the LL
    - Parameters: (value for the new node)
- includes - search the LL for your value, returning true or false depending on if it is in the LL.
    - Parameters: (value to search)
- toString - outputs all the values of the nodes as a string showing the order
    - Parameters: none
- nthFromEnd - outputs the value that is n positions from the end of the linked list. Uses index type notation; ie 0 will be the last, 1 will be second from last...
    - Parameters: (any **positive** integer)

[Return](../README.md)  
