# Input a binary number and remove any white spaces
binary_num = (input("Enter a binary number: ")).replace(" ", "")

try:
    # Convert to integer
    int_num = int(binary_num, 2)

    # Convert to hexadecimal and format correctly
    hex_num = format(int_num, "x").upper()

    # Print result
    print(hex_num)

except:
    # Error
    print("Please input a valid binary number.")
