def ncr(n, r):
    if r > n:
        return 0
    if r == 0 or r == n:
        return 1
    r = min(r, n - r)  # take advantage of symmetry
    # ncr    =    n! / (n-r)! * r!     =     n*(n-1)*(n-2)*..*(n-r+1)*(n-r)! / (n-r)! * r!     =     n*(n-1)*(n-2)*..*(n-r+1) / r!
    numerator = 1  # (n-r)!
    denominator = 1  # r!
    for i in range(r):
        numerator *= n - i
        denominator *= i + 1
    return numerator // denominator


n = int(input("Enter the n value: "))
r = int(input("Enter the r value: "))
print("npr value is:", ncr(n, r))
