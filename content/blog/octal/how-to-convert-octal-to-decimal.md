---
title: How to Convert Octal to Decimal
description: Octal is a base-8 numbering system that uses eight digits, from 0 to 7. Decimal is a base-10 numbering system that uses ten digits, from 0 to 9. In order to convert an octal number to decimal number, you need to multiply each octal digit by its corresponding power of 8 and then add up the results.
tags:
  - octal
  - decimal
date: 2022-01-26
---

[Octal][Octal_Number] is a `base-8` numbering system that uses eight digits, from 0 to 7. [Decimal][Decimal_Number] is a `base-10` numbering system that uses ten digits, from 0 to 9. In order to convert an octal number to decimal number, you need to multiply each octal digit by its corresponding power of 8 and then add up the results.

## Conversion

Here are the steps to convert an octal number to decimal number:

1. Identify the octal number you want to convert.
2. Write down the powers of 8. Starting from the rightmost digit, write down the powers of 8 in increasing order from left to right.
3. Multiply each octal digit by its corresponding power of 8. Starting from the rightmost digit, multiply each octal digit by its corresponding power of 8.
4. Add up the results. Add up the results from step 3 to get the decimal equivalent of the octal number.

## Example

Let's say we have the octal number 345. To convert this octal number to decimal number, we need to multiply each octal digit by its corresponding power of 8 and then add up the results:

```text
5 * 1 = 5
4 * 8 = 32
3 * 64 = 192
```

Adding up the results, we get the decimal equivalent of the octal number:

$$5 + 32 + 192 = 229$$

Therefore, the octal number `345` corresponds to the decimal number `229`.

## Octal-Decimal Table

Here's a table of decimal numbers and their octal equivalents:

| Octal | Decimal |
| ----- | ------- |
| 0     | 0       |
| 1     | 1       |
| 2     | 2       |
| 3     | 3       |
| 4     | 4       |
| 5     | 5       |
| 6     | 6       |
| 7     | 7       |
| 10    | 8       |

## References

- [Decimal Number][Decimal_Number]
- [Octal Number][Octal_Number]

<!-- Reference -->

[Decimal_Number]: /blog/2024/01/01-what-is-decimal-number "What is a Decimal Number?"
[Octal_Number]: /blog/2024/01/01-what-is-octal-number "What is an Octal Number?"
