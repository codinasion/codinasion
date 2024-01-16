---
title: Implement Selection Sort
trackId: 5327
---

## Write a program to implement selection sort

Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.

### Pseudocode

```
procedure selection sort 
   list  : array of items
   n     : size of list

   for i = 1 to n - 1
   /* set current element as minimum*/
      min = i    
   
      /* check the element to be minimum */

      for j = i+1 to n 
         if list[j] < list[min] then
            min = j;
         end if
      end for

      /* swap the minimum element with the current element*/
      if indexMin != i  then
         swap list[min] and list[i]
      end if
   end for
    
end procedure
```

### Example

```text
Input  : [8, 5, 2, 6, 9, 3, 1, 4, 0, 7]
Output : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

---
