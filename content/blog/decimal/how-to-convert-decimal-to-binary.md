---
title: How to Convert Decimal to Binary
description: Converting decimal to binary is a common task in computer programming. Decimal is a base-10 number system that uses ten digits, 0 through 9. Binary, on the other hand, is a base-2 number system that uses only two digits, 0 and 1. Converting decimal to binary involves dividing the decimal number by 2 repeatedly and recording the remainder at each step.
tags:
  - decimal
  - binary
date: 2022-01-26
---

Converting [decimal][Decimal_Number] to [binary][Binary_Number] is a common task in computer programming. Decimal is a base-10 number system that uses ten digits, 0 through 9. Binary, on the other hand, is a base-2 number system that uses only two digits, 0 and 1. Converting decimal to binary involves dividing the decimal number by 2 repeatedly and recording the remainder at each step.

## Conversion

Here's a step-by-step guide on how to convert decimal to binary:

1. Choose the decimal number you want to convert to binary.
2. Divide the decimal number by 2.
3. Record the remainder (0 or 1).
4. Divide the quotient from step 2 by 2.
5. Record the remainder.
6. Repeat steps 4 and 5 until the quotient is 0.
7. Write the remainders in reverse order to get the binary representation of the decimal number.

## Example

Let's walk through an example to illustrate the process. Suppose we want to convert the decimal number 13 to binary.

1. The decimal number we want to convert is 13.
2. We divide 13 by 2 to get a quotient of 6 and a remainder of 1.
3. We record the remainder of 1.
4. We divide 6 by 2 to get a quotient of 3 and a remainder of 0.
5. We record the remainder of 0.
6. We divide 3 by 2 to get a quotient of 1 and a remainder of 1.
7. We record the remainder of 1.
8. We divide 1 by 2 to get a quotient of 0 and a remainder of 1.
9. We record the remainder of 1.
10. We write the remainders in reverse order to get the binary representation of 13: 1101.

    | Quotient | Remainder | Binary |
    | -------- | --------- | ------ |
    | $13/2=6$ | 1         | 1      |
    | $6/2=3$  | 0         | 01     |
    | $3/2=1$  | 1         | 101    |
    | $1/2=0$  | 1         | 1101   |

## Binary-Decimal Table

Here's a table that shows the decimal values of the first 16 binary numbers:

| Decimal | Binary |
| ------- | ------ |
| 0       | 0000   |
| 1       | 0001   |
| 2       | 0010   |
| 3       | 0011   |
| 4       | 0100   |
| 5       | 0101   |
| 6       | 0110   |
| 7       | 0111   |
| 8       | 1000   |
| 9       | 1001   |
| 10      | 1010   |
| 11      | 1011   |
| 12      | 1100   |
| 13      | 1101   |
| 14      | 1110   |
| 15      | 1111   |

## References

- [Binary Number][Binary_Number]
- [Decimal Number][Decimal_Number]

<!-- Reference -->

[Binary_Number]: /blog/2024/01/01-what-is-binary-number "What is a Binary Number?"
[Decimal_Number]: /blog/2024/01/01-what-is-decimal-number "What is a Decimal Number?"
