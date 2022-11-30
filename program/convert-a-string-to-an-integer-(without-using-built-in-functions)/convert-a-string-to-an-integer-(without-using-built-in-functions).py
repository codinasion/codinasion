# -*- coding: utf-8 -*-
"""
Created on Sun Oct  9 16:08:39 2022

@author: smiti
"""

# Python3 program to convert a string to an integer (without using built-in functions)


def convert(s: str) -> int:  # function that will do the needful

    num = 0  # Initialize an integer variable

    # Iterate through all the characters of the string
    for i in s:
        # Subtract ascii value of 0 from the current digit
        num = num * 10 + (ord(i) - ord("0"))

    return num  # return the ans


# Take input:
print(convert("123"))
