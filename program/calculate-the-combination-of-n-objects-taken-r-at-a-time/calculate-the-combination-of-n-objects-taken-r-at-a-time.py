def nCr(n, r):
    return factorial(n) / (factorial(r) * factorial(n - r))


def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)


n = 5
r = 2
print(int(nCr(n, r)))
