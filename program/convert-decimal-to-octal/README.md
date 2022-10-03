---
title: Convert decimal to octal
trackId: 976
---

## Write a program to convert decimal to octal

Octal is a base-8 number system. It uses only eight digits: 0, 1, 2, 3, 4, 5, 6, and 7. The digits are called octits. An octit is the smallest unit of information in a computer. An octit can be used to represent a single value, such as 0, 1, 2, 3, 4, 5, 6, or 7, or it can be used to represent a single state, such as on or off.

To convert a decimal number to octal, we can use the following algorithm:

1. Divide the decimal number by 8.
2. Write down the remainder.
3. Divide the quotient by 8.
4. Write down the remainder.
5. Repeat steps 3 and 4 until the quotient is 0.
6. The octal number is the sequence of remainders written in reverse order.

```
Input  : 10
Output : 12
```

---
