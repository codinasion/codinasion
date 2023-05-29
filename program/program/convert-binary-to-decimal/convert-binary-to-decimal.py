# title: Convert binary to decimal
# trackId: 1949
n = int(input("enter the binary value:"))
decimal = 0
power = 1
while n > 0:
    rem = n % 10
    n = n // 10
    decimal += rem * power
    power = power * 2
print(decimal)
