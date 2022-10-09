---
title: Linear Search
trackId: 2199
---

## Write a program for linear search

Linear search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one. Every item is checked and if a match is found then that particular item is returned, otherwise the search continues till the end of the data collection.

```bash
Input  : 10 20 80 30 60 50 110 100 130 170
Target : 80

Output : 2
```

### Steps to implement Linear Search

1. Start from the leftmost element of arr[] and one by one compare x with each element of arr[]
2. If x matches with an element, return the index.
3. If x doesn’t match with any of elements, return -1.
4. End

For `i=0`

```text
10 20 80 30 60 50 110 100 130 170
^
80 => Not Found
```

For `i=1`

```text
10 20 80 30 60 50 110 100 130 170
   ^
   80 => Not Found
```

For `i=2`

```text
10 20 80 30 60 50 110 100 130 170
      ^
      80 => Found
```

---
