---
title: Convert octal to decimal
trackId: 602
---

## Write a program to convert octal to decimal

Octal is a base-8 number system. It uses only eight digits: 0, 1, 2, 3, 4, 5, 6, and 7. The digits are called octits. An octit is the smallest unit of information in a computer. An octit can be used to represent a single value, such as 0, 1, 2, 3, 4, 5, 6, or 7, or it can be used to represent a single state, such as on or off.

To convert an octal number to decimal, we can use the following algorithm:

1. Multiply the first octit by 8^0.
2. Multiply the second octit by 8^1.
3. Multiply the third octit by 8^2.
4. Multiply the fourth octit by 8^3.
5. Repeat steps 3 and 4 until the last octit.
6. Add the results of all the multiplications.
7. The decimal number is the sum of all the multiplications.

```
Input  : 12
Output : 10
```

---
