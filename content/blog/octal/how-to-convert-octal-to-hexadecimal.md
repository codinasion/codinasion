---
title: How to Convert Octal to Hexadecimal
description: "Octal is a base-8 numbering system that uses eight digits, from 0 to 7. Hexadecimal is a base-16 numbering system that uses sixteen digits, from 0 to 9 and A to F. In order to convert an octal number to hexadecimal number, you need to first convert the octal number to binary number, and then convert the binary number to hexadecimal number."
tags:
  - octal
  - hexadecimal
date: 2022-01-26
---

[Octal][Octal_Number] is a `base-8` numbering system that uses eight digits, from 0 to 7. [Hexadecimal][Hexadecimal_Number] is a `base-16` numbering system that uses sixteen digits, from 0 to 9 and A to F. In order to convert an octal number to hexadecimal number, you need to first convert the octal number to [binary number][Binary_Number], and then convert the binary number to hexadecimal number.

## Conversion

Here are the steps to convert an octal number to hexadecimal number:

1. Identify the octal number you want to convert.
2. Convert the octal number to binary number. You can use the steps outlined in our previous article on how to convert octal number to binary number to convert the octal number to binary number.
3. Convert the binary number to hexadecimal number. You can use the table below.

## Example

Here's an example to illustrate the conversion process:

Let's say we have the octal number 345. To convert this octal number to hexadecimal number, we need to first convert the octal number to binary number, and then convert the binary number to hexadecimal number:

1. Convert the octal number to binary number:

   ```text
   3 -> 011
   4 -> 100
   5 -> 101
   ```

   Combining these binary representations, we get the binary number `011100101`.

2. Convert the binary number to hexadecimal number:

   ```text
   0111 -> 7
   0010 -> 2
   0101 -> 5
   ```

   Combining these hexadecimal digits, we get the hexadecimal number E5.

Therefore, the octal number `345` corresponds to the hexadecimal number `E5`.

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
- [Octal Number][Octal_Number]

<!-- Reference -->

[Binary_Number]: /blog/2024/01/01-what-is-binary-number "What is a Binary Number?"
[Hexadecimal_Number]: /blog/2024/01/01-what-is-hexadecimal-number "What is a Hexadecimal Number?"
[Octal_Number]: /blog/2024/01/01-what-is-octal-number "What is an Octal Number?"
