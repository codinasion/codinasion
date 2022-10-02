octnum = input()
 
# Convert octal to decimal
decnum = int(octnum, 8)
 
# Convert decimal to hexadecimal
hexadecimal = hex(decnum).replace("0x", "")
 
# Printing the hexadecimal value
print(hexadecimal)