#input string
string = input("Input :")
if string.startswith('"'):
    print("Output :",list(string[1:-1]))
else:
    print("Output :",list(string))
