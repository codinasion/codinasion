---
title: Convert hexadecimal to decimal
trackId: 1659
---

## Write a program to convert hexadecimal to decimal

Hexadecimal is a base-16 number system. It uses sixteen digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, and F. The digits are called hexits. A hexit is the smallest unit of information in a computer. A hexit can be used to represent a single value, such as 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, or F, or it can be used to represent a single state, such as on or off.

To convert a hexadecimal number to decimal, we can use the following algorithm:

1. Multiply the first hexit by 16^0.
2. Multiply the second hexit by 16^1.
3. Multiply the third hexit by 16^2.
4. Multiply the fourth hexit by 16^3.
5. Repeat steps 3 and 4 until the last hexit.
6. Add the results of all the multiplications.
7. The decimal number is the sum of all the multiplications.

```
Input  : A
Output : 10
```

---
