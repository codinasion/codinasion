# Python program to calculate factorial of number using recursion
def fact(x):

    if x == 1 or x == 0:
        return 1
    else:
        return x * fact(x - 1)  # using recursion


n = int(input("Enter a number : "))

if n < 0:
    print("Factorial can not be calculated for negative numbers!")
else:
    print("Factorial of", n, "=", fact(n))
