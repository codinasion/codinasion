# Recursive function to return gcd of a and b
def recursiveGcd(a: int, b: int):
    # Everything divides 0
    if a == 0 or b == 0:
        return a if a == 0 else b

    # base case
    if a == b:
        return a

    # a is greater
    if a > b:
        return recursiveGcd(a - b, b)
    return recursiveGcd(a, b - a)


x = int(input("n1: "))
y = int(input("n2: "))
print(f"GCD of {x} and {y} : {recursiveGcd(x,y)}")
