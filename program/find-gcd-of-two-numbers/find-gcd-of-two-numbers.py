def findGCD(x, y):
    while x != y:
        if x > y:
            x = x - y
        elif x < y:
            y = y - x
    return x

x = int(input("n1: "))
y = int(input("n2: "))
print(f'GCD of {x} and {y} : {findGCD(x,y)}')
