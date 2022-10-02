x = str(input("Enter the integers in string form : ")).replace(" ","")

def squarer(x):
    if int(x) < 10:
        return x**2
    first_digit = int(str(x)[0])
    return first_digit**2 + squarer(int(str(x)[1:]))

print(squarer(x))