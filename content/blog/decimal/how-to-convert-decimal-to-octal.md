---
title: How to Convert Decimal to Octal
description: Converting decimal to octal is a common task in computer programming. Decimal is a base-10 number system that uses ten digits, 0 through 9. Octal, on the other hand, is a base-8 number system that uses eight digits, 0 through 7. Converting decimal to octal involves dividing the decimal number by 8 repeatedly and recording the remainder at each step.
tags:
  - decimal
  - octal
date: 2022-01-26
---

Converting [decimal][Decimal_Number] to [octal][Octal_Number] is a common task in computer programming. Decimal is a `base-10` number system that uses ten digits, 0 through 9. Octal, on the other hand, is a `base-8` number system that uses eight digits, 0 through 7. Converting decimal to octal involves dividing the decimal number by 8 repeatedly and recording the remainder at each step.

## Conversion

Here's a step-by-step guide on how to convert decimal to octal:

1. Choose the decimal number you want to convert to octal.
2. Divide the decimal number by 8.
3. Record the remainder (0 through 7).
4. If the quotient is greater than 0, repeat steps 2 and 3 using the quotient as the new decimal number.
5. Write the remainders in reverse order to get the octal representation of the decimal number.

## Example

Let's walk through an example to illustrate the process. Suppose we want to convert the decimal number 305 to octal.

1. The decimal number we want to convert is 305.
2. We divide 305 by 8 to get a quotient of 38 and a remainder of 1.
3. We record the remainder of 1.
4. We divide 38 by 8 to get a quotient of 4 and a remainder of 6.
5. We record the remainder of 6.
6. We divide 4 by 8 to get a quotient of 0 and a remainder of 4.
7. We record the remainder of 4.
8. We write the remainders in reverse order to get the octal representation of 305: 461.

   | Quotient   | Remainder | Octal |
   | ---------- | --------- | ----- |
   | $305/8=38$ | 1         | 1     |
   | $38/8=4$   | 6         | 61    |
   | $4/8=0$    | 4         | 461   |

## Decimal-Octal Table

Here's a table of decimal numbers and their octal equivalents:

| Decimal | Octal |
| ------- | ----- |
| 0       | 0     |
| 1       | 1     |
| 2       | 2     |
| 3       | 3     |
| 4       | 4     |
| 5       | 5     |
| 6       | 6     |
| 7       | 7     |
| 8       | 10    |

## References

- [Decimal Number][Decimal_Number]
- [Octal Number][Octal_Number]

<!-- Reference -->

[Decimal_Number]: /blog/2024/01/01-what-is-decimal-number "What is a Decimal Number?"
[Octal_Number]: /blog/2024/01/01-what-is-octal-number "What is an Octal Number?"
