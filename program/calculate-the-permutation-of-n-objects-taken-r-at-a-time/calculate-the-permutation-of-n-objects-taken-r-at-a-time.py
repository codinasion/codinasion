def factorial(x):
    if x == 1 or 0:
        return 1
    return x * factorial(x - 1)


n, r = map(int, input().split())

print(factorial(n) // factorial(n - r))
