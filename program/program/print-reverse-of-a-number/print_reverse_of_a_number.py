def reverse_number(num):
    # Convert the number to a string
    str_num = str(num)
    
    # Check if the number is negative
    if str_num[0] == '-':
        # Reverse the number part and keep the '-' sign at the front
        reversed_num = int('-' + str_num[:0:-1])
    else:
        # Reverse the string and convert it back to an integer
        reversed_num = int(str_num[::-1])
    
    return reversed_num

# Example usage
number = int(input("Enter a number to reverse: "))
reversed_number = reverse_number(number)
print(f"The reversed number is: {reversed_number}")
