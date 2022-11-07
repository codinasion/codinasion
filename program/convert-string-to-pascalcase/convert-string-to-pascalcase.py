input_string = input()
output_string=""
for word in input_string.split(" "):
    # capitalize() is a buit-in function in python that converts first character in String to uppercase and remaining characters to lowercase
     output_string+=word.capitalize()
print(output_string)