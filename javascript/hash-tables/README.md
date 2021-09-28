# Hashtables

A hash table is a data structure to store information. It is quite usefull because it is very fast at retriving information. It does this by creating an index value inan array for based on the key of the data that you pass in. Each key coresponds to a unique index number so that you can easily go back to that same key's index number to retrieve the data rathern than having ot map through the data structure.

## Challenge

Create a hash table class with properties of hash, add, get, and contains.

## Approach & Efficiency

The true beauty of a hash map lies in it's O(1) look up time. It has a Big O for space of O(n).

## API

The Hashtable class has the following methods.

- Add(key, value): uses the key to create an index number in the defines space of the array then uses this index to store the key/value pair as a node in a LL at that indec position on the array.

- Get(key): returns the value of that key if it is in the Hashtable, otherwise returns null.

- Contains(key): retuns a boolean noting if the key is in the Hashtable or not.

- Hash(key): returns an index number within the bounds of the Hashtables' array.

Repeated Words function will return the first word to repeat in a string or 'No repeated words' if there are none.
