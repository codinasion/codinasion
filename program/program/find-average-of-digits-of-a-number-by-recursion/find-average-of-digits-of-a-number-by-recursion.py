def average_of_digits(n):
    if n == 0:
        return 0
    digits = [int(d) for d in str(n)]
    return sum(digits) / len(digits)


print(average_of_digits(123))
