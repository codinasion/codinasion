def npr(n, r):
    if r > n:
        return 0
    # n! / (n-r)!  = n*(n-1)*(n-2)*..*(n-r+1)*(n-r)! / (n-r)! =n*(n-1)*(n-2)*..*(n-r+1)
    result = 1
    for i in range(n, n - r, -1):
        result *= i
    return result


n = int(input("Enter the n value: "))
r = int(input("Enter the r value: "))
print("npr value is:", npr(n, r))
