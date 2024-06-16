---
title: How to Convert Hexadecimal to ASCII
description: Converting hexadecimal to ASCII is a common task in computer programming. Hexadecimal is a base-16 number system that uses sixteen digits, 0 through 9 and A through F. Decimal is a base-10 number system that uses ten digits, 0 through 9. ASCII is a character encoding standard that assigns a unique number to each character. Converting hexadecimal  to ASCII involves converting the hexadecimal number to decimal, and then looking up the ASCII character corresponding to each decimal value using an ASCII table.
tags:
  - hexadecimal
  - ascii
date: 2022-01-26
---

Converting [hexadecimal][Hexadecimal_Number] to [ASCII][ASCII_Number] is a common task in computer programming. Hexadecimal is a `base-16` number system that uses sixteen digits, 0 through 9 and A through F. [Decimal][Decimal_Number] is a `base-10` number system that uses ten digits, 0 through 9. ASCII is a character encoding standard that assigns a unique number to each character. Converting hexadecimal to ASCII involves converting the hexadecimal number to decimal, and then looking up the ASCII character corresponding to each decimal value using an ASCII table.

## Conversion

Here's a step-by-step guide on how to convert hexadecimal to ASCII:

1. Choose the hexadecimal value you want to convert to ASCII.
2. Convert the hexadecimal value to decimal using the following formula:

   decimal = $(16^2 \times h1) + (16^1 \times h2) + (16^0 \times h3) + ... + (16^n \times hn)$

   where h1, h2, h3, ..., hn are the hexadecimal digits and n is the number of digits in the hexadecimal value.

3. Look up the ASCII character corresponding to each decimal value using an ASCII table.

## Example

Let's walk through an example to illustrate the process. Suppose we want to convert the hexadecimal value 41 to ASCII.

1. The hexadecimal value we want to convert is 41.
2. We convert the hexadecimal value to decimal using the formula:

   decimal = $(16^1 \times 4) + (16^0 \times 1) = 65$

3. We look up the ASCII character corresponding to the decimal value using an ASCII table. The ASCII character corresponding to 65 is 'A'.

## ASCII-Hexadecimal Table

Here's a table of the ASCII characters and their corresponding hexadecimal values:

| Character | Description | Decimal | Hexadecimal |
| --------- | ----------- | ------- | ----------- |
| 0         | Zero        | 48      | 30          |
| 1         | One         | 49      | 31          |
| 2         | Two         | 50      | 32          |
| 3         | Three       | 51      | 33          |
| 4         | Four        | 52      | 34          |
| 5         | Five        | 53      | 35          |
| 6         | Six         | 54      | 36          |
| 7         | Seven       | 55      | 37          |
| 8         | Eight       | 56      | 38          |
| 9         | Nine        | 57      | 39          |
| A         | Capital A   | 65      | 41          |
| B         | Capital B   | 66      | 42          |
| C         | Capital C   | 67      | 43          |
| D         | Capital D   | 68      | 44          |
| E         | Capital E   | 69      | 45          |
| F         | Capital F   | 70      | 46          |
| G         | Capital G   | 71      | 47          |
| H         | Capital H   | 72      | 48          |
| I         | Capital I   | 73      | 49          |
| J         | Capital J   | 74      | 4A          |
| K         | Capital K   | 75      | 4B          |
| L         | Capital L   | 76      | 4C          |
| M         | Capital M   | 77      | 4D          |
| N         | Capital N   | 78      | 4E          |
| O         | Capital O   | 79      | 4F          |
| P         | Capital P   | 80      | 50          |
| Q         | Capital Q   | 81      | 51          |
| R         | Capital R   | 82      | 52          |
| S         | Capital S   | 83      | 53          |
| T         | Capital T   | 84      | 54          |
| U         | Capital U   | 85      | 55          |
| V         | Capital V   | 86      | 56          |
| W         | Capital W   | 87      | 57          |
| X         | Capital X   | 88      | 58          |
| Y         | Capital Y   | 89      | 59          |
| Z         | Capital Z   | 90      | 5A          |
| a         | Small a     | 97      | 61          |
| b         | Small b     | 98      | 62          |
| c         | Small c     | 99      | 63          |
| d         | Small d     | 100     | 64          |
| e         | Small e     | 101     | 65          |
| f         | Small f     | 102     | 66          |
| g         | Small g     | 103     | 67          |
| h         | Small h     | 104     | 68          |
| i         | Small i     | 105     | 69          |
| j         | Small j     | 106     | 6A          |
| k         | Small k     | 107     | 6B          |
| l         | Small l     | 108     | 6C          |
| m         | Small m     | 109     | 6D          |
| n         | Small n     | 110     | 6E          |
| o         | Small o     | 111     | 6F          |
| p         | Small p     | 112     | 70          |
| q         | Small q     | 113     | 71          |
| r         | Small r     | 114     | 72          |
| s         | Small s     | 115     | 73          |
| t         | Small t     | 116     | 74          |
| u         | Small u     | 117     | 75          |
| v         | Small v     | 118     | 76          |
| w         | Small w     | 119     | 77          |
| x         | Small x     | 120     | 78          |
| y         | Small y     | 121     | 79          |
| z         | Small z     | 122     | 7A          |

See full ascii table [here][ASCII_Number].

## References

- [ASCII Number][ASCII_Number]
- [Decimal Number][Decimal_Number]
- [Hexadecimal Number][Hexadecimal_Number]

<!-- Reference -->

[ASCII_Number]: /blog/2024/01/01-what-is-ascii-number "What is an ASCII Number?"
[Decimal_Number]: /blog/2024/01/01-what-is-decimal-number "What is a Decimal Number?"
[Hexadecimal_Number]: /blog/2024/01/01-what-is-hexadecimal-number "What is a Hexadecimal Number?"
