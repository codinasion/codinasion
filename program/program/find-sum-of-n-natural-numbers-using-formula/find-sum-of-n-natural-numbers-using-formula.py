n = int(input("Enter the nth number : "))


def sumOfnNaturalNumber(n):
    sum = int(n * ((n + 1) / 2))
    return sum


print("Total sum : ", sumOfnNaturalNumber(n))
