---
title: How to Convert Binary to Decimal
description: Converting binary to decimal is a common task in computer programming. Binary is a base-2 number system that uses only two digits, 0 and 1. Decimal, on the other hand, is a base-10 number system that uses ten digits, 0 through 9. Converting binary to decimal involves multiplying each digit of the binary number by its corresponding power of 2 and adding up the results.
tags:
  - binary
  - decimal
date: 2022-01-26
---

Converting [binary][Binary_Number] to [decimal][Decimal_Number] is a common task in computer programming. Binary is a `base-2` number system that uses only two digits, 0 and 1. Decimal, on the other hand, is a `base-10` number system that uses ten digits, 0 through 9. Converting binary to decimal involves multiplying each digit of the binary number by its corresponding power of 2 and adding up the results.

## Conversion

Here's a step-by-step guide on how to convert binary to decimal:

1. Choose the binary number you want to convert to decimal.
2. Write down the powers of 2 from right to left, starting with $2^0$.
3. Multiply each digit of the binary number by its corresponding power of 2.
4. Add up the results from step 3 to get the decimal value.

## Example

Let's walk through an example to illustrate the process. Suppose we want to convert the binary number `1011` to decimal.

1. The binary number we want to convert is 1011.
2. The powers of 2 from right to left are $2^0$, $2^1$, $2^2$, and $2^3$
3. We multiply each digit of the binary number by its corresponding power of 2. The results are: $1 \times 2^0 = 1$, $1 \times 2^1 = 2$, $0 \times 2^2 = 0$, and $1 \times 2^3 = 8$
4. We add up the results from step 3 to get the decimal value. $1 + 2 + 0 + 8 = 11$ Therefore, the decimal value of the binary number 1011 is 11.

## Binary-Decimal Table

Here's a table that shows the decimal values of the first 16 binary numbers:

| Binary | Decimal |
| ------ | ------- |
| 0000   | 0       |
| 0001   | 1       |
| 0010   | 2       |
| 0011   | 3       |
| 0100   | 4       |
| 0101   | 5       |
| 0110   | 6       |
| 0111   | 7       |
| 1000   | 8       |
| 1001   | 9       |
| 1010   | 10      |
| 1011   | 11      |
| 1100   | 12      |
| 1101   | 13      |
| 1110   | 14      |
| 1111   | 15      |

## References

- [Binary Number][Binary_Number]
- [Decimal Number][Decimal_Number]

<!-- Reference -->

[Binary_Number]: /blog/2024/01/01-what-is-binary-number "What is a Binary Number?"
[Decimal_Number]: /blog/2024/01/01-what-is-decimal-number "What is a Decimal Number?"
