---
slug: quick-sort
---

## What is Quick Sort?

Quick sort is a sorting algorithm that sorts a collection of elements by partitioning the collection into two sub-collections around a pivot element and then sorting the sub-collections recursively.

## How to implement Quick Sort?

To implement quick sort, we need to partition the collection into two sub-collections around a pivot element, then sort the sub-collections recursively.

### Example

Let's sort the collection `[3, 2, 4, 1, 2, 1]` using quick sort.

First, we need to partition the collection into two sub-collections around a pivot element.

| Element | Partition     |
| ------- | ------------- |
| 3       | 2, 4, 1, 2, 1 |
| 2       | 1, 1          |
| 4       |               |
| 1       |               |

Now, we need to sort the sub-collections recursively.

| Element | Partition     |
| ------- | ------------- |
| 3       | 2, 4, 1, 2, 1 |
| 2       | 1, 1          |
| 4       |               |
| 1       |               |

The sorted collection is `[1, 1, 2, 2, 3, 4]`.
