---
slug: heap-sort
---

## What is Heap Sort?

Heap sort is a sorting algorithm that sorts a collection of elements by building a heap data structure and then sorting the elements according to the heap data structure.

## How to implement Heap Sort?

To implement heap sort, we need to build a heap data structure, then sort the elements according to the heap data structure.

### Example

Let's sort the collection `[3, 2, 4, 1, 2, 1]` using heap sort.

First, we need to build a heap data structure.

| Element | Heap             |
| ------- | ---------------- |
| 3       | 3                |
| 2       | 3, 2             |
| 4       | 4, 2, 3          |
| 1       | 4, 2, 3, 1       |
| 2       | 4, 2, 3, 1, 2    |
| 1       | 4, 2, 3, 1, 2, 1 |

Now, we need to sort the elements according to the heap data structure.

| Element | Heap             |
| ------- | ---------------- |
| 1       | 1                |
| 1       | 1, 1             |
| 2       | 2, 1, 1          |
| 2       | 2, 2, 1, 1       |
| 3       | 3, 2, 1, 1, 2    |
| 4       | 4, 3, 1, 1, 2, 2 |

The sorted collection is `[1, 1, 2, 2, 3, 4]`.
