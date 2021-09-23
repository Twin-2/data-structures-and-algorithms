# Quick Sort

## Overview

The quick sort algorith takes an array and sorts it in place. In a nut shell, this algorithm takes a 'pivot' (some index value in the array) and sorts the array such that any values smaller than it are on the left and any values larger than it are on the right. The algorithm then recursively calls this sorting function on the array to the left of that pivot index and then the right side of the pivot.

PseudoCode

    On initial call, left should be the first index of the array, and right should be the last index of the array.

    ALGORITHM QuickSort(arr, left, right)
      if left < right
          // Partition the array by setting the position of the pivot value
          DEFINE position <-- Partition(arr, left, right)
          // Sort the left
          QuickSort(arr, left, position - 1)
          // Sort the right
          QuickSort(arr, position + 1, right)

    ALGORITHM Partition(arr, left, right)
      // set a pivot value as a point of reference
      DEFINE pivot <-- arr[right]
      // create a variable to track the largest index of numbers lower than the defined pivot
      DEFINE low <-- left - 1
      for i <- left to right do
          if arr[i] <= pivot
              low++
              Swap(arr, i, low)

      // place the value of the pivot location in the middle.
      // all numbers smaller than the pivot are on the left, larger on the right.
      Swap(arr, right, low + 1)
      // return the pivot index point
      return low + 1

    ALGORITHM Swap(arr, i, low)
      DEFINE temp;
      temp <-- arr[i]
      arr[i] <-- arr[low]
      arr[low] <-- temp

## Run through

### First Pass

Input: `[8,4,23,42,16,15]`

Call QuickSort with the input array, left as the index 0 and right as index length - 1

This then calls `partition` with the array, left, and right.

- This quicksort function sets the pivot to the right, or third parameter passed in, and sorts the array such that the pivot number is at an index where all values to it's left are smaller and all values to it's right are larger.

- This new array should look as such: `[8,4,15,42,16,23]`.

- Notice that the array still looks pretty unsorted... but now there 15 is in its correct position!!

Now we are done with our fir call of `partition` so we move on down the function to call `Quicksort` now looking at the 'left' array using the returned value from partition to set the right bound of this new array.

- The new array we will be quicksorting is `[8,4]`.

### Second Pass

We just recursively called QuickSort with the array `[8,4]`.

This will be passed into the partition function to give us a new sorted array `[4,8]`.

Now we are done with this 'tree' of the recursion and we jump back up to our original array calling QuickSort on the right side of the array.

### Third Pass

We are now calling QuickSort on the array `[42,16,23]`. The left and right of this array are once again the beginning and end of that array.

- We begin the partition function and the array gets sorted into the following: `[16,23,42]`.

- Now, since 23 is the pivot we have a left and right array that are both only 1 long. This catches at the first like of our QuickSort function and skips all the recursive call.

- We jump back through our call stack and vuala! We have a sorted array!
