def average_of_digits(n):
    if n == 0:
        return 0
    return (n % 10 + average_of_digits(n // 10)) / len(str(n))

print(average_of_digits(123))  # should print 2.0