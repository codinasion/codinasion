---
title: How to Convert ASCII to Binary
description: Converting ASCII to binary is a common task in computer programming. ASCII is a character encoding standard that assigns a unique number to each character. Binary, on the other hand, is a base-2 number system that uses only two digits, 0 and 1. Converting ASCII to binary involves converting each character to its corresponding binary value.
tags:
  - ascii
  - binary
date: 2022-01-26
---

Converting [ASCII][ASCII_Number] to [binary][Binary_Number] is a common task in computer programming. ASCII is a character encoding standard that assigns a unique number to each character. Binary, on the other hand, is a base-2 number system that uses only two digits, 0 and 1. Converting ASCII to binary involves converting each character to its corresponding binary value.

## Conversion

Here's a step-by-step guide on how to convert ASCII to binary:

1. Choose the ASCII character you want to convert to binary.
2. Convert the ASCII character to its decimal value using an ASCII table.
3. Convert the decimal value to binary using the division-by-2 method.
4. Pad the binary value with leading zeros to make it 8 bits long (if necessary).

## Example

Let's walk through an example to illustrate the process. Suppose we want to convert the ASCII character 'A' to binary.

1. The ASCII value of 'A' is 65.
2. To convert 65 to binary, we use the division-by-2 method. We divide 65 by 2 and get a quotient of 32 with a remainder of 1. We write down the remainder (1) as the least significant bit of the binary value. We then divide 32 by 2 and get a quotient of 16 with a remainder of 0. We write down the remainder (0) as the next bit of the binary value. We continue this process until we have 8 bits. The binary value of 65 is 01000001.

   | Quotient  | Remainder | Binary Value |
   | --------- | --------- | ------------ |
   | $65/2=32$ | 1         | 1            |
   | $32/2=16$ | 0         | 01           |
   | $16/2=8$  | 0         | 001          |
   | $8/2=4$   | 0         | 0001         |
   | $4/2=2$   | 0         | 00001        |
   | $2/2=1$   | 0         | 000001       |
   | $1/2=0$   | 1         | 1000001      |

3. Since the binary value we obtained in step 2 is already 8 bits long, we don't need to pad it with leading zeros.

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

<!-- Reference -->

[ASCII_Number]: /blog/2024/01/01-what-is-ascii-number "What is an ASCII Number?"
[Binary_Number]: /blog/2024/01/01-what-is-binary-number "What is a Binary Number?"
[Decimal_Number]: /blog/2024/01/01-what-is-decimal-number "What is a Decimal Number?"
