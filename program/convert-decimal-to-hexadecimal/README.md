---
title: Convert decimal to hexadecimal
trackId: 3894
---

## Write a program to convert decimal to hexadecimal

Hexadecimal is a base-16 number system. It uses sixteen digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. The digits are called hexits. A hexit is the smallest unit of information in a computer. A hexit can be used to represent a single value, such as 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, or F, or it can be used to represent a single state, such as on or off.

To convert a decimal number to hexadecimal, we can use the following algorithm:

1. Divide the decimal number by 16.
2. Write down the remainder.
3. Divide the quotient by 16.
4. Write down the remainder.
5. Repeat steps 3 and 4 until the quotient is 0.
6. The hexadecimal number is the sequence of remainders written in reverse order.

```
Input  : 10
Output : A
```

---
