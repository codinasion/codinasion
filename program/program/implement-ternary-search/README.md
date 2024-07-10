---
title: Implement Ternary Search
trackId: 5108
---

## Write a program to implement ternary search

Ternary search is a divide and conquer algorithm that can be used to find an element in an array. It is similar to binary search where we divide the array into two parts but in this algorithm, we divide the given array into three parts and determine which has the key (searched element).

### Pseudocode

```text
procedure ternary_search
   A ← sorted array
   value ← value to be searched
   l ← leftmost index
   r ← rightmost index
   
   while l ≤ r do
   
      partition size = (r-l)/3
      mid1 = l + partition_size
      mid2 = r - partition_size
      
      if A[mid1] = value
         return mid1
         
      if A[mid2] = value
         return mid2
         
      if value < A[mid1]
         set r = mid1 - 1
         
      else if value > A[mid2]
         set l = mid2 + 1
         
      else
         set l = mid1 + 1
         set r = mid2 - 1
         
   end while
   
   return -1
end procedure
```

### Example

```text
list = [1,2,3,4,5]
value = 4

Output : 3
```

---
