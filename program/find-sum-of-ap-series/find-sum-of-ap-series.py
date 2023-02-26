# Program to find the sum of n-terms in an AP

# The input to the program are a,n,d
# a - first term
# n - number of terms
# d - common difference

a, n, d = list(map(int, input().split(" ")))

if n < 0:
    print("Error! Number of terms cannot be negative")
else:
    print((n / 2) * ((2 * a) + ((n - 1) * d)))
