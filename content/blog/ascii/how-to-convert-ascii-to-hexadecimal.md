---
title: How to Convert ASCII to Hexadecimal
description: Converting ASCII to hexadecimal is a common task in computer programming. ASCII is a character encoding standard that assigns a unique number to each character. Hexadecimal, on the other hand, is a base-16 number system that uses sixteen digits, 0 through 9 and A through F. Converting ASCII to hexadecimal involves converting each character to its corresponding hexadecimal value.
tags:
  - ascii
  - hexadecimal
date: 2022-01-26
---

Converting [ASCII][ASCII_Number] to [hexadecimal][Hexadecimal_Number] is a common task in computer programming. ASCII is a character encoding standard that assigns a unique number to each character. Hexadecimal, on the other hand, is a `base-16` number system that uses sixteen digits, 0 through 9 and A through F. Converting ASCII to hexadecimal involves converting each character to its corresponding hexadecimal value.

## Conversion

Here's a step-by-step guide on how to convert ASCII to hexadecimal:

1. Choose the ASCII character you want to convert to hexadecimal.
2. Convert the ASCII character to its decimal value using an ASCII table.
3. Convert the decimal value to hexadecimal using the division-by-16 method.
4. Pad the hexadecimal value with leading zeros to make it 2 digits long (if necessary).

## Example

Let's walk through an example to illustrate the process. Suppose we want to convert the ASCII character 'A' to hexadecimal.

1. The ASCII value of 'A' is 65.
2. To convert 65 to hexadecimal, we use the division-by-16 method. We divide 65 by 16 and get a quotient of 4 with a remainder of 1. We write down the remainder (1) as the least significant digit of the hexadecimal value. We then divide 4 by 16 and get a quotient of 0 with a remainder of 4. We write down the remainder (4) as the next digit of the hexadecimal value. The hexadecimal value of 65 is 41.

   | Quotient  | Remainder | Hexadecimal |
   | --------- | --------- | ----------- |
   | $65/16=4$ | 1         | 1           |
   | $4/16=0$  | 4         | 41          |

3. Since the hexadecimal value we obtained in step 2 is only 2 digits long, we don't need to pad it with leading zeros.

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
