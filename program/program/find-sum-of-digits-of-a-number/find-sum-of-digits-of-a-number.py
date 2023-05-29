# This python script calculates the sum of the digits of a random number n


def sumOfDigits(n: int) -> int:
    return sum([int(x) for x in str(n)])
