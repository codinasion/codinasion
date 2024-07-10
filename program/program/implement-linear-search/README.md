---
title: Implement Linear Search
trackId: 5289
---

## Write a program to implement linear search

Linear search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection.

Linear search is the simplest search algorithm. For this reason, it is often called sequential search.

### Pseudocode

```text
procedure linear_search (list, value)

   for each item in the list
      if match item == value
         return the item's location
      end if
   end for

end procedure
```

### Example

```text
list = [1,2,3,4,5]
value = 4

Output : 3
```

---
