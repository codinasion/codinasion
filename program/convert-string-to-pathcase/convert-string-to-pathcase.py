str = input("Enter string: ")
for i in range(0, len(str), 1):
    if str[i] == " ":
        str = str.replace(str[i], "/")
print(str)
