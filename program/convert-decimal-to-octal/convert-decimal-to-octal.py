def decimal_to_octal(n):
   
    # Store the remainders in this array
    octal = []

    # Repeatedly divide until quotient is 0
    while (n != 0):
        
        # Store the remainder in the octal array
        octal.append(n % 8)
        
        # n becomes the quotient
        n = int(n / 8)
    
    # Print out the sequence of remainders in reverse order
    result = ''.join(str(x) for x in octal[::-1])
    print(result)
        
# Run the convertor on any input number
try:        
    decimal_to_octal(int(input("Decimal to convert: ")))
except:
    print("Please enter a valid decimal number.")