---
title: How to Convert Binary to Hexadecimal
description: Converting binary to hexadecimal is a common task in computer programming. Binary is a base-2 number system that uses only two digits, 0 and 1. Hexadecimal, on the other hand, is a base-16 number system that uses sixteen digits, 0 through 9 and A through F. Converting binary to hexadecimal involves grouping the binary digits into groups of 4 and converting each group to its corresponding hexadecimal value.
tags:
  - binary
  - hexadecimal
date: 2022-01-26
---

Converting [binary][Binary_Number] to [hexadecimal][Hexadecimal_Number] is a common task in computer programming. Binary is a `base-2` number system that uses only two digits, 0 and 1. Hexadecimal, on the other hand, is a `base-16` number system that uses sixteen digits, 0 through 9 and A through F. Converting binary to hexadecimal involves grouping the binary digits into groups of 4 and converting each group to its corresponding hexadecimal value.

## Conversion

Here's a step-by-step guide on how to convert binary to hexadecimal:

1. Choose the binary number you want to convert to hexadecimal.
2. Group the binary digits into groups of 4, starting from the rightmost digit. If the leftmost group has less than 4 digits, pad it with leading zeros.
3. Convert each group of 4 binary digits to its corresponding hexadecimal value using the table below.

## Example

Let's walk through an example to illustrate the process. Suppose we want to convert the binary number 11011010 to hexadecimal.

1. The binary number we want to convert is 11011010.
2. We group the binary digits into groups of 4: `1101` and `1010`.
3. We convert each group of 4 binary digits to its corresponding hexadecimal value using the table below. The hexadecimal value of `1101` is `D`, and the hexadecimal value of `1010` is `A`.
4. The hexadecimal representation of the binary number `11011010` is `DA`.

## Binary-Hexadecimal Table

| Binary | Hexadecimal |
| ------ | ----------- |
| 0000   | 0           |
| 0001   | 1           |
| 0010   | 2           |
| 0011   | 3           |
| 0100   | 4           |
| 0101   | 5           |
| 0110   | 6           |
| 0111   | 7           |
| 1000   | 8           |
| 1001   | 9           |
| 1010   | A           |
| 1011   | B           |
| 1100   | C           |
| 1101   | D           |
| 1110   | E           |
| 1111   | F           |

## References

- [Binary Number][Binary_Number]
- [Hexadecimal Number][Hexadecimal_Number]

<!-- Reference -->

[Binary_Number]: /blog/2024/01/01-what-is-binary-number "What is a Binary Number?"
[Hexadecimal_Number]: /blog/2024/01/01-what-is-hexadecimal-number "What is a Hexadecimal Number?"
