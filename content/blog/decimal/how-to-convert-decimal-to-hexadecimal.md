---
title: How to Convert Decimal to Hexadecimal
description: Converting decimal to hexadecimal is a common task in computer programming. Decimal is a base-10 number system that uses ten digits, 0 through 9. Hexadecimal, on the other hand, is a base-16 number system that uses sixteen digits, 0 through 9 and A through F. Converting decimal to hexadecimal involves dividing the decimal number by 16 repeatedly and recording the remainder at each step.
tags:
  - decimal
  - hexadecimal
date: 2022-01-26
---

Converting [decimal][Decimal_Number] to [hexadecimal][Hexadecimal_Number] is a common task in computer programming. Decimal is a `base-10` number system that uses ten digits, 0 through 9. Hexadecimal, on the other hand, is a `base-16` number system that uses sixteen digits, 0 through 9 and A through F. Converting decimal to hexadecimal involves dividing the decimal number by 16 repeatedly and recording the remainder at each step.

## Conversion

Here's a step-by-step guide on how to convert decimal to hexadecimal:

1. Choose the decimal number you want to convert to hexadecimal.
2. Divide the decimal number by 16.
3. Record the remainder (0 through 15).
4. If the quotient is greater than 0, repeat steps 2 and 3 using the quotient as the new decimal number.
5. Convert each remainder to its corresponding hexadecimal value using an ASCII table or a conversion chart.
6. Write the remainders in reverse order to get the hexadecimal representation of the decimal number.

## Example

Let's walk through an example to illustrate the process. Suppose we want to convert the decimal number 305 to hexadecimal.

1. The decimal number we want to convert is 305.
2. We divide 305 by 16 to get a quotient of 19 and a remainder of 1.
3. We record the remainder of 1.
4. We divide 19 by 16 to get a quotient of 1 and a remainder of 3.
5. We record the remainder of 3.
6. We divide 1 by 16 to get a quotient of 0 and a remainder of 1.
7. We record the remainder of 1.
8. We convert each remainder to its corresponding hexadecimal value using an ASCII table or a conversion chart. The hexadecimal value of 1 is 1, and the hexadecimal value of 3 is 3.
9. We write the remainders in reverse order to get the hexadecimal representation of 305: 131.

   | Quotient    | Remainder | Hexadecimal |
   | ----------- | --------- | ----------- |
   | $305/16=19$ | 1         | 1           |
   | $19/16=1$   | 3         | 3           |
   | $1/16=0$    | 1         | 1           |

## Decimal-Hexadecimal Table

Here's a table that shows the decimal and hexadecimal values of the first 16 numbers:

| Decimal | Hexadecimal |
| ------- | ----------- |
| 0       | 0           |
| 1       | 1           |
| 2       | 2           |
| 3       | 3           |
| 4       | 4           |
| 5       | 5           |
| 6       | 6           |
| 7       | 7           |
| 8       | 8           |
| 9       | 9           |
| 10      | A           |
| 11      | B           |
| 12      | C           |
| 13      | D           |
| 14      | E           |
| 15      | F           |

## References

- [Decimal Number][Decimal_Number]
- [Hexadecimal Number][Hexadecimal_Number]

<!-- Reference -->

[Decimal_Number]: /blog/2024/01/01-what-is-decimal-number "What is a Decimal Number?"
[Hexadecimal_Number]: /blog/2024/01/01-what-is-hexadecimal-number "What is a Hexadecimal Number?"
