---
title: Implement Jump Search
trackId: 5253
---

## Write a program to implement jump search

Like Binary Search, Jump Search is a searching algorithm for sorted arrays. The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps or skipping some elements in place of searching all elements.

For example, suppose we have an array arr[] of size n and block (to be jumped) size m. Then we search at the indexes arr[0], arr[m], arr[2m]…..arr[km] and so on. Once we find the interval (arr[km] < x < arr[(k+1)m]), we perform a linear search operation from the index km to find the element x.

### Pseudocode

```text
procedure jump_search
   A ← sorted array
   n ← size of array
   x ← value to be searched

   Set block size = √n

   while A[min(block size, n)-1] < x do
      prev = block size
      block size = block size + √n
      if prev >= n
         return not found
         
   end while
   
   while A[prev] < x do
      prev = prev + 1
      
      if prev == min(block size, n)
         return not found
         
   end while
   
   if A[prev] == x
      return prev
      
   return not found
end procedure
```

### Example

```text
list = [1,2,3,4,5]
value = 4

Output : 3
```

---
