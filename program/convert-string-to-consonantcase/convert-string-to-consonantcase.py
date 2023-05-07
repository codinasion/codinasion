# Python program to convert a string to consonantcase
def consonantCase(a: str):
    new_str = ""
    for i in a:
        new_str += i.lower() if i in ["a", "e", "i", "o", "u"] else i.upper()
    return new_str


x = input("Enter a string : ")
print("Consonant Case of", x, " is ", consonantCase(x))
