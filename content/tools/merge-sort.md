---
slug: merge-sort
---

## What is Merge Sort?

Merge sort is a sorting algorithm that sorts a collection of elements by dividing the collection into two halves, sorting each half recursively, and then merging the two sorted halves.

## How to implement Merge Sort?

To implement merge sort, we need to divide the collection into two halves, sort each half recursively, and then merge the two sorted halves.

### Example

Let's sort the collection `[3, 2, 4, 1, 2, 1]` using merge sort.

First, we need to divide the collection into two halves.

| Collection 1 | Collection 2 |
| ------------ | ------------ |
| 3            | 2            |
| 4            | 1            |
| 2            | 1            |

Now, we need to sort each half recursively.

| Collection 1 | Collection 2 |
| ------------ | ------------ |
| 2            | 1            |
| 3            | 1            |
| 4            | 2            |

Now, we need to merge the two sorted halves.

| Collection 1 | Collection 2 | Sorted Collection |
| ------------ | ------------ | ----------------- |
| 2            | 1            | 1                 |
| 3            | 1            | 1, 1              |
| 4            | 2            | 1, 1, 2           |
|              |              | 1, 1, 2, 3        |
|              |              | 1, 1, 2, 3, 4     |

The sorted collection is `[1, 1, 2, 3, 4]`.
