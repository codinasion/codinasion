binary_number = int(input("Enter the binary number : "))

i, j, b, octal = 0, 0, 0, 0
while binary_number != 0:
    b += (binary_number % 10) * (2**i)
    i += 1
    binary_number = binary_number // 10

while b != 0:
    octal += (b % 8) * (10**j)
    j += 1
    b = b // 10

print("The octal conversion of binary number is ", octal)
