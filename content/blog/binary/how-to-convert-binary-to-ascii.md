---
title: How to Convert Binary to ASCII
description: Converting binary to ASCII is a common task in computer programming. Binary is a base-2 number system that uses only two digits, 0 and 1. ASCII, on the other hand, is a character encoding standard that assigns a unique number to each character. Converting binary to ASCII involves converting each group of 8 bits (1 byte) to its corresponding ASCII character.
tags:
  - binary
  - ascii
date: 2022-01-26
---

Converting [binary][Binary_Number] to [ASCII][ASCII_Number] is a common task in computer programming. Binary is a `base-2` number system that uses only two digits, 0 and 1. ASCII, on the other hand, is a character encoding standard that assigns a unique number to each character. Converting binary to ASCII involves converting each group of 8 bits (1 byte) to its corresponding ASCII character.

## Conversion

Here's a step-by-step guide on how to convert binary to ASCII:

1. Choose the binary value you want to convert to ASCII.
2. Divide the binary value into groups of 8 bits (1 byte).
3. Convert each group of 8 bits to its decimal value using the [binary-to-decimal conversion][Convert_Binary_To_Decimal] method.
4. Look up the ASCII character corresponding to each decimal value using an [ASCII table][ASCII_Number].

## Example

Let's walk through an example to illustrate the process. Suppose we want to convert the binary value `10000010100001001000011` to ASCII.

1. The binary value we want to convert is `10000010100001001000011`.
2. We divide the binary value into groups of 8 bits: `01000001`, `01000010`, and `01000011`.
3. We convert each group of 8 bits to its decimal value using the [binary-to-decimal][Convert_Binary_To_Decimal] conversion method. The decimal values are `65`, `66`, and `67`.
4. We look up the ASCII character corresponding to each decimal value using an ASCII table. The ASCII characters are `'A'`, `'B'`, and `'C'`.
5. The ASCII representation of the binary value `10000010100001001000011` is `"ABC"`.

## ASCII-Binary Table

Here's a table of the ASCII characters and their corresponding binary values:

| Character | Description | Decimal | Binary   |
| --------- | ----------- | ------- | -------- |
| 0         | Zero        | 48      | 00110000 |
| 1         | One         | 49      | 00110001 |
| 2         | Two         | 50      | 00110010 |
| 3         | Three       | 51      | 00110011 |
| 4         | Four        | 52      | 00110100 |
| 5         | Five        | 53      | 00110101 |
| 6         | Six         | 54      | 00110110 |
| 7         | Seven       | 55      | 00110111 |
| 8         | Eight       | 56      | 00111000 |
| 9         | Nine        | 57      | 00111001 |
| A         | Capital A   | 65      | 01000001 |
| B         | Capital B   | 66      | 01000010 |
| C         | Capital C   | 67      | 01000011 |
| D         | Capital D   | 68      | 01000100 |
| E         | Capital E   | 69      | 01000101 |
| F         | Capital F   | 70      | 01000110 |
| G         | Capital G   | 71      | 01000111 |
| H         | Capital H   | 72      | 01001000 |
| I         | Capital I   | 73      | 01001001 |
| J         | Capital J   | 74      | 01001010 |
| K         | Capital K   | 75      | 01001011 |
| L         | Capital L   | 76      | 01001100 |
| M         | Capital M   | 77      | 01001101 |
| N         | Capital N   | 78      | 01001110 |
| O         | Capital O   | 79      | 01001111 |
| P         | Capital P   | 80      | 01010000 |
| Q         | Capital Q   | 81      | 01010001 |
| R         | Capital R   | 82      | 01010010 |
| S         | Capital S   | 83      | 01010011 |
| T         | Capital T   | 84      | 01010100 |
| U         | Capital U   | 85      | 01010101 |
| V         | Capital V   | 86      | 01010110 |
| W         | Capital W   | 87      | 01010111 |
| X         | Capital X   | 88      | 01011000 |
| Y         | Capital Y   | 89      | 01011001 |
| Z         | Capital Z   | 90      | 01011010 |
| a         | Small a     | 97      | 01100001 |
| b         | Small b     | 98      | 01100010 |
| c         | Small c     | 99      | 01100011 |
| d         | Small d     | 100     | 01100100 |
| e         | Small e     | 101     | 01100101 |
| f         | Small f     | 102     | 01100110 |
| g         | Small g     | 103     | 01100111 |
| h         | Small h     | 104     | 01101000 |
| i         | Small i     | 105     | 01101001 |
| j         | Small j     | 106     | 01101010 |
| k         | Small k     | 107     | 01101011 |
| l         | Small l     | 108     | 01101100 |
| m         | Small m     | 109     | 01101101 |
| n         | Small n     | 110     | 01101110 |
| o         | Small o     | 111     | 01101111 |
| p         | Small p     | 112     | 01110000 |
| q         | Small q     | 113     | 01110001 |
| r         | Small r     | 114     | 01110010 |
| s         | Small s     | 115     | 01110011 |
| t         | Small t     | 116     | 01110100 |
| u         | Small u     | 117     | 01110101 |
| v         | Small v     | 118     | 01110110 |
| w         | Small w     | 119     | 01110111 |
| x         | Small x     | 120     | 01111000 |
| y         | Small y     | 121     | 01111001 |
| z         | Small z     | 122     | 01111010 |

See full ascii table [here][ASCII_Number].

## References

- [ASCII Number][ASCII_Number]
- [Binary Number][Binary_Number]
- [Decimal Number][Decimal_Number]
- [Convert Binary To Decimal][Convert_Binary_To_Decimal]

<!-- Reference -->

[ASCII_Number]: /blog/2024/01/01-what-is-ascii-number "What is an ASCII Number?"
[Binary_Number]: /blog/2024/01/01-what-is-binary-number "What is a Binary Number?"
[Decimal_Number]: /blog/2024/01/01-what-is-decimal-number "What is a Decimal Number?"
[Convert_Binary_To_Decimal]: /blog/2024/01/03-how-to-convert-binary-to-decimal "How to Convert Binary to Decimal?"
