---
title: How to Convert ASCII to Octal
description: Converting ASCII to octal is a common task in computer programming. ASCII is a character encoding standard that assigns a unique number to each character. Octal, on the other hand, is a base-8 number system that uses eight digits, 0 through 7. Converting ASCII to octal involves converting each character to its corresponding octal value.
tags:
  - ascii
  - octal
date: 2022-01-26
---

Converting [ASCII][ASCII_Number] to [octal][Octal_Number] is a common task in computer programming. ASCII is a character encoding standard that assigns a unique number to each character. Octal, on the other hand, is a `base-8` number system that uses eight digits, 0 through 7. Converting ASCII to octal involves converting each character to its corresponding octal value.

## Conversion

Here's a step-by-step guide on how to convert ASCII to octal:

1. Choose the ASCII character you want to convert to octal.
2. Convert the ASCII character to its decimal value using an ASCII table.
3. Convert the decimal value to octal using the division-by-8 method.
4. Pad the octal value with leading zeros to make it 3 digits long (if necessary).

## Example

Let's walk through an example to illustrate the process. Suppose we want to convert the ASCII character 'A' to octal.

1. The ASCII value of 'A' is 65.
2. To convert 65 to octal, we use the division-by-8 method. We divide 65 by 8 and get a quotient of 8 with a remainder of 1. We write down the remainder (1) as the least significant digit of the octal value. We then divide 8 by 8 and get a quotient of 1 with a remainder of 0. We write down the remainder (0) as the next digit of the octal value. We continue this process until we have 3 digits. The octal value of 65 is 101.

   | Quotient | Remainder | Octal |
   | -------- | --------- | ----- |
   | $65/8=8$ | 1         | 1     |
   | $8/8=1$  | 0         | 01    |
   | $1/8=0$  | 1         | 101   |

3. Since the octal value we obtained in step 2 is only 3 digits long, we don't need to pad it with leading zeros.

## ASCII-Octal Table

Here's a table that shows the ASCII values of all characters and their corresponding octal values:

| Character | Description | Decimal | Octal |
| --------- | ----------- | ------- | ----- |
| 0         | Zero        | 48      | 60    |
| 1         | One         | 49      | 61    |
| 2         | Two         | 50      | 62    |
| 3         | Three       | 51      | 63    |
| 4         | Four        | 52      | 64    |
| 5         | Five        | 53      | 65    |
| 6         | Six         | 54      | 66    |
| 7         | Seven       | 55      | 67    |
| 8         | Eight       | 56      | 70    |
| 9         | Nine        | 57      | 71    |
| A         | Capital A   | 65      | 101   |
| B         | Capital B   | 66      | 102   |
| C         | Capital C   | 67      | 103   |
| D         | Capital D   | 68      | 104   |
| E         | Capital E   | 69      | 105   |
| F         | Capital F   | 70      | 106   |
| G         | Capital G   | 71      | 107   |
| H         | Capital H   | 72      | 110   |
| I         | Capital I   | 73      | 111   |
| J         | Capital J   | 74      | 112   |
| K         | Capital K   | 75      | 113   |
| L         | Capital L   | 76      | 114   |
| M         | Capital M   | 77      | 115   |
| N         | Capital N   | 78      | 116   |
| O         | Capital O   | 79      | 117   |
| P         | Capital P   | 80      | 120   |
| Q         | Capital Q   | 81      | 121   |
| R         | Capital R   | 82      | 122   |
| S         | Capital S   | 83      | 123   |
| T         | Capital T   | 84      | 124   |
| U         | Capital U   | 85      | 125   |
| V         | Capital V   | 86      | 126   |
| W         | Capital W   | 87      | 127   |
| X         | Capital X   | 88      | 130   |
| Y         | Capital Y   | 89      | 131   |
| Z         | Capital Z   | 90      | 132   |
| a         | Small a     | 97      | 141   |
| b         | Small b     | 98      | 142   |
| c         | Small c     | 99      | 143   |
| d         | Small d     | 100     | 144   |
| e         | Small e     | 101     | 145   |
| f         | Small f     | 102     | 146   |
| g         | Small g     | 103     | 147   |
| h         | Small h     | 104     | 150   |
| i         | Small i     | 105     | 151   |
| j         | Small j     | 106     | 152   |
| k         | Small k     | 107     | 153   |
| l         | Small l     | 108     | 154   |
| m         | Small m     | 109     | 155   |
| n         | Small n     | 110     | 156   |
| o         | Small o     | 111     | 157   |
| p         | Small p     | 112     | 160   |
| q         | Small q     | 113     | 161   |
| r         | Small r     | 114     | 162   |
| s         | Small s     | 115     | 163   |
| t         | Small t     | 116     | 164   |
| u         | Small u     | 117     | 165   |
| v         | Small v     | 118     | 166   |
| w         | Small w     | 119     | 167   |
| x         | Small x     | 120     | 170   |
| y         | Small y     | 121     | 171   |
| z         | Small z     | 122     | 172   |

See full ascii table [here][ASCII_Number].

## References

- [ASCII Number][ASCII_Number]
- [Decimal Number][Decimal_Number]
- [Octal Number][Octal_Number]

<!-- Reference -->

[ASCII_Number]: /blog/2024/01/01-what-is-ascii-number "What is an ASCII Number?"
[Decimal_Number]: /blog/2024/01/01-what-is-decimal-number "What is a Decimal Number?"
[Octal_Number]: /blog/2024/01/01-what-is-octal-number "What is an Octal Number?"
