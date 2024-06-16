---
title: How to Convert Octal to Binary
description: Octal is a base-8 numbering system that uses eight digits, from 0 to 7. Binary is a base-2 numbering system that uses two digits, 0 and 1. In order to convert an octal number to binary number, you need to convert each octal digit to its corresponding binary representation.
tags:
  - octal
  - binary
date: 2022-01-26
---

[Octal][Octal_Number] is a `base-8` numbering system that uses eight digits, from 0 to 7. [Binary][Binary_Number] is a `base-2` numbering system that uses two digits, 0 and 1. In order to convert an octal number to binary number, you need to convert each octal digit to its corresponding binary representation.

## Conversion

Here are the steps to convert an octal number to binary number:

1. Identify the octal number you want to convert.
2. Convert each octal digit to its corresponding binary representation. You can use the table below to find the corresponding binary representation for each octal digit.
3. Combine the binary representations to form the final binary number. Starting from the leftmost digit, combine the binary representations of each octal digit to form the final binary number.

## Example

Let's say we have the octal number 345. To convert this octal number to binary number, we need to convert each octal digit to its corresponding binary representation:

```text
3 -> 011
4 -> 100
5 -> 101
```

Combining these binary representations, we get the final binary number `011100101`.

## Octal-Binary Table

| Octal | Binary |
| ----- | ------ |
| 0     | 000    |
| 1     | 001    |
| 2     | 010    |
| 3     | 011    |
| 4     | 100    |
| 5     | 101    |
| 6     | 110    |
| 7     | 111    |

## References

- [Binary Number][Binary_Number]
- [Octal Number][Octal_Number]

<!-- Reference -->

[Binary_Number]: /blog/2024/01/01-what-is-binary-number "What is a Binary Number?"
[Octal_Number]: /blog/2024/01/01-what-is-octal-number "What is an Octal Number?"
