num1 = 12
num2 = 18


def gcd(num1, num2):
    if num2 == 0:
        return num1
    else:
        return gcd(num2, num1 % num2)


def lcm(num1, num2):
    return (num1 * num2) // gcd(num1, num2)


print("num1 : ", num1)
print("num2 : ", num2)

print("Output : ", lcm(num1, num2))
