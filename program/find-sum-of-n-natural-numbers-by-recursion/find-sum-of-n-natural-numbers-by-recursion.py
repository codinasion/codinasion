def recsum(n):
    if n <= 1:
        return n
    else:
        return n + recsum(n-1)

num = int(input("Enter a number: "))
total=recsum(num)
print("The sum is",total)
