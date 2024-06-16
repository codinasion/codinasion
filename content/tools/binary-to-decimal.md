---
slug: binary-to-decimal
---

## What is Binary?

Binary is a number system that only uses two digits: 1 and 0. Computers operate in binary, meaning they store data and perform calculations using only zeros and ones.

## What is Decimal?

Decimal is a number system that uses ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. It is also known as base 10 numbering system since it is based on 10 following symbols: 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9.

## How to convert Binary to Decimal?

To convert Binary to Decimal, we need to multiply each binary digit by it's place value, then add up all the results.

### Example

Let's convert the binary value `1001101` to Decimal.

First, we need to multiply each binary digit by it's place value.

| Binary Digit | Place Value | Result |
| ------------ | ----------- | ------ |
| 1            | $2^6$       | 64     |
| 0            | $2^5$       | 0      |
| 0            | $2^4$       | 0      |
| 1            | $2^3$       | 8      |
| 1            | $2^2$       | 4      |
| 0            | $2^1$       | 0      |
| 1            | $2^0$       | 1      |

Now, we need to add up all the results.

$64 + 0 + 0 + 8 + 4 + 0 + 1 = 77$

Finally, we need to add up all the results. In this case, the final Decimal value is `77`. This is the Decimal representation of the binary value `1001101`.
