# Merge Sort

The 30,000 foot view of the merge sort concept is to use recursion to split an array in half again and again until you have a bunch of single item long arrays. These arrays are the merged back together checking as you go to see which value is highest and putting that first.

This article will follow the below pseudocode through an example input array.

## PseudoCode

    ALGORITHM Mergesort(arr)
        DECLARE n <-- arr.length

        if n > 1
        DECLARE mid <-- n/2
        DECLARE left <-- arr[0...mid]
        DECLARE right <-- arr[mid...n]
        // sort the left side
        Mergesort(left)
        // sort the right side
        Mergesort(right)
        // merge the sorted left and right sides together
        Merge(left, right, arr)

    ALGORITHM Merge(left, right, arr)
        DECLARE i <-- 0
        DECLARE j <-- 0
        DECLARE k <-- 0

        while i < left.length && j < right.length
            if left[i] <= right[j]
                arr[k] <-- left[i]
                i <-- i + 1
            else
                arr[k] <-- right[j]
                j <-- j + 1

            k <-- k + 1

        if i = left.length
        set remaining entries in arr to remaining values in right
        else
        set remaining entries in arr to remaining values in left

## Runthrough

Input: `[8,4,23,42,16,15]`

Expected Output: `[4,8,15,16,23,42]`

### Step 1

Per the PseudoCode, we are going to start by splitting our input array into several arrays each with a length of 1. They will look like this:

    [8] [4] [23] [42] [16] [15]

Now we have an 'n' value of 1 so we move onto the next step of calling the sort function.

### Step 2

Our first merge will take our arrays two at a time and combine then into arrays that are now 2 long. So now our arrays should look something like this.

    [8] [4,23] [42] [15,16]

    Becomes...

    [4,8,23] [15,16,42]

    Bemcomes...

    [4,8,15,16,23,42]

And there we go! a sorted list!

### Recursion

The true beuty of this method is the recursion. That is also where all the confusion comes in...

As it is splitting the original array, our function always starts be splitting left if it can. Once it can no longer split the left then it 'jumps up' and tries to split the right.

    1. [8,4,23]  [42,16,15]
    2. [8] [4,23]
    3. [4] [23]
    5. [42] [16,15]
    6. [16] [15]

This allows us to 'zipper' them back up so neatly! Now we see that we are merging `[15]` and `[16]`. Then `[42]` and `[15,16]` and so on.

## Summary

This function can seem very confusing at first, because it is! However, this allows us to achieve a Big O for time of log(n), which is pretty awesome. But, that comes at the cost of having a Big ) space of n^2, not so great...

So depending on what you need, if space ins't a factor but performance is, consider a merge sort for your arrays.
