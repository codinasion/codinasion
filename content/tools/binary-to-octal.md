---
slug: binary-to-octal
---

## What is Binary?

Binary is a number system that only uses two digits: 1 and 0. Computers operate in binary, meaning they store data and perform calculations using only zeros and ones.

## What is Octal?

Octal is a number system that uses eight digits: 0, 1, 2, 3, 4, 5, 6, and 7. It is also known as base 8 numbering system since it is based on 8 following symbols: 0, 1, 2, 3, 4, 5, 6 and 7.

## How to convert Binary to Octal?

To convert Binary to Octal, we need to split the binary value into groups of three binary digits, then convert each group of three binary digits to it's Octal value.

### Example

Let's convert the binary value `1001101` to Octal.

First, we need to split the binary value into groups of three binary digits.

| Binary Value | Grouped Binary Value |
| ------------ | -------------------- |
| 1001101      | 001 001 101          |

Now, we need to convert each group of three binary digits to it's Octal value.

| Grouped Binary Value | Octal Value |
| -------------------- | ----------- |
| 001                  | 1           |
| 001                  | 1           |
| 101                  | 5           |

Finally, we need to combine all the Octal values together to get the final Octal value. In this case, the final Octal value is `115`. This is the Octal representation of the binary value `1001101`.
