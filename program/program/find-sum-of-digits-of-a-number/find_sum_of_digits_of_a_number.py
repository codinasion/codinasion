# This python script calculates the sum of the digits of a random number n

def find_sum_of_digits_of_a_number(n: int) -> int:
    sum_of_digits = 0
    for digit in str(n):
        sum_of_digits += int(digit)
    return sum_of_digits

print(find_sum_of_digits_of_a_number(123))

# Shorthand for the above function
# def sumOfDigits(n: int) -> int:
#     return sum([int(x) for x in str(n)])
# 
# print(sumOfDigits(123))
