---
title: Binary Search
trackId: 2561
---

## Write a program for binary search

Binary search is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

```bash
Input  : 10 20 30 40 50 60 70 80 90 100
Target : 30

Output : 2
```

### Steps to implement Binary Search

1. Compare x with the middle element.
2. If x matches with middle element, we return the mid index.
3. Else If x is greater than the mid element, then x can only lie in right half subarray after the mid element. So we recur for right half.
4. Else (x is smaller) recur for the left half.
5. End

```text
10 20 30 40 50 60 70 80 90 100
------------------------------
            ^
            30 => Not Found
```

```text
10 20 30 40 50 60 70 80 90 100
--------------
      ^
      30 => Found
```

---
