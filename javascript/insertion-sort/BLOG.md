# Insertion Sorted

This article will follow the below pseudocode through several example input arrays.

This function is ment to sort an array in place by itterating the array multiple times.

To summarize the process, we will itterate through the array once for each index value. on each itteration, we will find whichever value is the lowest in the itteration it will be swapped with the current index value.

Pseudocode
InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp

## Example 1

Input: `[8,4,23,42,16,15]`

Expected Output: `[4,8,15,16,23,42]`

### First itteration

- the value at index 0 is 8

- the lowest value in the array from index 0 through the end is 4 at index 1

- swap the values at index 1 and 0

The array is now `[4,8,23,42,16,15]`

### Second itteration

- the value at index 1 is now 8

- the lowest value in the array from index 1 through the end is 8 at index 1

- since it is the lowest value it doesn't move

The array as not changed

### Third itteration

- the value at index 2 is still 23

- the lowest value in the array from index 2 through the end is 15 at index 5

- swap the values at index 2 and 5

The new array is `[4,8,15,42,16,23]`

### Fourth itteration

- the value at index 3 is 42

- the lowest value in the array from index 3 through the end is 16 at index 4

- swap the values at index 3 and 4

The new array is `[4,8,15,16,42,23]`

### Fifth itteration

- the value at the index 5 is 42

- the lowest value in the array from index 4 through the end is 23 at index 5

- swap the values at index 4 and 5

The result is a fully sorted array `[4,8,15,16,23,42]`
