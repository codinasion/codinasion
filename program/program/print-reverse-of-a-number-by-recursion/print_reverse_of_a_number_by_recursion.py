def reverse_num(num: int, reversed_num: int = 0) -> int:
    # Base case: if the number is 0, there are no more digits to reverse
    if num == 0:
        return reversed_num

    # Get the last digit of the number
    last_digit = num % 10

    # Add the last digit to the beginning of the reversed number
    reversed_num = reversed_num * 10 + last_digit

    # Recursively call the function to reverse the remaining digits
    return reverse_num(num // 10, reversed_num)


# Test the function with a few examples
print(reverse_num(123))  # should print 321
print(reverse_num(7331))  # should print 1337
print(reverse_num(87124389372498))  # should print 89427398342178
