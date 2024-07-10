---
title: How to Convert Binary to Octal
description: Converting binary to octal is a common task in computer programming. Binary is a base-2 number system that uses only two digits, 0 and 1. Octal, on the other hand, is a base-8 number system that uses eight digits, 0 through 7. Converting binary to octal involves grouping the binary digits into groups of 3 and converting each group to its corresponding octal value.
tags:
  - binary
  - octal
date: 2022-01-26
---

Converting [binary][Binary_Number] to [octal][Octal_Number] is a common task in computer programming. Binary is a `base-2` number system that uses only two digits, 0 and 1. Octal, on the other hand, is a `base-8` number system that uses eight digits, 0 through 7. Converting binary to octal involves grouping the binary digits into groups of 3 and converting each group to its corresponding octal value.

## Conversion

Here's a step-by-step guide on how to convert binary to octal:

1. Choose the binary number you want to convert to octal.
2. Group the binary digits into groups of 3, starting from the rightmost digit. If the leftmost group has less than 3 digits, pad it with leading zeros.
3. Convert each group of 3 binary digits to its corresponding octal value using the table below.

## Example

Let's walk through an example to illustrate the process. Suppose we want to convert the binary number 11011010 to octal.

1. The binary number we want to convert is `11011010`.
2. We group the binary digits into groups of 3: `011` and `011` and `010`.
3. We convert each group of 3 binary digits to its corresponding octal value using the table below. The octal value of `011` is `3`, and the octal value of `010` is `2`.
4. The octal representation of the binary number `11011010` is `332`.

## Binary-Octal Table

| Binary | Octal |
| ------ | ----- |
| 000    | 0     |
| 001    | 1     |
| 010    | 2     |
| 011    | 3     |
| 100    | 4     |
| 101    | 5     |
| 110    | 6     |
| 111    | 7     |

## References

- [Binary Number][Binary_Number]
- [Octal Number][Octal_Number]

<!-- Reference -->

[Binary_Number]: /blog/2024/01/01-what-is-binary-number "What is a Binary Number?"
[Octal_Number]: /blog/2024/01/01-what-is-octal-number "What is an Octal Number?"
