---
title: Convert binary to decimal
trackId: 1949
---

## Write a program to convert binary to decimal

Binary is a base-2 number system. It uses only two digits: 0 and 1. The digits are called bits. A bit is the smallest unit of information in a computer. A bit can be either 0 or 1. A bit can be used to represent a single value, such as 0 or 1, or it can be used to represent a single state, such as on or off.

To convert a binary number to decimal, we can use the following algorithm:

1. Multiply the first bit by 2^0.
2. Multiply the second bit by 2^1.
3. Multiply the third bit by 2^2.
4. Multiply the fourth bit by 2^3.
5. Repeat steps 3 and 4 until the last bit.
6. Add the results of all the multiplications.
7. The decimal number is the sum of all the multiplications.

```
Input  : 1010
Output : 10
```

---
