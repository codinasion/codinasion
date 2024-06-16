---
slug: counting-sort
---

## What is Counting Sort?

Counting sort is a sorting algorithm that sorts a collection of elements by counting the number of occurrences of each element in the collection and then sorting them according to the number of occurrences.

## How to implement Counting Sort?

To implement counting sort, we need to count the number of occurrences of each element in the collection, then sort them according to the number of occurrences.

### Example

Let's sort the collection `[3, 2, 4, 1, 2, 1]` using counting sort.

First, we need to count the number of occurrences of each element in the collection.

| Element | Count |
| ------- | ----- |
| 1       | 2     |
| 2       | 2     |
| 3       | 1     |
| 4       | 1     |

Now, we need to sort the elements according to the number of occurrences.

| Element | Count |
| ------- | ----- |
| 1       | 2     |
| 2       | 2     |
| 3       | 1     |
| 4       | 1     |

The sorted collection is `[1, 1, 2, 2, 3, 4]`.
