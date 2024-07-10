---
title: How to Convert Hexadecimal to Octal
description: Converting hexadecimal to octal is a common task in computer programming. Hexadecimal is a base-16 number system that uses sixteen digits, 0 through 9 and A through F. Octal, on the other hand, is a base-8 number system that uses eight digits, 0 through 7. Converting hexadecimal to octal involves converting the hexadecimal number to binary, and then converting the binary number to octal.
tags:
  - hexadecimal
  - octal
date: 2022-01-26
---

Converting [hexadecimal][Hexadecimal_Number] to [octal][Octal_Number] is a common task in computer programming. Hexadecimal is a `base-16` number system that uses sixteen digits, 0 through 9 and A through F. Octal, on the other hand, is a `base-8` number system that uses eight digits, 0 through 7. Converting hexadecimal to octal involves converting the hexadecimal number to [binary][Binary_Number], and then converting the binary number to octal.

## Conversion

Here's a step-by-step guide on how to convert hexadecimal to octal:

1. Choose the hexadecimal number you want to convert to octal.
2. Convert the hexadecimal number to binary using the table below.
3. Group the binary digits into groups of three, starting from the rightmost digit. If the leftmost group has less than three digits, add leading zeros to make it a group of three.
4. Convert each group of three binary digits to its octal equivalent using the table below.
5. Write the octal equivalent of each group of three binary digits in order to get the octal representation of the binary number.

## Example

Let's walk through an example to illustrate the process. Suppose we want to convert the hexadecimal number 2A to octal.

1. The hexadecimal number we want to convert is `2A`.
2. We convert the hexadecimal number to binary using the table below: 0010 1010.
3. We group the binary digits into groups of three: 000 101 010.
4. We convert each group of three binary digits to its octal equivalent using the table below. 000 = 0, 101 = 5, 010 = 2.
5. We write the octal equivalent of each group of three binary digits in order to get the octal representation of the binary number: 052.

## Hexadecimal-Binary Table

| Hexadecimal | Binary |
| ----------- | ------ |
| 0           | 0000   |
| 1           | 0001   |
| 2           | 0010   |
| 3           | 0011   |
| 4           | 0100   |
| 5           | 0101   |
| 6           | 0110   |
| 7           | 0111   |
| 8           | 1000   |
| 9           | 1001   |
| A           | 1010   |
| B           | 1011   |
| C           | 1100   |
| D           | 1101   |
| E           | 1110   |
| F           | 1111   |

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
- [Hexadecimal Number][Hexadecimal_Number]
- [Octal Number][Octal_Number]

<!-- Reference -->

[Binary_Number]: /blog/2024/01/01-what-is-binary-number "What is a Binary Number?"
[Hexadecimal_Number]: /blog/2024/01/01-what-is-hexadecimal-number "What is a Hexadecimal Number?"
[Octal_Number]: /blog/2024/01/01-what-is-octal-number "What is an Octal Number?"
